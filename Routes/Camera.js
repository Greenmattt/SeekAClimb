import React, {useState, useEffect} from "react";
import {View, Text, Button, TouchableOpacity, Image} from "react-native";
import { Camera, CameraType } from 'expo-camera';
import * as ImageManipulator from 'expo-image-manipulator';
import AsyncStorage from '@react-native-async-storage/async-storage';

import style from "../Component/Styles";
import SneakyBackButton from "../Component/SneakyBackButton";

const CameraMain = (props) => {

  const [permission, requestPermission] = Camera.useCameraPermissions();

  const [cameraRef, setCameraRef] = useState(null);

  const [estImagePrise, setEstImagePrise] = useState(false);
  const [photoConfScreen, SetPhotoConfScreen] = useState();


  var imageEnvoyer;

  const GoBackToRoutes = () => {
    props.navigation.navigate('Routes');
  }

    // load du style
  const [styles, setLeStyle] = useState({});

  useEffect(() => {
    async function getStyle (){
      const s = await style();
      setLeStyle(s);
    }
    getStyle();
  }, []);


  const takePicture = async() => {
    if (cameraRef !== null) {
      const image = await cameraRef.takePictureAsync({quality:1});

      const resizedImage = await ImageManipulator.manipulateAsync(
        image.uri,
        [{resize : {width:600}}],
        {compress: 0.7, format:'jpeg'}
      );

      imageEnvoyer = resizedImage;

      console.log(resizedImage);

      SetPhotoConfScreen(
        <View style={styles.photoConfMain}>
  
          <View style={styles.photoConfPic}>
            <Image source={{uri:image.uri}} style={{width:'80%', height:'100%'}}/>
          </View>

          <View style={styles.photoConfButton}>

            <TouchableOpacity style={styles.photoVerrifButton} onPress = {() => setEstImagePrise(false)}>
              <Text style={styles.text}>Annuler</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.photoVerrifButton} onPress={envoiImage}>
              <Text style={styles.text}>Envoyer</Text>
            </TouchableOpacity>

          </View>

        </View>
      );

      setEstImagePrise(true);
      getConnectedAccount();
    }
  }

  const [mailConnecte, onChangeMailConnecte] = useState('');

  const getConnectedAccount = async() => {
    let email = await AsyncStorage.getItem("@email");
    if (email != null) {
      let jsonEmail = JSON.parse(email);
      onChangeMailConnecte(jsonEmail);
    }
  }

  const envoiImage = async() => {
    const form = new FormData();

    const image = await imageEnvoyer.uri
    if (mailConnecte != ''){
      form.append(email, {
      uri: image,
      type: 'image/jpg',
      name:'image.jpg'
    });

    console.log(form._parts[0][1]);

    try {

      let res = await fetch('http://91.164.5.221:50000/uploadImage',
      {method:'POST',
       body: form,
       headers: {'Content-Type': 'multipart/form-data'}}
      );

      const texte = await res.text()
      console.log(String(texte));
    }
    catch(error) {
      console.warn(error);
    }

    setEstImagePrise(false);

    }
    else {
      console.log("connecte toi èfdépé!");
    }
    

  }


  return (
    <View style={styles.container}>
      
      {permission === null || permission.granted ?

      ! estImagePrise ?
      <Camera style={{flex:12}} type={CameraType.back} ref={(ref) => setCameraRef(ref)}>
        <TouchableOpacity style={styles.photoButton} onPress={takePicture}/>
      </Camera>
      
      // confirmation d'envoi de la photo prise
      : photoConfScreen
    

      :
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>}
      <SneakyBackButton onPress = {() => GoBackToRoutes(props)}/>
    </View>
  );
}

export default CameraMain;

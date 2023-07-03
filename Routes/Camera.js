import React, {useState, useEffect} from "react";
import {View, Text, Button, TouchableOpacity, Image} from "react-native";
import { Camera, CameraType } from 'expo-camera';
import * as ImageManipulator from 'expo-image-manipulator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';

import style from "../Component/Styles";
import SneakyBackButton from "../Component/SneakyBackButton";
import PreviewRoute from "../Component/PreviewRoute";

const CameraMain = (props) => {

  const [permission, requestPermission] = Camera.useCameraPermissions();

  const [cameraRef, setCameraRef] = useState(null);

  const [estImagePrise, setEstImagePrise] = useState(false);
  const [photoConfScreen, SetPhotoConfScreen] = useState();
  const [estPhotoConfirmee, setEstPhotoConfirmee] = useState(false);


  var imageEnvoyer;

  const GoBackToRoutes = () => {
    props.navigation.navigate('Routes');
  }

    // load du style
  const [styles, setLeStyle] = useState({});
  const [location, setLocation] = useState();

  useEffect(() => {
    async function getStyle (){
      const s = await style();
      setLeStyle(s);

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }
    getStyle();
  }, []);


  const takePicture = async() => {
    if (cameraRef !== null) {

      getConnectedAccount();
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
      
    }
  }

  let leMail = '';

  const getConnectedAccount = async() => {
    let email = await AsyncStorage.getItem("@email");
    if (email != null) {
      let jsonEmail = JSON.parse(email);
      leMail = jsonEmail;
      console.log(jsonEmail);
    }
  }

  const [aIARepondu, setaIARepondu] = useState(false);
  const [reponseIA, setReponseIA] = useState();

  const envoiImage = async() => {
    const form = new FormData();

    const image = await imageEnvoyer.uri
    if (leMail != ''){
      form.append(leMail, {
      uri: image,
      type: 'image/jpg',
      name:'image.jpg'
    });

    console.log(form._parts[0][1]);
    setEstPhotoConfirmee(true);

    try {

      let res = await fetch('http://91.164.5.221:50000/uploadImage',
      {method:'POST',
       body: form,
       headers: {'Content-Type': 'multipart/form-data'}}
      );

      const texte = await res.text();
      console.log(String(texte));
      }
      catch(error) {
        console.warn(error);
      }
      finally {
        try {

          let resp = await fetch('http://91.164.5.221:50000/IAImage?lat='+String(location.coords.latitude)
                                                                 +'&long='+String(location.coords.longitude)
                                                                 +'&email='+String(leMail));

          const t = await resp.json();
          setReponseIA(t)
          // console.log(String(t));
        } catch(e) {
          console.warn(e);
        } finally {
          setaIARepondu(true);
        }
      }

    

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
          </Camera> // Si on a les permission et que l'image n'est pas prise
        
        : estPhotoConfirmee ?
          aIARepondu ? 
          <PreviewRoute json={reponseIA}/> // Si on a les permissions, que l'image est prise et que l'IA a répondu

          : <Text style={styles.text}>Veuillez attendre que l'IA renvoie le résultat</Text>
        

        :photoConfScreen // Si on a les permission, que l'image est prise et que l'IA a pas répondu
    

      :
      <View style={styles.container}> 
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View> // Si on a pas les permissions
      }
      <SneakyBackButton onPress = {() => GoBackToRoutes(props)}/> 
    </View>
  );
}

export default CameraMain;

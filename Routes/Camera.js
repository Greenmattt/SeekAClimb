import React, {useState, useEffect} from "react";
import {View, Text, Button, TouchableOpacity, Image} from "react-native";
import { Camera, CameraType } from 'expo-camera';

import style from "../Component/Styles";
import GoBackButton from "../Component/GoBackButton";

const CameraMain = (props) => {

  const [permission, requestPermission] = Camera.useCameraPermissions();

  const [cameraRef, setCameraRef] = useState(null);

  const [estImagePrise, setEstImagePrise] = useState(false);
  const [photoConfScreen, SetPhotoConfScreen] = useState();



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
      const image = await cameraRef.takePictureAsync();

      SetPhotoConfScreen(
        <View style={{flex:10}}>
          <View style={{flex:0.5}}/>
  
          <View style={{flex:5, alignItems:'center'}}>
            <Image source={{uri:image.uri}} style={{width:'75%', height:'100%'}}/>
          </View>

          <View style={{flex:0.5}}/>

          <View style={{flex:0.5, flexDirection:"row"}}>
            <View style={{flex:0.05}}/>

            <TouchableOpacity style={styles.photoVerrifButton} onPress = {() => setEstImagePrise(false)}>
              <Text style={styles.text}>Annuler</Text>
            </TouchableOpacity>

            <View style={{flex:0.05}}/>

            <TouchableOpacity style={styles.photoVerrifButton}>
              <Text style={styles.text}>Envoyer</Text>
            </TouchableOpacity>

            <View style={{flex:0.05}}/>
          </View>
  
          <View style={{flex:1}}/>
        </View>
      );

      setEstImagePrise(true);
    }
  }


  return (
    <View style={styles.container}>
      <GoBackButton onPress = {() => GoBackToRoutes(props)}/>
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
    </View>
  );
}

export default CameraMain;











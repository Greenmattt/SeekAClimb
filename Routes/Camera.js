import React, {useState, useEffect} from "react";
import {View, Text, Button} from "react-native";
import { Camera, CameraType } from 'expo-camera';

import style from "../Component/Styles";
import GoBackButton from "../Component/GoBackButton";

const CameraMain = (props) => {

  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

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

  return (
    <View style={styles.container}>
      <GoBackButton onPress = {() => GoBackToRoutes(props)}/>
      {permission!==undefined ?
      <Camera style={{flex:10}} type={CameraType.back}/>
      : 
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>}
    </View>
  );
}

export default CameraMain;

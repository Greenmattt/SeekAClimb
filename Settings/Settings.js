import React, {useState,useEffect} from 'react';
import { Text, View, Switch, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAsyncStorage} from '@react-native-async-storage/async-storage'; // npm install @react-native-async-storage/async-storage

import Styles from '../Component/Styles';

const Settings = (props) => {

  const goToInformations = () => {
    props.navigation.navigate('Informations');
  };

  const [theme, setTheme] = useState('sombre');
  const {getItheme, setItheme } = useAsyncStorage('@themeState');

  const initTheme = async () => {
    const itheme = await getItheme();
    setTheme(itheme);
  };
  
  const writeTheme = async newTheme => {
    await setItheme(newTheme);
    setTheme(newValue);
  };

  useEffect(() => {
    initTheme();
  }, []);
  
  let changeTheme = () =>{
    if (theme != 'sombre'){
      writeTheme('sombre');
    } else{
      writeTheme('clair')
    }
  };
  
  /*initTheme2 = async () => {
    try{
      return await AsyncStorage.getItem('@themeState')
    } catch{
      return await AsyncStorage.setItem('@themeState', 'sombre')
    }
  }
  let setTheme2 = async () => {
    if (initTheme !="sombre"){
      return await AsyncStorage.setItem('@themeState', 'sombre');
    } else{
      return await AsyncStorage.setItem('@themeState', 'clair');
    }
  }*/

  return (
    <View style={Styles.container}>

      <View style={Styles.settingsBox}>
      <Switch
        trackColor={{false: '#3a75b1', true: "#3ab175"}}
        thumbColor = {"#fff"}
        onValueChange = {() => changeTheme()}
        value = {theme}/>
      </View>

      <View style={Styles.infoSettingsBox}>
        <TouchableOpacity onPress={goToInformations} style={Styles.infoSettingsButton}>
          <Text style={Styles.text}>Informations</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}
  
export default Settings;

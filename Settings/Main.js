import React, {useState,useEffect} from 'react';
import { Text, View, Switch } from 'react-native';
import styles from '../Component/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import Informations from './Informations';

const Settings = () => {

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
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style = {styles.textTitre}>* Paramètres</Text>
      </View>
      <View style = {styles.container2}>
        <Text style = {styles.text}>Theme Sombre</Text>

        <Switch
        trackColor={{false: '#3a75b1', true: "#3ab175"}}
        thumbColor = {"#fff"}
        onValueChange = {() => changeTheme()}
        value = {theme}/>

        <Text style = {styles.text}>Theme Clair</Text>
      </View>
    </View>
  );
}
  
export default Settings;

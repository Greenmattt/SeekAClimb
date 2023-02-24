import React, {useState,useEffect} from 'react';
import { Text, View, Switch, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Updates from 'expo-updates';

import style from '../Component/Styles';

const Settings = (props) => {

  // load du style
  const [styles, setLeStyle] = useState({});

  useEffect(() => {
    async function getStyle (){
      const s = await style();
      setLeStyle(s);
    }
    getStyle();
  }, []);

  const goToInformations = () => {
    props.navigation.navigate('Informations');
  };

  const [estClair, setEstClair] = useState(false);
  
  // ici on update le switch pour qu'il soit pas tout le temps du mm côté en lençant l'app

  useEffect(() => {
    async function getTheme() {
      try {
        let val = await AsyncStorage.getItem('@theme');
        let v = await JSON.parse(val);
        setEstClair(v);
      } catch(e) {
        console.warn(e)
      }
    }

    getTheme();
  }, [])

  const storeTheme = async (value) => {
    try {
      await AsyncStorage.setItem("@theme", JSON.stringify(value));
      setEstClair(value);
      console.log("valeur sauvegardée : ", value);
    } catch(e) {
      console.warn(e);
    }
  }

  let ThemeLabel = 'Sombre';

  const changeTheme = () => {
    if (estClair) {
      setEstClair(false);
      storeTheme(false).then(Updates.reloadAsync());
      ThemeLabel = 'Clair';
    } else {
      setEstClair(true);
      storeTheme(true).then(Updates.reloadAsync());
      ThemeLabel = 'Sombre';
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.settingsBox}>
        <View style={styles.settingsThemeBox}>
          <Switch
            trackColor={{false: '#3a75b1', true: "#3ab175"}}
            thumbColor = {"#fff"}
            onValueChange = {() => changeTheme()}
            value = {estClair}/>
          <Text style={styles.text}>{ThemeLabel}</Text>
        </View>
        <View style={styles.settingsLanguageBox}>
          <Text style={styles.text}>Changemement de langue</Text>
        </View>
      </View>

      <View style={styles.infoSettingsBox}>
        <TouchableOpacity onPress={goToInformations} style={styles.infoSettingsButton}>
          <Text style={styles.text}>Informations</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}
  
export default Settings;

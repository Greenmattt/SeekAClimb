import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Switch } from 'react-native';
import * as Updates from 'expo-updates';
import AsyncStorage from '@react-native-async-storage/async-storage';

import style from '../Component/Styles';

//Screen One
const Options = (props) => {

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

  //onPress To Navigate
  const onPressSeConnecter = () => {
    props.navigation.navigate('SeConnecter');
  };

  const onPressCreerCompte = () => {
    props.navigation.navigate('CreerCompte');
  };

  // load du style
  const [styles, setLeStyle] = useState({});

  useEffect(() => {
    async function getStyle (){
      const s = await style();
      setLeStyle(s);
    }
    getStyle();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.accountBox}>
          <TouchableOpacity
            style={styles.button}
            onPress={onPressSeConnecter}>
            <Text style={styles.text}> Se connecter </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.accountBox}>
          <TouchableOpacity
            style={styles.button}
            onPress={onPressCreerCompte}>
            <Text style={styles.text}> Creer un compte </Text>
          </TouchableOpacity>
        </View>
      </View>
      
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
            <Text style={styles.text}>Changemement de langue [Work in Progress]</Text>
          </View>
        </View>

        <View style={styles.infoSettingsBox}>
          <TouchableOpacity onPress={goToInformations} style={styles.infoSettingsButton}>
            <Text style={styles.text}>Informations</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Options;

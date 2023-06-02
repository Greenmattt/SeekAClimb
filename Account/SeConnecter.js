import React, {useState, useEffect} from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import style from '../Component/Styles';
import StrInput from '../Component/StrInput';
import GoBackButton from '../Component/GoBackButton'

const onPressRetour = (props) => {
  props.navigation.navigate('Options');
};

const SeConnecter = (props) => {
  const [textEmail, onChangeEmail] = useState('');
  const [textMdp, onChangeMdp] = useState('');

  const [estCompteRefuse, setEstCompteRefuse] = useState(false);
  const [estCompteAccepte, setEstCompteAccepte] = useState(false);
  const [textErreurRefus, setTextErreurRefus] = useState('');

  // load du style
  const [styles, setLeStyle] = useState({});

  useEffect(() => {
    async function getStyle (){
      const s = await style();
      setLeStyle(s);
    }
    getStyle();
  }, [])

const connecter = async() => {
  try {
    let res = await fetch('http://91.164.5.221:50000/Connect?email='+String(textEmail)+'&mdp='+String(textMdp),{
      method:'GET',
    });

      var json_res = await res.json();

  } catch(error) {
    console.warn(error);
  } finally {
    if (json_res.erreur != undefined) {
      setEstCompteRefuse(true);
      setTextErreurRefus(String(json_res.erreur));
    }
    else {
      if (json_res["201"] == "True") {
        setEstCompteAccepte(true);
        try {
          await AsyncStorage.setItem("@email", JSON.stringify(textEmail));
          await AsyncStorage.setItem("@mdp", JSON.stringify(textMdp));
          console.log("email : ", textEmail, "mdp", textMdp);
        } catch(e) {
          console.warn(e);
        }
      }
    }
  }
}

  return (
    <View style={styles.container}>
      <GoBackButton onPress = {() => onPressRetour(props)} />
      
      <View style={styles.informationsBox}>

        {/*Input email */}
        <StrInput onChangeText={onChangeEmail} value={textEmail} placeholder={"Email"} secureTextEntry={false}/>

        {/*Input mot de passe */}
        <StrInput onChangeText={onChangeMdp} value={textMdp} placeholder={"Mot de passe"} secureTextEntry={false}/>

      </View>
      
      <TouchableOpacity style={styles.photoVerrifButton} onPress={connecter}>
        <Text style={styles.text}>Se Connecter</Text>
      </TouchableOpacity>

      {estCompteRefuse ? <Text style={styles.text}>{textErreurRefus}</Text> : <View/>}

      {estCompteAccepte ? <Text style={styles.text}>Vous êtes connecté</Text>: <View/>}
    </View>
  );
};

export default SeConnecter;

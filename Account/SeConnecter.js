import React, {useState, useEffect} from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
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

  const [mailConnecte, onChangeMailConnecte] = useState('');

  // load du style
  const [styles, setLeStyle] = useState({});

  useEffect(() => {
    async function getStyle (){
      const s = await style();
      setLeStyle(s);
    }
    getStyle();
    getConnectedAccount();
  }, []);

  const getConnectedAccount = async() => {
    let email = await AsyncStorage.getItem("@email");
    if (email != null) {
      let jsonEmail = JSON.parse(email);
      setEstCompteAccepte(true);
      onChangeMailConnecte(jsonEmail);
    }
  }


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
    else if (json_res.message != undefined) {
      setEstCompteRefuse(true);
      setTextErreurRefus("Internal server error :(");
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


  const deconnection = async() => {
    try {
      await AsyncStorage.removeItem("@email");
      await AsyncStorage.removeItem("@mdp");
      setEstCompteRefuse(true);
      setEstCompteAccepte(false);
      setTextErreurRefus("Vous êtes déconnecté du compte")
    }
    catch(e) {
      console.warn(e);
    }
  }

  const alertSuppressionCompte = () => {
    Alert.alert('Validation de déconnexion', 'Etes-vous sûr de vouloir vous déconnecter du compte : \n'+String(textEmail), 
    [{text:'Non', style:'cancel'},{text:'Oui', onPress:deconnection} ])
  }

  return (
    <View style={styles.container}>
      <GoBackButton onPress = {() => onPressRetour(props)} />
      
      <View style={styles.informationsBox}>

        {/*Input email */}
        <StrInput onChangeText={onChangeEmail} value={textEmail} placeholder={"Email"} secureTextEntry={false}/>

        {/*Input mot de passe */}
        <StrInput onChangeText={onChangeMdp} value={textMdp} placeholder={"Mot de passe"} secureTextEntry={true}/>

        {estCompteRefuse ? <Text style={styles.text}>{textErreurRefus}</Text> : <View/>}

        {estCompteAccepte 
        ?
            <Text style={styles.text}>Vous êtes connecté au compte {mailConnecte}</Text>                
        : <View/>}

      </View>

      {estCompteAccepte ?
        <TouchableOpacity style={styles.photoVerrifButton} onPress={alertSuppressionCompte}>
          <Text style={styles.text}>Se Déconnecter</Text>
        </TouchableOpacity> 
        : <View/>}
      
      <TouchableOpacity style={styles.photoVerrifButton} onPress={connecter}>
        <Text style={styles.text}>Se Connecter</Text>
      </TouchableOpacity>


    </View>
  );
};

export default SeConnecter;

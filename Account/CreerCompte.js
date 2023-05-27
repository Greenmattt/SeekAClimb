import React, {useState, useEffect} from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import style from '../Component/Styles';
import StrInput from '../Component/StrInput';
import GoBackButton from '../Component/GoBackButton';

const onPressRetour = (props) => {
  props.navigation.navigate('Options');
};

const CreerCompte = (props) => {
  // load du style
  const [styles, setLeStyle] = useState({});

  useEffect(() => {
    async function getStyle (){
      const s = await style();
      setLeStyle(s);
    }
    getStyle();
  }, [])

  const [textNom, onChangeNom] = useState('');
  const [textPrenom, onChangePrenom] = useState('');
  const [textEmail, onChangeEmail] = useState('');
  const [textMdp, onChangeMdp] = useState('');
  const [textMdpConfirme, onChangeMdpConfirme] = useState('');

  const [estMdpConcordant, setEstMdpConcordant] = useState(true);

  const creerCompte = async() => {

    if (textMdp != textMdpConfirme) {
      setEstMdpConcordant(false);
      console.log('different')
    }
    else {
      try {
        let res = await fetch('http://91.164.5.221:50000/creerCompte',{
          method:'POST',
          body: JSON.stringify({
            nom: textNom,
            prenom: textPrenom,
            email: textEmail,
            mdp: textMdp
          }),
          headers: {'Content-Type':'application/json'}
        });

        var texte = await res.text();
        console.log(texte);

      } catch(error) {
        console.warn(error);
      }


    }
  }

  return (

    <View style={styles.container}>
      {/* Bouton de retour dans la barre verte */}
      <GoBackButton onPress = {() => onPressRetour(props)} />

      <View style={styles.informationsBox}>

        {/*Input nom */}
        <StrInput onChangeText={onChangeNom} value={textNom} placeholder={"Nom"} secureTextEntry={false}/>

        {/*Input prénom */}
        <StrInput onChangeText={onChangePrenom} value={textPrenom} placeholder={"Prenom"} secureTextEntry={false}/>

        {/*Input email */}
        <StrInput onChangeText={onChangeEmail} value={textEmail} placeholder= {"Email"} secureTextEntry={false}/>

        {/*Input mot de passe */}
        <StrInput onChangeText={onChangeMdp} value={textMdp} placeholder= {"Mot de passe"} secureTextEntry={true}/>

        {/*Input validation du mot de passe */}
        <StrInput onChangeText={onChangeMdpConfirme} value={textMdpConfirme} placeholder= {"Valider le mot de passe"} secureTextEntry={true}/>

        {!estMdpConcordant ? <Text style={styles.text}>Les mots de passe ne concordent pas !</Text> : <View/>}

      </View>

      <TouchableOpacity style={styles.photoVerrifButton} onPress={creerCompte}>
        <Text style={styles.text}>Valider</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreerCompte;

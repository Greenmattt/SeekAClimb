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

  const [textPseudo, onChangePseudo] = useState('');
  const [textEmail, onChangeEmail] = useState('');
  const [textMdp, onChangeMdp] = useState('');
  const [textMdpConfirme, onChangeMdpConfirme] = useState('');

  const [estCompteAccepte, setEstCompteAccepte] = useState(false);
  const [estCompteRefuse, setEstCompteRefuse] = useState(false);
  const [textErreurRefus, setTextErreurRefus] = useState('');

  const [estMailVerrifie, setEstMailVerrifie] = useState(false);

  const [textCode, onChangeTextCode] = useState('');

  const creerCompte = async() => {

    setEstCompteAccepte(false);
    setEstCompteRefuse(false);

    if (textMdp != textMdpConfirme) {
      setEstCompteRefuse(false);
      setTextErreurRefus("Les mots de passe ne concordent pas !");
    }
    else {
      try {
        let res = await fetch('http://91.164.5.221:50000/creerCompte',{
          method:'POST',
          body: JSON.stringify({
            pseudo: textPseudo,
            email: textEmail,
            mdp: textMdp
          }),
          headers: {'Content-Type':'application/json'}
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
          setEstCompteAccepte(true);
        }
      }
    }
  }

  const validerCode = async() => {
    try {
      codeChiffre = ParseInt(textCode);
    } catch(error) {
      setEstCompteRefuse(true)
      setTextErreurRefus("Le code n'est pas composé de chiffres")
    }

    try {
      let res = await fetch('http://91.164.5.221:50000/verrifMail',{
        method:'POST',
        body: JSON.stringify({
          email: textEmail,
          code : codeChiffre
        }),
        headers: {'Content-Type':'application/json'}
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
            setEstMailVerrifie(true);
          }
        }
  }

  return (

    <View style={styles.container}>
      {/* Bouton de retour dans la barre verte */}
      <GoBackButton onPress = {() => onPressRetour(props)} />

      <View style={styles.informationsBox}>

        {/*Input nom */}
        <StrInput onChangeText={onChangePseudo} value={textPseudo} placeholder={"Pseudo"} secureTextEntry={false}/>

        {/*Input email */}
        <StrInput onChangeText={onChangeEmail} value={textEmail} placeholder= {"Email"} secureTextEntry={false}/>

        {/*Input mot de passe */}
        <StrInput onChangeText={onChangeMdp} value={textMdp} placeholder= {"Mot de passe"} secureTextEntry={true}/>

        {/*Input validation du mot de passe */}
        <StrInput onChangeText={onChangeMdpConfirme} value={textMdpConfirme} placeholder= {"Valider le mot de passe"} secureTextEntry={true}/>

        {estCompteRefuse ? <Text style={styles.text}>{textErreurRefus}</Text> : <View/>}

        {estCompteAccepte ? 
        <View style= {{flex:2}}> 
          <View style={{flex:0.5}}>
            <Text style={styles.text}>Vous allez recevoir un mail contenant le code à 6 chiffres permettant de verrifier votre comtpe dans les 5 prochaines minutes</Text>
          </View>
          <StrInput onChangeText={onChangeTextCode} value={textCode} placeholder = {"Code à 6 chiffres"} secureTextEntry={false}/> 
          <View style = {{flex:0.5}}>
            <TouchableOpacity style={styles.photoVerrifButton} onPress={validerCode}>
              <Text style={styles.text}>Valider code</Text>
            </TouchableOpacity>
          </View>
        </View>

        : <View/>}

        {estMailVerrifie ? <Text style={styles.text}>Votre mail est verrifié, vous pouvez désormais vous connecter à votre compte dans la section : Se Connecter</Text>
         : <View/>}

      </View>

      <TouchableOpacity style={styles.photoVerrifButton} onPress={creerCompte}>
        <Text style={styles.text}>Valider compte</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreerCompte;

import React, {useState, useEffect} from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';

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
  const [estAlert, cestAlert] = useState(false);


const showAlert = () => {
  cestAlert(true);
  return (
  Alert.alert(
    'Authentification',
    'Vous recevrez un code à six chiffres dans les cinq minutes suivant ce message',
    [
      {
        text: 'OK',
        style: 'cancel',
      },
    ],
    {
      cancelable: false,
      onDismiss: () =>
        Alert.alert(
          'This alert was dismissed by tapping outside of the alert dialog.',
        ),
    },
  )
  );
}



  const creerCompte = async() => {

    setEstCompteAccepte(false);
    setEstCompteRefuse(false);

    if (textMdp != textMdpConfirme) {
      setEstCompteRefuse(true);
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
    // try {
    //   let x = await textCode;
    //   console.log(x);
    //   let codeChiffre = await ParseInt(x);
    //   console.log(codeChiffre);
    // } catch(error) {

    //   setEstCompteRefuse(true)
    //   setTextErreurRefus("Le code n'est pas composé de chiffres")
    // }

    try {
      let res = await fetch('http://91.164.5.221:50000/verrifMail',{
        method:'POST',
        body: JSON.stringify({
          email: textEmail,
          code : textCode
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

        {estCompteAccepte && ! estAlert ? showAlert() : <View/>}
        {estCompteAccepte ?
        <View style= {{flex:1}}> 
          <View style={{flex:0.2}}>
            {}
            
          </View>
          <View style = {{flex:1, alignItems: 'center',
    justifyContent: 'space-evenly'}}>
            <StrInput onChangeText={onChangeTextCode} value={textCode} placeholder = {"Code à 6 chiffres"} secureTextEntry={false}/>
          </View>
          <View style = {{flex:0.2}}>
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

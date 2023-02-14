import React, {useState} from 'react';
import { View } from 'react-native';

import styles from '../Component/Styles';
import StrInput from '../Component/StrInput';
import GoBackButton from '../Component/GoBackButton';

const onPressRetour = (props) => {
  props.navigation.navigate('Options');
};

const CreerCompte = (props) => {

  const [textNom, onChangeNom] = useState('');
  const [textPrenom, onChangePrenom] = useState('');
  const [textEmail, onChangeEmail] = useState('');
  const [textClasse, onChangeClasse] = useState('');
  const [textMdp, onChangeMdp] = useState('');
  const [textMdpConfirme, onChangeMdpConfirme] = useState('');

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

        {/*Input classe */}
        <StrInput onChangeText={onChangeClasse} value={textClasse} placeholder= {"Classe"} secureTextEntry={false}/>

        {/*Input mot de passe */}
        <StrInput onChangeText={onChangeMdp} value={textMdp} placeholder= {"Mot de passe"} secureTextEntry={true}/>

        {/*Input validation du mot de passe */}
        <StrInput onChangeText={onChangeMdpConfirme} value={textMdpConfirme} placeholder= {"Valider le mot de passe"} secureTextEntry={true}/>
        </View>
    </View>
  );
};

export default CreerCompte;

import React, {useState} from 'react';
import { View } from 'react-native';

import styles from '../Component/Styles';
import StrInput from '../Component/StrInput';
import GoBackButton from '../Component/GoBackButton'

const onPressRetour = (props) => {
  props.navigation.navigate('Options');
};

const SeConnecter = (props) => {
  const [textEmail, onChangeEmail] = useState('');
  const [textMdp, onChangeMdp] = useState('');

  return (
    <View style={styles.container}>
      <GoBackButton onPress = {() => onPressRetour(props)} />
      
      <View style={styles.informationsBox}>

        {/*Input email */}
        <StrInput onChangeText={onChangeEmail} value={textEmail} placeholder={"Email"} secureTextEntry={false}/>

        {/*Input mot de passe */}
        <StrInput onChangeText={onChangeMdp} value={textMdp} placeholder={"Mot de passe"} secureTextEntry={false}/>
      
      </View>
    </View>
  );
};

export default SeConnecter;
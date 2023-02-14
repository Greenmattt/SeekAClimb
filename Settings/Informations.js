import React from 'react';
import { Text, View } from 'react-native';

import Styles from '.././Component/Styles';
import GoBackButton from '../Component/GoBackButton';

const Informations = (props) => {

  const GoBackToSettings = () => {
    props.navigation.navigate('Settings');
  }

  return (
    <View style={Styles.container}>
      <GoBackButton onPress = {() => GoBackToSettings(props)}/>
      <View style={Styles.informationsBox}>
        <Text style={Styles.textTitre}>Page des Informations</Text>
      </View>
    </View>
  );
}

export default Informations;
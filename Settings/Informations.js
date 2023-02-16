import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import style from '.././Component/Styles';
import GoBackButton from '../Component/GoBackButton';

const Informations = (props) => {

  const GoBackToSettings = () => {
    props.navigation.navigate('Settings');
  }


  // load du style
  const [styles, setLeStyle] = useState({});

  useEffect(() => {
    async function getStyle (){
      const s = await style();
      setLeStyle(s);
    }
    getStyle();
  }, []);

  return (
    <View style={styles.container}>
      <GoBackButton onPress = {() => GoBackToSettings(props)}/>
      <View style={styles.informationsBox}>
        <Text style={styles.textTitre}>Page des Informations</Text>

      </View>


    </View>
  );
}

export default Informations;
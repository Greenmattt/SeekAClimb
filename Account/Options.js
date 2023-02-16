import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';

import style from '../Component/Styles';

//Screen One
const Options = (props) => {
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
          <Text style={styles.text}> Créer un compte </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Options;

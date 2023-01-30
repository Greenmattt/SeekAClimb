import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';

import styles from '../Component/Styles';

//Screen One
const Options = (props) => {
  //onPress To Navigate
  const onPressSeConnecter = () => {
    props.navigation.navigate('SeConnecter');
  };

  const onPressCreerCompte = () => {
    props.navigation.navigate('CreerCompte');
  };

  const onPressSupprimerCompte = () => {
    props.navigation.navigate('SupprimerCompte');
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 10, backgroundColor: '#214E34' }}></View>

      <View style={{ flex: 90, backgroundColor: '#025e82' }}>
        <View style={{ flex: 10 }}></View>

        <View
          style={{
            flex: 80,
            backgroundColor: '#131514',
            borderRadius: 10,
            justifyContent: 'space-around',
            padding: 5,
          }}>
          <View style={{ flex: 2, alignItems: 'center' }}>
            <TouchableOpacity
              style={styles.button}
              onPress={onPressSeConnecter}>
              <Text style={styles.text}> Se connecter </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 2, alignItems: 'center' }}>
            <TouchableOpacity
              style={styles.button}
              onPress={onPressCreerCompte}>
              <Text style={styles.text}> Créer un compte </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, alignItems: 'center' }}>
            <TouchableOpacity
              style={styles.button}
              onPress={onPressSupprimerCompte}>
              <Text style={styles.text}> Supprimer son compte</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flex: 10 }}></View>
      </View>
    </View>
  );
};

export default Options;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, Separator, Alert, TextInput} from 'react-native';
// import * as React from 'react';
import React, { useState } from 'react';

import Hello from './2emepage';
//import * as React from "react";
/* il va falloir installer des librairies supplémentaires pour naviguer entre plusieurs écrans
   je vous rappelle qu'il faut une page par voie*/

/* les commandes :
npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
*/

import {NavigationContainer} from '@react-navigation/native';

export class Maclasse {
  constructor(a,b) {
    this.taille = a*b;
  }
  get taille() {
    return this.taille
  }
  changer_aire(a,b) {
    this.taille = a*b;
  }
}

//const Hello = require("./2emepage.js");

const App = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Text>Bonjour les noobs comment ça va!</Text>
      <Text>React go brrr</Text>
      
      <Hello/>

      <TextInput 
                onChangeText={setText}
                defaultValue={text}
                placeholder={"CA MAAAARCHE"}
                />

      <StatusBar style="auto" />
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
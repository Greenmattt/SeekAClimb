import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, Separator, Alert, TextInput} from 'react-native';
import React, { useState } from 'react';

// Voila comment on import une classe d'un fichier externe : 
import Hello from './2emepage';

//import * as React from "react";

/* il va falloir installer des librairies supplémentaires pour naviguer entre plusieurs écrans
   je vous rappelle qu'il faut une page par voie*/

/* les commandes :
npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
*/

import {NavigationContainer} from '@react-navigation/native';

class Rectangle {
  longueur;
  largeur;
  constructor(L, l) {
      this.longueur = L;
      this.largeur = l;
  }

  get area() {
      return this.calcArea();
  }

  calcArea() {
      return this.largeur * this.longueur;
  }
}

function test(parametre1) {
  return 2*parametre1
}



const App = () => {
  // cette const cheloue est utilisée pour stocker les valeurs du TextInput
  const [text, setText] = useState('');
  const r = 42;
  const rectanglllle = new Rectangle(2,32);
  return (
    // tout ce qu'il y a dans le return est affiché (en tout cas entre les <View>)
    <View style={styles.container}>
      <Text style={styles.innerText}>Bonjour les noobs comment ça va!</Text>
      <Text style={styles.innerText}>React go brrr et aussi {test(r)}</Text>
      <Text style={styles.innerText}>La taille du rectangle est :{rectanglllle.area} </Text>
      
      {/* Hello vient du fichier 2emepage.js */}
      <Hello/>

      {/* le input qui marche cette fois */}

       
      <TextInput style={styles.innerText}
                onChangeText={setText}
                defaultValue={text}
                placeholder={"CA MAAAARCHE"}
                placeholderTextColor='#ffa'
                />

      <StatusBar style="auto" />
    </View>
  
  );
}

// style sheet de base :
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  innerText: {
    color: '#ffffff',
  }
});

// on fait comme ça pour que App soit l'affichage de base
export default App;
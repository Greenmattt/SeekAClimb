import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from "react";
/* il va falloir installer des librairies supplémentaires pour naviguer entre plusieurs écrans
   je vous rappelle qu'il faut une page par voie*/

/* les commandes :
npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
*/

//import {NavigationContainer} from '@react-navigation/native'

class Maclasse {
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

const Hellooo = require("./2emepage.js");

export default function App() {
  var r = Maclasse(5,2);
  return (
    <View style={styles.container}>
      <Text>Bonjour les noobs comment ça va!</Text>
      <Text>React go brrr</Text>
      <Button
      onPress = {() => alert.alert("button")}
      />
      <Separator />
      <Hellooo/>
      <Separator/>
      <Text> {"test de class : " + toString(r.taille)} </Text>
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

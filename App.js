import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, Alert, TextInput, Linking, TouchableOpacity, Image, ScrollView, Switch} from 'react-native';
import React, { useState } from 'react';

// Voila comment on import une classe d'un fichier externe : 
import Hello from './2emepage';

/* il va falloir installer des librairies supplémentaires pour naviguer entre plusieurs écrans
   je vous rappelle qu'il faut une page par voie*/

/* les commandes :
npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
*/

import {Link, NavigationContainer} from '@react-navigation/native';

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

  // ça c'est juste pour la variable qui compte les clics
  let [count, setCount] = useState(0);
  // ça c'est la fonction qui va avec
  const onPress = () => setCount(prevCount => prevCount + 1);

  // pour le switch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    // tout ce qu'il y a dans le return est affiché (en tout cas entre les <View>)
    <View style={{flex: 1}}>
      {/* permet comme son nom l'indique de scroll la page */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* tout ça c'est du texte basique*/}
        <Text style={styles.innerText}>Bonjour les noobs comment ça va!</Text>
        <Text style={styles.innerText}>React go brrr et aussi {test(r)}</Text>

        {/* test de switch (pas encore test avec une fonction autre que pour le faire changer de couleur) */}
        <Switch trackColor={{ false: '#f00', true: '#0f0'}}
                      thumbColor={isEnabled ? "#fff" : "#fff"}
                      onValueChange={toggleSwitch}
                      value={isEnabled}/>

        {/* ça ce sont les boutons classics où tu peux pas faire grand chose niveau style */}
        <Button color="#343434" title="clic bouffon" onPress={ ()=>{ Linking.openURL('https://thomann.de')}}/>
        <Button title="Add 1" onPress={onPress}/>
        <Button title="Add 1" onPress={onPress}/>
        <Button title="Add 1" onPress={onPress}/>
        <Button title="Add 1" onPress={onPress}/>
        <Button title="Add 1" onPress={onPress}/>
        <Button title="Add 1" onPress={onPress}/>
        <Button title="Add 2" onPress={onPress}/>
        <Button title="Add 1" onPress={onPress} color = "white"/>
        <Button title="sale raciste" onPress={()=>{ Linking.openURL('https://fr.wikipedia.org/wiki/Acacia_mearnsii')}} color = "black"/>
        <Button title="Add 1" onPress={onPress}/>
        <Button title="Add 1" onPress={onPress}/>
        <Button title="Add 1" onPress={onPress} color = "purple"/>
        <Button title="Add 1" onPress={onPress} color = "blue"/>
        <Button title="Add 1" onPress={onPress} color = "#106f1f"/>
        <Button title="Add 1" onPress={onPress} color = "violet"/>
        <Button title="Add 1" onPress={onPress}/>
        <Button title="Add 1" onPress={onPress}/>
        <Button title="Add 1" onPress={onPress}/>


        {/* et là on commence à arriver vers des boutons qui ressemblent à quelquechose */}
        <TouchableOpacity activeOpacity={0.1}
                          style={styles.button}>
                          <Text style={styles.button}>Bonjour</Text>
        </TouchableOpacity>

        <Text style={styles.innerText}>clics : {count}</Text>
        <Text style={styles.innerText}>La taille du rectangle est :{rectanglllle.area}</Text>

        {/* Test de bouton avec des images */}
        <TouchableOpacity activeOpacity={0.2} style={styles.button} onPress={ ()=>{ alert("Voilà on a un boutton joli et qui sert à qqch")}}>
          {/* Pour le chemin de l'image il faut bien commencer par ./    on peut aussi faire par url */}
          <Image style={styles.photo}
                source={require('./images/jolie_photo.jpg')}/>
        </TouchableOpacity>
        {/* Hello vient du fichier 2emepage.js */}
        <Hello/>

        <TextInput style={styles.innerText}
                  onChangeText={setText}
                  defaultValue={text}
                  placeholder={"CA MAAAARCHE"}
                  placeholderTextColor='#ffa'
                  />

        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

// style sheet de base :
const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    // justifyContent: 'space-evenly', // ça ça fait chier pour le scroll puisqu'il stack tout et on a pas besoin de scroll
  },
  innerText: {
    color: '#ffffff',
  },
  button: {
    backgroundColor: "green",
    padding: 2,
    // c'est le padding de 2 qui fait qu'il y a des bordures oranges autour de l'image
    color: "pink",
  },
  photo : {
    width: 108,
    height: 81,
    // à peu près les dimensions de l'image. Il faut impérativement les rentrer à la main
    resizeMode:"stretch"
  }
});

// on fait comme ça pour que App soit l'affichage de base
export default App;
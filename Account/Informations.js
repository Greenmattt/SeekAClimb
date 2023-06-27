import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, Linking, Image } from 'react-native';

import style from '../Component/Styles';
import GoBackButton from '../Component/GoBackButton';
import githubImage from '../assets/github.png';
import mailIcon from '../assets/mail.png';


const Informations = (props) => {

  const GoBackToSettings = () => {
    props.navigation.navigate('Options');
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

  const linkerGit = () =>
  {Linking.openURL('https://github.com/Greenmattt/SeekAClimb')}
  const mailer = () =>
  {Linking.openURL('mailto:seekaclimb@gmail.com')}

  return (
    <View style={styles.container}>
      <GoBackButton onPress = {() => GoBackToSettings(props)}/>
      <View style={styles.informationsBox}>
        <Text style={styles.text}>À propos de SeekAClimb</Text>
        <Text style = {styles.text}>______________________</Text>
        <Text></Text>
        <Text style = {styles.textContent}>Bienvenue sur SeekAClimb, notre application mobile dédiée à l'escalade !</Text>
        <Text style = {styles.textContent}>Nous sommes ravis de vous présenter notre projet NSI pour l'année 2023, une application innovante qui combine notre interêt pour ce sport avec le développement informatique!</Text>
        <Text style = {styles.textContent}>Développé par Nico, Julot et Matt pour le projet NSI de l'année 2023 avec Monsieur Faury</Text>
        <Text style = {styles.text}>______________________</Text>
        <Text style = {styles.textContent}> Crédits :</Text>
        <Text style = {styles.textContent}> </Text>
        <Text style = {styles.text}>______________________</Text>
        <Text style = {styles.textContent}>Nous Contacter:</Text>
        <View style = {{flex:0.4, flexDirection:'row', justifyContent:'space-evenly'}}>
          <TouchableOpacity style = {{flex:1,justifyContent:'space-evenly'}} onPress={linkerGit}>
            <Image style={styles.clickIcon} source={githubImage} />
          </TouchableOpacity>
          <TouchableOpacity style = {{flex:1,justifyContent:'space-evenly'}} onPress={mailer}>
            <Image style={styles.clickIcon} source={mailIcon} />
          </TouchableOpacity>
        </View>
      </View>


    </View>
  );
}

export default Informations;
import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Switch, TouchableOpacity, Image, ImageBackground } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
// commandes à faire :  npm install react-native-dropdown-picker
//                      npm install --save @ptomasroos/react-native-multi-slider

import JsonToButtons from './HandlingResponse';
import EnumButtons from '../Component/EnumButtons';
import styles from '../Component/Styles';

const Routes = () => {

  const [estCustom, onChangeEstCustom] = useState(false);
  const toggleSwitch = () => onChangeEstCustom(a => !a);

  const [typeID, onChangeTypeID] = useState(1);
  const changeType = (value) => onChangeTypeID(a => value);
  const list_Type = ["voie", "bloc", "traversee"];

  const [open, setOpen] = useState(false);
  const [lieuPicker, setLieuPicker] = useState();
  const [items, setItems] = useState([
    {label: 'Blaise-Pascal', value: '0001'},
    {label: 'Casamur', value: '0002', },
  ]);

  const difficultes = ['3a', '3b', '3c', 
                       '4a', '4b', '4c', 
                       '5a', '5a+', '5b', '5b+', '5c', '5c+', 
                       '6a', '6a+', '6b', '6b+', '6c', '6c+',
                       '7a', '7a+', '7b', '7b+', '7c', '7c+',
                       '8a', '8a+', '8b', '8b+', '8c', '8c+',
                       '9a']

  enableScroll = () => this.setState({ scrollEnabled: true });
  disableScroll = () => this.setState({ scrollEnabled: false });

 
  const [
    nonCollidingMultiSliderValue,
    setNonCollidingMultiSliderValue,
  ] = React.useState([0, 100]);
  nonCollidingMultiSliderValuesChange = values => setNonCollidingMultiSliderValue(values);

  const imageCursor = <Image source={require("../assets/green_circle.png")} style={styles.icon}/>

  // Variables pour représenter le résultat du fetch et l'état de la requête sur l'api
  const [apiRes, setApiRes] = useState([]);
  const [estCharge, setEstCharge] = useState(false);
  const [estApiError, setEstApiError] = useState(false);

  // Fonction qui s'occupe de faire le fetch et de set les données
  const testFetch = async (typeID, lieuPicker, sliderMinID, sliderMaxID) => {
    try { // là c'est si tout va bien
      let response = await fetch('http://91.164.5.221:50000/route', {
        method:'POST',
        body: JSON.stringify( {
          lieuID : lieuPicker,
          type : list_Type[typeID-1],
          diffMin: difficultes[sliderMinID],
          diffMax:difficultes[sliderMaxID]
        })
      });
      let json = await response.json();
      setApiRes(json); // String() pour pouvoir l'afficher correctement (donc c'est temporaire)
    } 
    catch (error) { // là c'est si on a un pb
      console.error(error);
      setApiRes("<Pas de réponse de l'API>");
    }
    finally { // là c'est une fois qu'on a vérifié qu'il n'y a pas d'erreur et que tout est fini
      setEstCharge(true);
      setEstApiError(false);
    }

  };

  const verification_validite_boutton = () => {
    setEstCharge(false);
    if (lieuPicker === undefined ) {
      setApiRes("Veuillez séléctionner un ou plusieurs lieux");
      setEstCharge(true); 
      setEstApiError(true);
    }
    else {
          testFetch(typeID, 
                lieuPicker, 
                nonCollidingMultiSliderValue[0], 
                nonCollidingMultiSliderValue[1] < 31 ? nonCollidingMultiSliderValue[1] : 30);
    }
  };
    
  
  return (
    <View style={styles.container}>
      <View style={styles.routeOptions}>
        {/* Je mets absolument tout dans des View pour bien pouvoir faire des compartiments du screens équitables */}

       <DropDownPicker
              open={open}
              value={lieuPicker}
              items={items}
              setOpen={setOpen}
              setValue={setLieuPicker}
              setItems={setItems}

              placeholder="Choisissez un lieu"
              theme="DARK"
              multiple={true}
              mode="BADGE"
              badgeDotColors={["#3a75b1", "#3ab175"]}
              style= {{margin: 1}}/>


      {/* Choix du type de route */}

      <EnumButtons text={['Voie', 'Bloc', 'Traversée']} typeID={typeID} changeType={changeType}/>


      {/* Switch Custom - Officiel */}

      <View style = {{flex: 2, flexDirection:'row', justifyContent: "space-evenly", alignItems:'center'}}>
        <Text style={styles.text}>Officiel</Text>

        <Switch trackColor={{false: '#3a75b1', true: "#3ab175"}}
                thumbColor = {estCustom ? "#fff" : "#fff"}
                onValueChange = {toggleSwitch}
                value = {estCustom}/>

        <Text style={styles.text}>Custom</Text>
      </View>


      {/* Textes de difficultés */}

      <View style={{flex: 2, flexDirection:'row', justifyContent: "space-between", alignItems:'center'}}>
        
        <View style= {{flex: 1}}> 
          <Text style={styles.text}>min : {difficultes[nonCollidingMultiSliderValue[0]]} </Text>
        </View>
        <View style = {{flex: 3}}></View>
        <View style= {{flex: 1}}>
          <Text style={styles.text}>max : {difficultes[nonCollidingMultiSliderValue[1] < 31 ?           nonCollidingMultiSliderValue[1] : 30 ]} </Text>
        </View>

      </View>


      {/* Slider de difficultés */}

      <View style = {{flex: 2, flexDirection:'row', justifyContent: "space-evenly", alignItems:'center'}}>
        <MultiSlider
          values={[
            nonCollidingMultiSliderValue[0],
            nonCollidingMultiSliderValue[1],
          ]}
          sliderLength={250}
          onValuesChange={nonCollidingMultiSliderValuesChange}
          min={0}
          max={30}
          step={1}
          allowOverlap={false}
          snapped
          minMarkerOverlapDistance={7}
          enableLabel = {false}
          customMarker = {(e) =>imageCursor}
          trackStyle={{
            height: 5,
          }}
          selectedStyle={{
            backgroundColor: '#7282A8',
          }}
          unselectedStyle={{
            backgroundColor: '#364154',
          }}

        />
      </View>


     {/* Bouton Chercher... */}

      <View style= {{flex: 3, alignItems:'center'}}>
        <TouchableOpacity 
          style = {styles.routeBoutonChercherTouchableOpacity}
          onPress = {verification_validite_boutton} >
          <Text style={styles.text}>Chercher ...</Text>
        </TouchableOpacity>
      </View>

      </View>

      

       {/* Texte réponse de l'api */}

      <View style ={styles.routeReponse}>
        { estCharge ? <JsonToButtons json = {apiRes}/> 
        : <Text style={styles.text}>Page des voies</Text>
      }
      </View> 

    </View>); 
} 

export default Routes;
import React, { useState } from 'react';
import { Text, View, TextInput, Switch, TouchableOpacity } from 'react-native';

const Routes = () => {
  // const [lieu, onChangeLieu] = useState('');
  // const [type, onChangeType] = useState('');
  const [diff, onChangeDiff] = useState('');

  const [estBlaise, onChangeEstBlaise] = useState(false);
  const switchBlaise = () => onChangeEstBlaise(a => !a)

  const [estCustom, onChangeEstCustom] = useState(false);
  const toggleSwitch = () => onChangeEstCustom(a => !a);

  const [typeID, onChangeTypeID] = useState(1);
  const changeType = (value) => onChangeTypeID(a => value)

  return (
    <View style={styleMain(false).fond}>
      {/* Un petit view pour laisser de l'espace en haut */}
      <View style={styleMain().espace}></View>

      {/* Je mets absolument tout dans des View pour bien pouvoir faire des compartiments du screens équitables */}

      <View style = {styleMain().textInfoView}>
        <Text style={styleMain().text}>nécessaire : </Text>
      </View>

      {/* <View style = {styleMain().inputHaut}>
        <TextInput style= {styleMain(false).input} 
                   placeholder="Lieu"
                   onChangeText={onChangeLieu}
                   value = {lieu}/>
      </View> */}
      <View style = {{flex: 2, flexDirection:'row', justifyContent: "space-evenly", alignItems:'center'}}>
        <Text style={styleMain().text}>Blaise-Pascal</Text>

        <Switch trackColor={{false: "#f00", true: '#0f0'}}
                thumbColor = {estBlaise ? "#fff" : "#fff"}
                onValueChange = {switchBlaise}
                value = {estBlaise}/>

        <Text style={styleMain().text}>Casamur</Text>
      </View>

      {/* <View style = {styleMain().inputCentre}>
        <TextInput style= {styleMain(false).input} 
                   placeholder="Type de route"
                   onChangeText={onChangeType}
                   value = {type}/>
      </View> */}

      <View style = {{flex: 2, flexDirection:'row', justifyContent: "space-evenly", alignItems:'center'}}>

        <TouchableOpacity style= {styleBoutton(typeID == 1)} onPress = {() => changeType(1)}>
          <Text>Voie</Text>
        </TouchableOpacity>

        <TouchableOpacity style= {styleBoutton(typeID == 2)} onPress = {() => changeType(2)}>
          <Text>Bloc</Text>
        </TouchableOpacity>

        <TouchableOpacity style= {styleBoutton(typeID == 3)} onPress = {() => changeType(3)}>
          <Text>Traversée</Text>
        </TouchableOpacity>

      </View>      

      <View style = {{flex: 2, flexDirection:'row', justifyContent: "space-evenly", alignItems:'center'}}>
        <Text style={styleMain().text}>Officiel</Text>

        <Switch trackColor={{false: "#f00", true: '#0f0'}}
                thumbColor = {estCustom ? "#fff" : "#fff"}
                onValueChange = {toggleSwitch}
                value = {estCustom}/>

        <Text style={styleMain().text}>Custom</Text>
      </View>

      <View style = {styleMain().textInfoView}>
        <Text style={styleMain().text}>contingent : </Text>
      </View>

      <View style = {styleMain().inputBas}>
        <TextInput style= {styleMain(false).input} 
                   placeholder="Difficulté"
                   onChangeText={onChangeDiff}
                   value = {diff}/>
      </View>



      <View style ={styleMain().canvas}>
        <Text style={styleMain().text}>Page des voies</Text>
      </View>
    </View>
  );
}

var styleMain = function(clair = false) {
  var couleurF = clair ? "#FFFFFF" : "#000000";
  var couleurT = clair ? "#000000" : "#FFFFFF";

  // Pour l'instant les couleurs donnent à peu près envie de vomir donc c'est à changer
  return {
    fond: {
      flex: 1,
      backgroundColor: couleurF, 
      flexDirection : 'column',
      justifyContent: 'space-evenly',
    },
    espace: {
      flex: 2,
    },
    textInfoView: {
      flex: 1,
    },
    inputHaut: {
      flex: 2,
      backgroundColor: "#cccccc",
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: "#aaaaaa",
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      margin: 3
    },
    inputCentre: {
      flex: 2,
      backgroundColor: "#cccccc",
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: "#aaaaaa",
      margin: 3,
    },
    inputBas: {
      flex: 2,
      backgroundColor: "#cccccc",
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: "#aaaaaa",
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      margin: 3
    },
    canvas: {
      flex: 24,
      backgroundColor: couleurF, 
      alignItems: 'stretch',
      flexDirection : 'column',
      justifyContent: 'flex-start',
    },
    text: {
      color: couleurT,
    },
    input: {
      backgroundColor: couleurT,
      marginLeft: 10,
      marginRight: 10,
      borderWidth: 1,
      borderColor: "#000000"
    },
  }
};

var styleBoutton = function(appuye) {
  return {
    backgroundColor: appuye ? "#ff0000" : "#777777",
    height: "100%",
    width: "20%",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
}

export default Routes;
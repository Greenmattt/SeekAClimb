import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Switch, TouchableOpacity, Image, ImageBackground } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
// commandes à faire :  npm install react-native-dropdown-picker
//                      npm install --save @ptomasroos/react-native-multi-slider



const Routes = () => {

  const [estCustom, onChangeEstCustom] = useState(false);
  const toggleSwitch = () => onChangeEstCustom(a => !a);

  const [typeID, onChangeTypeID] = useState(1);
  const changeType = (value) => onChangeTypeID(a => value);
  const list_Type = ["", "voie", "bloc", "traversee"];

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

  // Variables pour représenter le résultat du fetch et l'état de la requête sur l'api
  const [apiRes, setApiRes] = useState([]);
  const [estCharge, setEstCharge] = useState(false);

  // Fonction qui s'occupe de faire le fetch et de set les données
  const testFetch = async (typeID, lieuPicker, sliderMinID, sliderMaxID) => {
    try { // là c'est si tout va bien
      let response = await fetch('http://91.164.5.221:50000/route', {
        method:'POST',
        body: JSON.stringify( {
          lieuID : lieuPicker,
          type : list_Type[typeID],
          diffMin: difficultes[sliderMinID],
          diffMax:difficultes[sliderMaxID]
        })
      });
      let json = await response.text();
      console.log(json);
      setApiRes(String(json)); // String() pour pouvoir l'afficher correctement (donc c'est temporaire)
    } 
    catch (error) { // là c'est si on a un pb
      console.error(error);
      setApiRes("<Pas de réponse de l'API>");
    }
    finally { // là c'est une fois qu'on a vérifié qu'il n'y a pas d'erreur et que tout est fini
      setEstCharge(true);
    }

  }
    
  
  return (
    <View style={styleMain().fond}>
      {/* Un petit view pour laisser de l'espace en haut */}
      <View style={styleMain().espace}></View>

      {/* Je mets absolument tout dans des View pour bien pouvoir faire des compartiments du screens équitables */}

       <DropDownPicker
              open={open}
              value={lieuPicker}
              items={items}
              setOpen={setOpen}
              setValue={setLieuPicker}
              setItems={setItems}

              theme="DARK"
              multiple={true}
              mode="BADGE"
              badgeDotColors={["#3a75b1", "#3ab175"]}
              style= {{margin: 1}}/>


      {/* Choix du type de route */}

      <View style = {{flex: 2, flexDirection:'row', justifyContent: "space-evenly", alignItems:'center'}}>

        <TouchableOpacity style= {styleBoutton(typeID == 1).button} onPress = {() => changeType(1)}>
          <Text style={styleBoutton(typeID == 1).text}>Voie</Text>
        </TouchableOpacity>

        <TouchableOpacity style= {styleBoutton(typeID == 2).button} onPress = {() => changeType(2)}>
          <Text style={styleBoutton(typeID == 1).text}>Bloc</Text>
        </TouchableOpacity>

        <TouchableOpacity style= {styleBoutton(typeID == 3).button} onPress = {() => changeType(3)}>
          <Text style={styleBoutton(typeID == 1).text}>Traversée</Text>
        </TouchableOpacity>

      </View>      


      {/* Switch Custom - Officiel */}

      <View style = {{flex: 2, flexDirection:'row', justifyContent: "space-evenly", alignItems:'center'}}>
        <Text style={switchText(estCustom).textOfficiel}>Officiel</Text>

        <Switch trackColor={{false: '#3a75b1', true: "#3ab175"}}
                thumbColor = {estCustom ? "#fff" : "#fff"}
                onValueChange = {toggleSwitch}
                value = {estCustom}/>

        <Text style={switchText(estCustom).textCustom}>Custom</Text>
      </View>


      {/* Textes de difficultés */}

      <View style={{flex: 2, flexDirection:'row', justifyContent: "space-between", alignItems:'center'}}>
        
        <View style= {{flex: 1}}> 
          <Text style={styleMain().text}>min : {difficultes[nonCollidingMultiSliderValue[0]]} </Text>
        </View>
        <View style = {{flex: 3}}></View>
        <View style= {{flex: 1}}>
          <Text style={styleMain().text}>max : {difficultes[nonCollidingMultiSliderValue[1] < 31 ?           nonCollidingMultiSliderValue[1] : 30 ]} </Text>
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
          trackStyle={{
            height: 5,
            backgroundColor: 'red',
          }}
          selectedStyle={{
            backgroundColor: 'gold',
          }}
          unselectedStyle={{
            backgroundColor: 'silver',
          }}

        />
      </View>


     {/* Bouton Chercher... */}

      <View style= {{flex: 3, alignItems:'center'}}>
        <TouchableOpacity 
          style = {{width: '90%', height: '90%', backgroundColor: '#fa5144', 
                    justifyContent:'center', alignItems:'center', borderRadius: 20, margin:5}}
          onPress = {() => testFetch(typeID, 
                                      lieuPicker, 
                                      nonCollidingMultiSliderValue[0], 
                                      nonCollidingMultiSliderValue[1] < 31 ? nonCollidingMultiSliderValue[1] : 30 )}          >
          <Text>Chercher ...</Text>
        </TouchableOpacity>
      </View>


       {/* Texte réponse de l'api */}

      <View style ={styleMain().canvas}>
        { estCharge ? <Text style={styleMain().text}>{apiRes}</Text>
        : <Text style={styleMain().text}>Page des voies</Text>
      }
      </View> 

      
    </View>  );
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

var styleBoutton = function(appuye, clair= false) {
  return {
    button: {
      backgroundColor: appuye ? "#ba513a" : clair ? "#ffffff" : "#000000",
      height: "100%",
      width: "20%",
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: clair ? "#000" : "#fff"
    }
  }
};

var switchText = function(estCustom, clair=false) {
  return {
    textOfficiel: {
      color: estCustom ? (clair ? "#000000" : "#ffffff") : "#3a75b1",
    },
    textCustom: {
      color: !estCustom ? (clair ? "#000000" : "#ffffff") : "#3ab175",
    }

  }
}

export default Routes;
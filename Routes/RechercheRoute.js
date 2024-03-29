import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

// commandes à faire :  npm install react-native-dropdown-picker
//                      npm install --save @ptomasroos/react-native-multi-slider

import EnumButtons from '../Component/EnumButtons';
import style from '../Component/Styles';
import DefaultLabel from '../Component/TestLabel';
import PreviewRoute from '../Component/PreviewRoute';

const Routes = (props) => {


  const goToCamera = () => {
    props.navigation.navigate('Camera');
  };

  const goToCreerBloc = () => {
    props.navigation.navigate('CreerBloc');
  };


  // load du style
  const [styles, setLeStyle] = useState({});

  useEffect(() => {
    async function getStyle (){
      const s = await style();
      setLeStyle(s);
    }
    getStyle();
  }, []);

  const [typeID, onChangeTypeID] = useState(0);
  const changeType = (value) => onChangeTypeID(a => value);
  const list_Type = ["voie", "bloc", "circuit"];

  const [open, setOpen] = useState(false);
  const [lieuPicker, setLieuPicker] = useState(['0001']); 
  const [items, setItems] = useState([
    {label: 'Blaise-Pascal', value: '0001'},
    {label: 'Casamur', value: '0002', },
    {label: 'Cournols', value: '0003'},
    {label: "siteTest", value:'9999'}
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

 
  const [nonCollidingMultiSliderValue, setNonCollidingMultiSliderValue,] = React.useState([0, 31]);
  nonCollidingMultiSliderValuesChange = values => setNonCollidingMultiSliderValue(values);

  const imageCursor = <Image source={require("../assets/green_circle.png")} style={styles.routeSliderRond}/>

  // Variables pour représenter le résultat du fetch et l'état de la requête sur l'api
  const [apiRes, setApiRes] = useState([]);
  const [estCharge, setEstCharge] = useState(false);
  const [estApiError, setEstApiError] = useState(false);

  // Fonction qui s'occupe de faire le fetch et de set les données
  const testFetch = async (typeID, lieuPicker, sliderMinID, sliderMaxID) => {
    try { // là c'est si tout va bien
      let response = await fetch('http://91.164.5.221:50000/route?lieuID='+String(lieuPicker)
                                                                +'&type='+String(list_Type[typeID])
                                                                +'&diffMin='+String(difficultes[sliderMinID])
                                                                +'&diffMax='+String(difficultes[sliderMaxID]));
      let json = await response.json();
      setApiRes(json);
      // setApiRes(json); // String() pour pouvoir l'afficher correctement (donc c'est temporaire)
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

  const [isCollapsed, changeIsCollapsed] = useState(false);

  return (
    <View style={styles.container}>

      {isCollapsed ? <View/>:
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
              badgeDotColors={["#3a75b1", "#3ab175", "#C4137F"]}
              style={{borderWidth: 0}}/>
      {/* Choix du type de route */}

      <View style={{flex: 1}}></View>

      <EnumButtons text={['Voie', 'Bloc', 'Circuit']} typeID={typeID} changeType={changeType}/>


      {/* Textes de difficultés */}

      <View style={styles.routeSlider}>
        
        <View style= {{flex: 1}}> 
          <Text style={styles.text}>min : {difficultes[nonCollidingMultiSliderValue[0]]}</Text>
        </View>
        <View style = {{flex: 3}}></View>
        <View style= {{flex: 1}}>
          <Text style={styles.text}>max : {difficultes[nonCollidingMultiSliderValue[1] < 31 ?           nonCollidingMultiSliderValue[1] : 30 ]} </Text>
        </View>

      </View>


      {/* Slider de difficultés */}

      <View style = {styles.routeSlider}>
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
          enableLabel = {true}
          customLabel={DefaultLabel}
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

      </View>}

      {/* Boutton pour collapse la partie de recherche */}
      <View style={{alignItems:'center', height:70}}>
        <TouchableOpacity style={styles.routeRechercheCollapseButton} onPress={() => changeIsCollapsed(!isCollapsed)}>
          {isCollapsed ?
          <Image source={require("../assets/down_arrow.png")} style={styles.scanIcon}/>
        :<Image source={require("../assets/up_arrow.png")} style={styles.scanIcon}/>}
          

        </TouchableOpacity>
      </View>

       {/* Texte réponse de l'api */}

      <View style ={styles.routeReponse}>
        { estCharge ? <PreviewRoute json = {apiRes}/> 
        : <Text style={styles.text}>oui oui baguette</Text>
      }
      </View> 


      {/* Bouttons flottants */}
        <View style={{position:'absolute', left :'82%', top:'88%'}}>
        <TouchableOpacity style={styles.scanButton} onPress = {goToCamera}>
          <Image style={styles.scanIcon} source={require('../assets/ultra_icon.png')}/>
        </TouchableOpacity>
      </View>
  
      <View style={{position:'absolute', left :'82%', top:'78%'}}>
        <TouchableOpacity style={styles.scanButton} onPress = {goToCreerBloc}>
        <Image style={styles.scanIcon} source={require('../assets/plus.png')}/>
        </TouchableOpacity>
      </View>

    </View>)
} 

export default Routes;

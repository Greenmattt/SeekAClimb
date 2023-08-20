import { View, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import React,{useState, useEffect} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

import style from '../Component/Styles';

const ShowRoute = (props) => {

  // load du style
  const [styles, setLeStyle] = useState({});

  useEffect(() => {
    async function getStyle (){
      const s = await style();
      setLeStyle(s);
    }
    getStyle();
  }, []);

  const [apiRes, setApiRes] = useState();
  const [apiRepondu, setApiRepondu] = useState(false);

  useEffect(() => {
    const fetchRoute = async() => {
      try {
        let response = await fetch('http://91.164.5.221:50000/fullRoute?id=' + String(props.id));
        let json = await response.json(); 
        setApiRes(json);
      }
      catch(e) {
        console.warn(e);
      } finally { 
        setApiRepondu(true);
      }
    }

    fetchRoute();
  }, [])



  return (
    <ScrollView style={{flex:1}}>
    {apiRepondu ?
    <View style = {styles.container}>
      <View style = {{width:'100%', height:350}}>
        <Image resizeMode='contain' style={{flex:1}} source={{uri: 'data:image/png;base64,'+apiRes.info_route.photo}}/>
      </View>

      <View style = {{flex:1, flexDirection:'row', justifyContent:'center'}}>
        <Text style = {styles.textNomBloc}>{apiRes.info_route.nom} ({apiRes.info_route.difficulte}) </Text>
        {apiRes.info_route.estVerifie ?
        <Image source={require('../assets/check.png')} style={{height:30, width:30, tintColor:'#0ef'}}/>
        :<View/>}
      </View>

      <View style = {{flex:1}}>
        <Text style = {style.text}/>
      </View>

      <View style = {{flex:1, alignItems:'flex-start'}}>
        <Text style = {styles.text}>Crée par {apiRes.info_route.createur} le {apiRes.info_route.dateDeCreation}</Text>
        <Text style = {styles.text}>{apiRes.info_route.type} de {apiRes.info_route.longueur}m à {apiRes.info_route.site}</Text>
        <Text style = {styles.text}/>
        <Text style = {styles.text}>First ascent : {apiRes.info_route.FA}</Text>
        <Text style = {styles.text}/>
        <Text style = {styles.text}>Plus d'infos : {apiRes.info_route.commentaire}</Text>
        <Text style = {styles.text}>Identifiant : {apiRes.info_route.IDRoute}</Text>
      </View>

    </View>
    : <View/>}
    </ScrollView>
  )
}

export default ShowRoute;
import { View, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import React,{useState, useEffect} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

import style from '../Component/Styles';
import ShowRoute from './ShowRoute';
import SneakyBackButton from './SneakyBackButton';

const PreviewRoute = props => {

  // load du style
  const [styles, setLeStyle] = useState({});
      
  const [resultatFormate, setResultatFormate] = useState([]);

  const [open, setOpen] = useState(false);
  const [cle, setCle] = useState(''); 

  const [croissant, setCroissant] = useState(true);

  const [items, setItems] = useState([
    {label: 'Nom', value: 'nom'},
    {label: 'Difficulté', value: 'difficulte'},
    {label: 'Longueur', value: 'longueur'},
    {label: 'Date de creation', value: 'dateDeCreation'},
    {label: 'Créateur', value : "createur"}]);

  useEffect(() => {
    async function getStyle (){
      const s = await style();
      setLeStyle(s);
      setCle('nom');
    }
    getStyle();
  },[]);

  const [estClique, setEstClique] = useState(false);
  const [idClique, setIdClique] = useState('');

  const openRoute = (id) => {
    setEstClique(true);
    setIdClique(id);
  }

  const goBackToSearch = () => {
    setEstClique(false);
  }

  const [liste_k, setL] = useState([]);

  useEffect(() => {
    var liste_res = [];

    Object.keys(props.json.unMur).forEach(function (key) {
      liste_res.push(props.json.unMur[key]);
    });

    liste_res.sort(function(a,b) {
      if ((a[cle] < b[cle] && croissant) || a[cle] > b[cle] && !croissant ) return -1;
      else return 1;
    })

    setL(liste_res);

    var liste_format = [];

    for (let k = 0; k < liste_res.length; k++){
      liste_format.push(
        <TouchableOpacity style={{flex:1, borderWidth: 1, borderColor: '#fff', flexDirection:'row'}} key={k} onPress={() => openRoute(liste_res[k].IDRoute)}>
          <Image source={{uri: 'data:image/png;base64,'+liste_res[k].miniature}} style={{height: 160, width: 120}}/>
          {liste_res[k].estVerifie == 1 ? 
          <Image source={require('../assets/check.png')} style={{height:20, width:20, position:'absolute', left:10, top:10, tintColor:'#0ef'}}/> 
          : <View/>}
          <View style={{flex:1, marginLeft:15, marginTop: 15, alignItems:'flex-start'}}>
            <Text style={styles.text}>{liste_res[k].nom} ({liste_res[k].difficulte})</Text>
            <Text style={styles.text}>Créé par : {liste_res[k].createur}</Text>
            <Text style={styles.text}>{liste_res[k].type} de {liste_res[k].longueur}m</Text>
            
          </View>
        </TouchableOpacity> )
    }
    setResultatFormate(liste_format);
  }, [cle, croissant]);

 

    return (
      <View style={styles.container}>
        {estClique ?
        <View style={{flex:1}}>
          <ShowRoute id={idClique}/>
          <TouchableOpacity onPress={goBackToSearch} style={[styles.sneakyBackButton,{position:'absolute', top:0, left:0}]}>
            <Image style={styles.scanIcon} source={require('./../assets/back_arrow_image.png')}/>
          </TouchableOpacity>
        </View>
        :
        <View style = {{flex:1}}>
        <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
          <View style={{flex:3, alignItems:'flex-end'}}>
            <Text style={styles.text}>Trier par :</Text>
          </View>
          <View style={{flex:2}}>
          <DropDownPicker
              open={open}
              value={cle}
              items={items}
              setOpen={setOpen}
              setValue={setCle}
              setItems={setItems}

              placeholder="Trier par"
              theme="DARK"
              multiple={false}
              style={{borderWidth: 0}}/>
          </View>
          <TouchableOpacity style={{flex:1}} onPress = {() => setCroissant(!croissant)}>
            {croissant ? 
            <Image style={styles.boutonTriIcon} resizeMode='contain' source={require('../assets/antisort.png')}/>
            :<Image style={styles.boutonTriIcon} resizeMode='contain' source={require('../assets/sort.png')}/>}
          </TouchableOpacity>
        </View>
        
        <View style={{flex:8}}>
          <ScrollView style={{flex:1}}>
            {resultatFormate}
          </ScrollView>
        </View> 

        </View>
        }
      </View>
    );

}

export default PreviewRoute;
import { Text, View, Image, ImageBackground, Linking, TouchableOpacity } from 'react-native';
import React, { useEffect , useState} from 'react';
import style from './../Component/Styles'

const Actus = props => {
  // load du style
  const [styles, setLeStyle] = useState({});

  useEffect(() => {
    async function getStyle (){
      const s = await style();
      setLeStyle(s);
    }
    getStyle();
  }, []);

  const [image, setImage] = useState("");

  useEffect(() => {
    async function TextToBlob () {
      let v = await props.text.resultat
      let c = await v[1].Image
      setImage(c);
    }
    TextToBlob();
  });

  let listActus = [];

  if (props.text.resultat !== undefined) {
    Object.keys(props.text.resultat).forEach(function (key) {
      listActus.push(
        <View style={{flex:1}} key={key}>
          <ImageBackground source = {{uri: 'data:image/png;base64, ' + props.text.resultat[key].image}} style = {{width:400, height:180}}>
            <TouchableOpacity style={{flex:1, position:'absolute', left:'2%', top:'60%', alignItems:'flex-start'}}>
              <Text style={{color:'#0f0', fontWeight:'bold', textDecorationLine:'underline', fontSize:24, flexWrap:'wrap'}} onPress={() => Linking.openURL(props.text.resultat[key].lien)}>
                {props.text.resultat[key].titre}
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      ); 
    }); 
  }
  else if (props.text.Erreur !== undefined ) {
    listActus.push(
      <View style={{flex:1}}>
        <Text key = {1} style={styles.text}> {props.text.Erreur}</Text>
      </View>)
  }
  else {
    listActus.push(
      <View style={{fex:1}}>
        <Text key = {1} style={styles.text}>API indisponnible</Text>
      </View>)
  }

  return (
    <Text style={styles.text}>
      {listActus}
    </Text>

  );
};
  
export default Actus;

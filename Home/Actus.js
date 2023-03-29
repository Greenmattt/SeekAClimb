import { Text, View, Image, ImageBackground, Linking } from 'react-native';
import React, { useEffect , useState} from 'react';
import style from './../Component/Styles'
import PagerView from 'react-native-pager-view';

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
          <ImageBackground source = {{uri: 'data:image/png;base64, ' + image}} style = {{width:300, height:150}}>
            <Text style={styles.text} onPress={() => Linking.openURL(props.text.resultat[key].lien)}>
              {props.text.resultat[key].titre}
            </Text>
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
      Page des actus chargée
    </Text>

  );
};
  
export default Actus;
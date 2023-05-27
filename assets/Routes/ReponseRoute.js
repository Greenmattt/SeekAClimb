import React, {useEffect, useState} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import style from '../Component/Styles';

const JsonToButtons = (props) => {
  // load du style
  const [styles, setLeStyle] = useState({});

  useEffect(() => {
    async function getStyle (){
      const s = await style();
      setLeStyle(s);
    }
    getStyle();
  }, [])

  var buttons = [];

  if (props.json.resultat != undefined) {
    Object.keys(props.json.resultat).forEach(function (key) {
      buttons.push(
        <TouchableOpacity style={styles.routeReponseBouton} key={key}>
          <Text style={styles.text}>{props.json.resultat[key].nom}</Text>
        </TouchableOpacity>
      ); 
    }); 
  }
  else if (props.json.Erreur != undefined) {
    buttons.push(<Text key = {1} style={styles.text}> {props.json.Erreur}</Text>)
  }
  else {
    buttons.push(<Text key = {1} style={styles.text}>API indisponnible</Text>)
  }

  return <View>{buttons}</View>;
};

export default JsonToButtons;

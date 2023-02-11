import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from '../Component/Styles';

const JsonToButtons = (props) => {
  var buttons = [];

  Object.keys(props.json.resultat).forEach(function (key) {
    buttons.push(
      <TouchableOpacity style={styles.routeReponseBouton} key={key}>
        <Text style={styles.text}>{props.json.resultat[key].nom}</Text>
      </TouchableOpacity>
    );
  });

  return <View>{buttons}</View>;
};

export default JsonToButtons;

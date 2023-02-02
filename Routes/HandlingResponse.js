import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Switch, TouchableOpacity} from 'react-native';

const JsonToButtons = props => {
  var buttons = <View></View>

  Object.keys(props.json.resultat).forEach(function(key){
      buttons += <TouchableOpacity>
                  <Text>{props.json.resultat.nom}</Text>
                 </TouchableOpacity>
  })

  return (
    <View>
      {buttons}
    </View>
  );
}


export default JsonToButtons;
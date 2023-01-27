import React, {useState} from 'react';
import { Text, View, Switch } from 'react-native';

const Informations = () => {

  return (
    <Text>Page des Informations</Text>
  );
}

var styleMain = function(clair) {
    var couleurF = clair ? "#FFFFFF" : "#131514";
    var couleurT = clair ? "#131514" : "#FFFFFF";
  
    return {
      fond: {
        flex: 1,
        backgroundColor: couleurF,
        padding: 10,
      },
      container: {
        padding: 5,
        flex: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#282828',
        borderRadius: 5,
      },
      header: {
        flex: 1,
      },
      text: {
        color: couleurT,
        fontSize: 20,
        textAlign: 'center',
      },
      text2: {
        color: couleurT,
        textAlign: 'center',
      },
      icon: {
        width: 30,
        height: 30,
        resizeMode: 'stretch',
      },
    }
  };

export default Informations;
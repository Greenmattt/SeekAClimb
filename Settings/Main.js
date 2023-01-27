import React, {useState} from 'react';
import { Text, View, Switch } from 'react-native';

import Informations from './Informations';

const Settings = () => {

  const [darkTheme, onChangeDarkTheme] = useState(false);
  const toggleSwitch = () => onChangeDarkTheme(a => !a)

  return (
    <View style={styleMain(false).fond}>
      <View style={styleMain(false).header}>
        <Text style = {styleMain(false).text}>Page des Param�tres</Text>
      </View>
      <View style = {styleMain(false).container}>
        <Text style = {styleMain(false).text2}>Theme Sombre</Text>

        <Switch
        trackColor={{false: '#3a75b1', true: "#3ab175"}}
        thumbColor = {darkTheme ? "#fff" : "#fff"}
        onValueChange = {toggleSwitch}
        value = {darkTheme}/>

        <Text style = {styleMain(false).text2}>Theme Clair</Text>
      </View>
    </View>
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

export default Settings;
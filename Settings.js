import React, {useState} from 'react';
import { Text, View, Switch } from 'react-native';

const Settings = () => {

  const [darkTheme, onChangeDarkTheme] = useState(false);
  const toggleSwitch = () => onChangeDarkTheme(a => !a)

  return (
    <View style={styleMain(false).main}>
      <View style={styleMain(false).header}>
      </View>
      <View style={styleMain(false).container}>
        <View style={styleMain(false).div1}>
          <Text style={styleMain(false).mainText}>Paramètres</Text>
        </View>
        <View style={styleMain(false).div2}>
          <Switch
          trackColor={{false: '#3a75b1', true: "#3ab175"}}
          thumbColor = {darkTheme ? "#fff" : "#fff"}
          onValueChange = {toggleSwitch}
          value = {darkTheme}/>
        </View>
        <View style={styleMain(false).div2}>
          <Switch
          trackColor={{false: '#3a75b1', true: "#3ab175"}}
          thumbColor = {darkTheme ? "#fff" : "#fff"}
          onValueChange = {toggleSwitch}
          value = {darkTheme}/>
        </View>
      </View>
    </View>
  );
}

var styleMain = function(clair) {
    var couleurF = clair ? "#FFFFFF" : "#131514";
    var couleurT = clair ? "#131514" : "#FFFFFF";
  
    return {
      main: {
        flex: 1,
        backgroundColor: couleurF,
      },
      header: {
        flex: 1,
        backgroundColor: '#214E34',
      },
      container: {
        flex: 15,
        backgroundColor: '#131514',
        padding: 20,
      },
      div1: {
        flex: 1,
        backgroundColor: '#131514',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
      },
      mainText: {
        color: couleurT,
        fontSize: 20,
      },
      div2: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        backgroundColor: '#282828',
        borderRadius: 5,
        margin: 2,
      }
    }
  };

export default Settings;

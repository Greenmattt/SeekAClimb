import React, {useState} from 'react';
import { Text, View, Switch, TouchableOpacity } from 'react-native';

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
          <Text style={styleMain(false).text}>Thème Clair</Text>

          <Switch
          trackColor={{false: '#3a75b1', true: "#3ab175"}}
          thumbColor = {darkTheme ? "#fff" : "#fff"}
          onValueChange = {toggleSwitch}
          value = {darkTheme}/>
          
          <Text style={styleMain(false).text}>Thème Sombre</Text>
        </View>
        <View style={styleMain(false).div2}>
          <TouchableOpacity><Text style={styleMain(false).text}>Informations</Text></TouchableOpacity>
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
        margin: 10,
      },
      div1: {
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
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#282828',
        borderRadius: 5,
        margin: 2,
        flexFlow: 'columnWrap',
      },
      text: {
        color: couleurT,
      },
    }
  };

export default Settings;

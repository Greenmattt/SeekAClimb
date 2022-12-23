import {View, TouchableOpacity, Image } from 'react-native';
import React, {useState } from 'react';



const Barre =() => {
  let [selectedIcon, setSelectedIcon] = useState(0);
  const appui = (nb) => setSelectedIcon( selectedIcon => nb);

  return (
    <View style={styleBar().barre}>
        {/* et ici chaque boutton en bas de votre écran (qui pour l'instant ne servent à rien*/}
        {/* d'ailleurs utilisez les <View> comme des <div> en html */}
        <View style = {styleBar(selectedIcon == 0).case}>
          <TouchableOpacity activeOpacity={0.1} 
                            style= {styleBar(selectedIcon == 0).boutonIcon}
                            onPress = {() => appui(0)}>
            <Image style={styleBar().icon} source={require('./assets/home_icon.png')}/>
          </TouchableOpacity>
        </View>

        <View style = {styleBar(selectedIcon == 1).case}>
          <TouchableOpacity activeOpacity={0.1} 
                            style= {styleBar(selectedIcon == 1).boutonIcon}
                            onPress = {() => appui(1)}>
            <Image style={styleBar().icon} source={require('./assets/home_icon.png')}/>
          </TouchableOpacity>
        </View>

        <View style = {styleBar(selectedIcon == 2).case}>
          <TouchableOpacity activeOpacity={0.1} 
                            style= {styleBar(selectedIcon == 2).boutonIcon}
                            onPress = {() => appui(2)}>
            <Image style={styleBar().icon} source={require('./assets/user_icon.png')}/>
          </TouchableOpacity>
        </View>

        <View style = {styleBar(selectedIcon == 3).case}>
          <TouchableOpacity activeOpacity={0.1} 
                            style= {styleBar(selectedIcon == 3).boutonIcon}
                            onPress = {() => appui(3)}>
            <Image style={styleBar().icon} source={require('./assets/settings_icon.png')}/>
          </TouchableOpacity>
        </View>
    </View>
  );
}

var styleBar = function(selectionne = false) {
  var couleurDeFond = "#9191aa";
  var couleurSelectionne = "#a1a1ca";

  return {
    barre: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    case: {
      flex: 1,
      backgroundColor: selectionne ? couleurSelectionne : couleurDeFond,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    icon: {
      width: 50,
      height: 50,
      resizeMode: 'stretch',
    },
    boutonIcon: {
      backgroundColor: selectionne ? couleurSelectionne : couleurDeFond,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }
}


export default Barre;
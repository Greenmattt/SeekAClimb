import {View, TouchableOpacity, Image } from 'react-native';
import React, {useState } from 'react';



const Barre =() => {
  let [selectedIcon, setSelectedIcon] = useState(0);
  const appuy0 = () => setSelectedIcon( a => 0);
  const appuy1 = () => setSelectedIcon( a => 1);
  const appuy2 = () => setSelectedIcon( a => 2);
  const appuy3 = () => setSelectedIcon( a => 3);

  return (
    <View style={styleBar(false).barre}>
        {/* et ici chaque boutton en bas de votre écran (qui pour l'instant ne servent à rien*/}
        {/* d'ailleurs utilisez les <View> comme des <div> en html */}
        <View style = {styleBar(selectedIcon == 0).case}>
          <TouchableOpacity activeOpacity={0.1} 
                            style= {styleBar(selectedIcon == 0).boutonIcon}
                            onPress = {appuy0}>
            <Image style={styleBar().icon} source={require('./assets/home_icon.png')}/>
          </TouchableOpacity>
        </View>

        <View style = {styleBar(selectedIcon == 1).case}>
          <TouchableOpacity activeOpacity={0.1} 
                            style= {styleBar(selectedIcon == 1).boutonIcon}
                            onPress = {appuy1}>
            <Image style={styleBar().icon} source={require('./assets/home_icon.png')}/>
          </TouchableOpacity>
        </View>

        <View style = {styleBar(selectedIcon == 2).case}>
          <TouchableOpacity activeOpacity={0.1} 
                            style= {styleBar(selectedIcon == 2).boutonIcon}
                            onPress = {appuy2}>
            <Image style={styleBar().icon} source={require('./assets/user_icon.png')}/>
          </TouchableOpacity>
        </View>

        <View style = {styleBar(selectedIcon == 3).case}>
          <TouchableOpacity activeOpacity={0.1} 
                            style= {styleBar(selectedIcon == 3).boutonIcon}
                            onPress = {appuy3}>
            <Image style={styleBar().icon} source={require('./assets/settings_icon.png')}/>
          </TouchableOpacity>
        </View>
    </View>
  );
}

var styleBar = function(selectionne) {
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
      justifyContent: 'space-evenly'
    },
    icon: {
      width: 50,
      height: 50,
      resizeMode: 'stretch',
    },
    boutonIcon: {
      backgroundColor: selectionne ? couleurSelectionne : couleurDeFond,
    }
  }
}


export default Barre;
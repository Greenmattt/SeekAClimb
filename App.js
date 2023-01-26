import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';

// pour la nav bar : npm install @react-navigation/material-top-tabs react-native-tab-view
// puis : npx expo install react-native-pager-view


import Settings from './Settings';
import Account from './Account';
import Routes from './Routes';
import Home from './Home';

// permet de garder le splash screen visible jusqu'à ce que toutes les ressources soient téléchargées
const App = () => {

  // Page principale
  function HomeScreen() {
    return (
      <Home/>
    );
  }

  function RoutesScreen() {
    return (
      <Routes/>
    );
  }

  function SettingsScreen() {
    return (
      <Settings/>
    );
  }

  function AccountScreen() {
    return (
      <Account/>
    );
  }

  function imageSettings () {return(<Image style={styleMain().icon} source={require('./assets/settings_icon.png')}/>)}
  function imageAccueil () {return(<Image style={styleMain().icon} source={require('./assets/home_icon.png')}/>)}
  function imageCompte () {return(<Image style={styleMain().icon} source={require('./assets/user_icon.png')}/>)}
  function imageVoies () {return(<Image style={styleMain().icon} source={require('./assets/Sports_Climbing_icon.png')}/>)}
  const Tab = createMaterialTopTabNavigator();

  return (
    
    <NavigationContainer>
    <View style = {styles.header}>
    <Text style = {styles.headText}> SeekAclimb </Text>
    </View>
      <Tab.Navigator tabBarPosition='bottom'>
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false, tabBarIcon:imageAccueil, tabBarShowIcon:true}}/>
        <Tab.Screen name="Voies" component={RoutesScreen} options={{headerShown:false, tabBarIcon:imageVoies, tabBarShowIcon:true}}/>
        <Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown:false, tabBarIcon:imageSettings, tabBarShowIcon:true}}/>
        <Tab.Screen name="Account" component={AccountScreen} options={{headerShown:false, tabBarIcon:imageCompte, tabBarShowIcon:true}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor : '#131514',
  },
  
  text: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    flex: 1,
    textTransform: 'capitalize',
    fontStyle: 'italic',
  },

  header:{
    flex: .07,
    backgroundColor: '#214E34'
  },

  headText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
  },

  container: {
    flex: 15,
    justifyContent: 'space-between',
    backgroundColor: '#131514',
  },

  top: {
    flex: 20,
    backgroundColor: '#282828',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  mid: {
    flex: 20,
    backgroundColor: '#282828',
    borderColor: '#364156',
    borderWidth: 1,
    borderRadius: 5,
  },

  bottom: {
    flex: 20,
    backgroundColor: '#282828',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: '#364156',
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});
// clair est un booléen
var styleMain = function(clair) {
  var couleurF = clair ? "#FFFFFF" : "#000000";
  var couleurT = clair ? "#000000" : "#FFFFFF";

  return {
    fond: {
      flex: 1,
      backgroundColor: couleurF, 
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    text: {
      color: couleurT,
    },
    icon: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
    },
  }
};


export default App;

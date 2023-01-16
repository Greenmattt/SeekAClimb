import { StatusBar } from 'expo-status-bar';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useCallback, useEffect, useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
// commande à faire : npx expo install expo-splash-screen
// pour la nav bar : npm install @react-navigation/material-top-tabs react-native-tab-view
// puis : npx expo install react-native-pager-view

// je préviens toutes les fonctions compliquées pour le splash screen sortent de cette doc : 
// https://docs.expo.dev/versions/latest/sdk/splash-screen/
// https://hackernoon.com/how-to-design-a-splash-screen-with-expo-and-react-native

import Settings from './Settings';
import Account from './Account';
import Routes from './Routes';
import Home from './Home';



// permet de garder le splash screen visible jusqu'à ce que toutes les ressources soient téléchargées
SplashScreen.preventAutoHideAsync();

const App =() => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Chargement de la police, c'est là qu'on fait nos appels à la base de donnée si besoin
        await Font.loadAsync(Entypo.font);
        // Ici on met un timer de 2 secondes artificelle 
        // /!\ A ENELEVER QUAND ON FERA DES TRUCS UTILES ICI /!\
        await new Promise(resolve => setTimeout(resolve, 200));
      } catch (e) {
        console.warn(e);
      } finally {
        // Quand tout est fini on peut render l'application
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // Ici ça permet de cacher le Splash screen, et on le fait pas avant le 
      // setAppIsReady on pourrait avoir des pb
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  // fin du setup du splash screen

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
      <Tab.Navigator tabBarPosition='bottom'>
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false, tabBarIcon:imageAccueil, tabBarShowIcon:true}}/>
        <Tab.Screen name="Voies" component={RoutesScreen} options={{headerShown:false, tabBarIcon:imageVoies, tabBarShowIcon:true}}/>
        <Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown:false, tabBarIcon:imageSettings, tabBarShowIcon:true}}/>
        <Tab.Screen name="Account" component={AccountScreen} options={{headerShown:false, tabBarIcon:imageCompte, tabBarShowIcon:true}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

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
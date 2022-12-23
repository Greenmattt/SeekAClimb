import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
// commande à faire : npx expo install expo-splash-screen

// je préviens toutes les fonctions compliquées pour le splash screen sortent de cette doc : 
// https://docs.expo.dev/versions/latest/sdk/splash-screen/
// https://hackernoon.com/how-to-design-a-splash-screen-with-expo-and-react-native

import Barre from './Footer';


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
        await new Promise(resolve => setTimeout(resolve, 2000));
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


  return (
    <View style={{flex:1}}>
      {/* La partie principale de l'application (encore tout à faire) */}
      <View style={styleMain(true).fond} onLayout={onLayoutRootView}>
        <StatusBar style="auto" />
        <Text>Écran principal</Text>
      </View>

      {/* Un essai de 'nav' en bas où on peut choisir facilement sur quelle page aller (oui les images sont à changer) */}
      <Barre/>
    </View>
  );
}

// clair est un booléen
var styleMain = function(clair) {
  var couleurF = clair ? "#FFFFFF" : "#000000";
  var couleurT = clair ? "#000000" : "#FFFFFF";

  return {
    fond: {
      flex: 9,
      backgroundColor: couleurF, 
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    text: {
      color: couleurT,
    }
  }
};


export default App;
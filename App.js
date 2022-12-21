import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
// commande à faire : npx expo install expo-splash-screen

// je préviens toutes les fonctions compliquées pour le splash screen sortent de cette doc : 
// https://docs.expo.dev/versions/latest/sdk/splash-screen/
// https://hackernoon.com/how-to-design-a-splash-screen-with-expo-and-react-native

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
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text>Open up App.js to start working on your app!</Text>
      <Entypo name="rocket" size={30} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;
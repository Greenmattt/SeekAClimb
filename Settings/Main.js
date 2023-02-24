import React from 'react';
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack'; //npm install @react-navigation/stack

import Informations from './Informations';
import Settings from './Settings';

const Main = () => { // Page de navigation entre Settings.js et Informations.js

  const Stack = createStackNavigator(); // Navigation par pages stackées

  return (
    <Stack.Navigator initialRouteName={'Parametres'}>
      <Stack.Screen 
        name='Parametres'
        component={Settings} 
        options={{ 
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
         }}
      />
      <Stack.Screen 
      name='Informations' 
      component={Informations} 
      options={{ 
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
       }}
      />
    </Stack.Navigator>
  );
}

export default Main;

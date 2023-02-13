import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Informations from './Informations';
import Settings from './Settings';

const Main = () => { // Page de navigation entre Settings.js et Informations.js

  const Stack = createStackNavigator(); // Navigation par pages stackées

  return (
    <Stack.Navigator initialRouteName={'Settings'}>
      <Stack.Screen name='Settings' component={Settings} options={{ headerShown: false }}/>
      <Stack.Screen name='Informations' component={Informations} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default Main;
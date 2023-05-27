//Navigation import
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Options from './Options';
import SeConnecter from './SeConnecter';
import CreerCompte from './CreerCompte';
import Informations from './Informations';

const config = {
  animation: 'timing',
  config: {
    duration : 400,
  },
};

const App = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName={'Options'}>
      <Stack.Screen
        name="Options"
        component={Options}
        options={{ 
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          
        }}
      />
      <Stack.Screen
        name="SeConnecter"
        component={SeConnecter}
        options={{ 
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          transitionSpec:{
            open:{},
            close: config,
          }
        }}
      />
      <Stack.Screen
        name="CreerCompte"
        component={CreerCompte}
        options={{ 
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
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
};

export default App;

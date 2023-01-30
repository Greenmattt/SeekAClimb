//Navigation import
import { createStackNavigator } from '@react-navigation/stack';

import Options from './Options';
import SeConnecter from './SeConnecter';
import CreerCompte from './CreerCompte';
import SupprimerCompte from './SupprimerCompte';


const App = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName={'Options'}>
      <Stack.Screen
        name="Options"
        component={Options}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SeConnecter"
        component={SeConnecter}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreerCompte"
        component={CreerCompte}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SupprimerCompte"
        component={SupprimerCompte}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default App;
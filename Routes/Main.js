import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Routes from "./RechercheRoute";
import CameraMain from "./Camera";
import CreerBloc from './CreerBloc';

const RouteMain = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName={'Routes'}>
      <Stack.Screen
        name="Routes"
        component={Routes}
        options={{ 
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Camera"
        component={CameraMain}
        options={{ 
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreerBloc"
        component={CreerBloc}
        options={{ 
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default RouteMain;

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Routes from "./RechercheRoute";
import CameraMain from "./Camera";

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
    </Stack.Navigator>
  );
}

export default RouteMain;

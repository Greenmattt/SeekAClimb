import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View, Image, ActivityIndicator, TouchableOpacity, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect , useState} from 'react';


// pour la nav bar : npm install @react-navigation/material-top-tabs react-native-tab-view
// puis : npx expo install react-native-pager-view

import Settings from './Settings/Main';
import Account from './Account/Main';
import Routes from './Routes/Main';
import Home from './Home/Home';

import style from './Component/Styles'

const App = () => {

  // load du style
  const [styles, setLeStyle] = useState({});
  const [styleCharge, setStyleCharge] = useState(false);

  useEffect(() => {
    async function getStyle (){
      const s = await style();
      setLeStyle(s);
      setStyleCharge(true);
    }
    getStyle();
  }, [])

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

  function imageSettings () {return(<Image style={styles.icon} source={require('./assets/settings_icon.png')}/>)}
  function imageAccueil () {return(<Image style={styles.icon} source={require('./assets/home_icon.png')}/>)}
  function imageCompte () {return(<Image style={styles.icon} source={require('./assets/user_icon.png')}/>)}
  function imageVoies () {return(<Image style={styles.icon} source={require('./assets/Sports_Climbing_icon.png')}/>)}
  const Tab = createMaterialTopTabNavigator();


  return (
    <View style = {{flex:1}}>
    {styleCharge 
    ? <NavigationContainer theme={{  
  dark: true,
  colors: {
    primary: '#a0d520',
    background: 'black',
    card: '#0000',
    text: 'black',
    border: 'gray',
    notification: 'green',
  },}}>
    <View style = {styles.header}>
      <Text style = {styles.headerText}> SeekAclimb </Text>
    </View>
      <Tab.Navigator tabBarPosition='bottom' tabBarOptions={{
          iconStyle: styles.tabBarIconStyle,
          style: styles.tabBarStyle,
          labelStyle: styles.tabBarLabelStyle,
         }}>

        <Tab.Screen name="Accueil" component={HomeScreen} options={{headerShown:false, tabBarIcon:imageAccueil, tabBarShowIcon:true}}/>
        <Tab.Screen name="Voies" component={RoutesScreen} options={{headerShown:false, tabBarIcon:imageVoies, tabBarShowIcon:true}}/>
        <Tab.Screen name="Carte" component={SettingsScreen} options={{headerShown:false}}/>
        <Tab.Screen name="Compte" component={AccountScreen} options={{headerShown:false, tabBarIcon:imageSettings, tabBarShowIcon:true}}/>
      </Tab.Navigator>

    </NavigationContainer>

    : <ActivityIndicator sier="large" color="#0000ff"/>}


    </View>
  );
}

export default App;

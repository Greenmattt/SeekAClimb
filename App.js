import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View, Image, ActivityIndicator, TouchableOpacity, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect , useState} from 'react';
import SSHClient from 'react-native-ssh-sftp';


// pour la nav bar : npm install @react-navigation/material-top-tabs react-native-tab-view
// puis : npx expo install react-native-pager-view

import Settings from './Settings/Main';
import Account from './Account/Main';
import Routes from './Routes/Main';
import Home from './Home/Home';

import style from './Component/Styles'

const App = () => {

  const envoiSFTP = () =>{
    let client = new SSHClient('91.164.5.221', 50001, 'a_nicolas', '17/nico/06', (error) => {
    if (error) console.warn(error);
    });

    client.connectSFTP((error) =>{
      if (error) console.warn(error);
    });

    client.sftpMkdir(id, (error) => {
      if (error) console.warn(error);
    });

    client.sftpUpload(imagepPath, imagePath, (error) => {
      if (error) console.warn(error);
    });

    client.disconnectSFTP();

  }

  const [estHTTPenvoye, setEstHTTPenvoye] = useState(false);
  const [estHTTPresolu, setEstHTTPresolu] = useState(false);
  const [reponseHTTP, setReponseHTTP] = useState();
  const [estErreurHTTP, setEstErreurHTTP] = useState(false);
  

  const envoiHTTP = async(id) => {
    try { // là c'est si tout va bien
    setEstHTTPenvoye(true);
      let response = await fetch('http://91.164.5.221:50000/iaRoute?id='+String(id), {
        method:'GET',
      });
      let json = await response.json();
      setReponseHTTP(json);
    } 
    catch (error) { // là c'est si on a un pb
      console.error(error);
      setReponseHTTP("<Pas de réponse de l'API>");
      setEstErreurHTTP(true);

    }
    finally { // là c'est une fois qu'on a vérifié qu'il n'y a pas d'erreur et que tout est fini
      setEstHTTPresolu(true);
      setEstErreurHTTP(false);
    }
  }

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
        <Tab.Screen name="Options" component={AccountScreen} options={{headerShown:false, tabBarIcon:imageSettings, tabBarShowIcon:true}}/>
      </Tab.Navigator>

    </NavigationContainer>

    : <ActivityIndicator sier="large" color="#0000ff"/>}

  <View style={{position:'absolute', left :'82%', top:'82%'}}>
    <TouchableOpacity style={styles.scanButton}>
      <Image style={styles.scanIcon} source={require('./assets/ultra_icon.png')}/>
    </TouchableOpacity>
  </View>

    </View>
  );
}

export default App;

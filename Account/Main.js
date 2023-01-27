import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';

//Navigation import
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const ViewInput = props => {
  return (
    <View style = {styleMain().inputView}>
      <TextInput
        style={styleMain().input}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder= {props.placeholder}
        placeholderTextColor={styleMain().text.color}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
}

//Screen One
const Options = (props) => {
  //onPress To Navigate
  const onPressSeConnecter = () => {
    props.navigation.navigate('SeConnecter');
  };

  const onPressCreerCompte = () => {
    props.navigation.navigate('CreerCompte');
  };

  const onPressSupprimerCompte = () => {
    props.navigation.navigate('SupprimerCompte');
  };

  return (
    <View style={styleMain(false).fond}>
      <View style={{ flex: 10, backgroundColor: '#214E34' }}></View>

      <View style={{ flex: 90, backgroundColor: '#025e82' }}>
        <View style={{ flex: 10 }}></View>

        <View
          style={{
            flex: 80,
            backgroundColor: '#131514',
            borderRadius: 10,
            justifyContent: 'space-around',
            padding: 5,
          }}>
          <View style={{ flex: 2, alignItems: 'center' }}>
            <TouchableOpacity
              style={{
                width: '90%',
                height: '90%',
                backgroundColor: '#282828',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                margin: 5,
              }}
              onPress={onPressSeConnecter}>
              <Text style={styleMain().text}> Se connecter </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 2, alignItems: 'center' }}>
            <TouchableOpacity
              style={{
                width: '90%',
                height: '90%',
                backgroundColor: '#282828',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                margin: 5,
              }}
              onPress={onPressCreerCompte}>
              <Text style={styleMain().text}> Créer un compte </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, alignItems: 'center' }}>
            <TouchableOpacity
              style={{
                width: '90%',
                height: '90%',
                backgroundColor: '#282828',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                margin: 5,
              }}
              onPress={onPressSupprimerCompte}>
              <Text style={styleMain().text}> Supprimer son compte</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flex: 10 }}></View>
      </View>
    </View>
  );
};

const onPressRetour = (props) => {
  props.navigation.navigate('Options');
};

const SeConnecter = (props) => {
  const [textEmail, onChangeEmail] = useState('');
  const [textMdp, onChangeMdp] = useState('');


  return (
    <View style={styleMain().fond}>
      {/* Bouton de retour dans la barre verte */}
      <View
        style={{
          flex: 10,
          backgroundColor: '#214E34',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => onPressRetour(props)}
          style={{ marginLeft: 10 }}>
          <Image
            style={styleMain().icon}
            source={require('./../assets/back_arrow_image.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 90, backgroundColor: '#025e82' }}>
        <View style={{flex:2}}></View>

        {/*Input email */}
        <ViewInput onChangeText={onChangeEmail} value={textEmail} placeholder={"Email"} secureTextEntry={false}/>

        {/*Input mot de passe */}
        <ViewInput onChangeText={onChangeMdp} value={textMdp} placeholder={"Mot de passe"} secureTextEntry={false}/>

        <View style={{flex:2}}></View>        
      </View>
    </View>
  );
};

const CreerCompte = (props) => {

  const [textNom, onChangeNom] = useState('');
  const [textPrenom, onChangePrenom] = useState('');
  const [textEmail, onChangeEmail] = useState('');
  const [textClasse, onChangeClasse] = useState('');
  const [textMdp, onChangeMdp] = useState('');
  const [textMdpConfirme, onChangeMdpConfirme] = useState('');

  return (

    <View style={styleMain().fond}>
      {/* Bouton de retour dans la barre verte */}
      <View
        style={{
          flex: 10,
          backgroundColor: '#214E34',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => onPressRetour(props)}
          style={{ marginLeft: 10 }}>
          <Image
            style={styleMain().icon}
            source={require('./../assets/back_arrow_image.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 90, backgroundColor: '#221405' }}>
        <View style = {{flex:1}}></View>

        {/*Input nom */}
        <ViewInput onChangeText={onChangeNom} value={textNom} placeholder={"Nom"} secureTextEntry={false}/>

        {/*Input prénom */}
        <ViewInput onChangeText={onChangePrenom} value={textPrenom} placeholder={"Prenom"} secureTextEntry={false}/>

        {/*Input email */}
        <ViewInput onChangeText={onChangeEmail} value={textEmail} placeholder= {"Email"} secureTextEntry={false}/>

        {/*Input classe */}
        <ViewInput onChangeText={onChangeClasse} value={textClasse} placeholder= {"Classe"} secureTextEntry={false}/>

        {/*Input mot de passe */}
        <ViewInput onChangeText={onChangeMdp} value={textMdp} placeholder= {"Mot de passe"} secureTextEntry={true}/>

        {/*Input validation du mot de passe */}
        <ViewInput onChangeText={onChangeMdpConfirme} value={textMdpConfirme} placeholder= {"Valider le mot de passe"} secureTextEntry={true}/>

        <View style = {{flex:1}}></View>
      </View>
    </View>
  );
};



const SupprimerCompte = (props) => {
  return (
    <View style={styleMain().fond}>
      {/* Bouton de retour dans la barre verte */}
      <View
        style={{
          flex: 10,
          backgroundColor: '#214E34',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => onPressRetour(props)}
          style={{ marginLeft: 10 }}>
          <Image
            style={styleMain().icon}
            source={require('./../assets/back_arrow_image.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 90, backgroundColor: '#025e82' }}>
        <Text style={styleMain().text}> je supprime mon compte</Text>
      </View>
    </View>
  );
};

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

var styleMain = function (clair) {
  var couleurF = clair ? '#FFFFFF' : '#000000';
  var couleurT = clair ? '#000000' : '#FFFFFF';

  return {
    fond: {
      flex: 1,
      backgroundColor: couleurF,
      justifyContent: 'space-evenly',
    },
    text: {
      color: couleurT,
    },
    icon: {
      width: 30,
      height: 30,
      resizeMode: 'stretch',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: couleurF,
      color: couleurT,
      borderRadius:10,
      width:'100%',
    },
    inputView: {
      flex:1, 
      justifyContent:'center', 
      alignItems:'center',
      marginLeft:10,
      marginRight:10,
      
    }
  };
};

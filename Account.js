import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Account = () => {
  return (
    <View style={styleMain(false).fond}>

      <View style = {{flex: 10, backgroundColor: '#214E34'}}></View>

      <View style = {{flex: 90, backgroundColor: '#025e82'}}>

        <View style = {{flex:10}}></View>

        <View style = {{flex:80, backgroundColor: '#131514', borderRadius: 10, justifyContent:'space-around', padding:5}}>
          <View style = {{flex: 2, alignItems: 'center'}}>
            <TouchableOpacity style = {{width: '90%', height: '90%', backgroundColor: '#282828', justifyContent:'center', alignItems:'center', borderRadius: 20, margin:5}}>
              <Text style = {styleMain().text}> Se connecter </Text>
            </TouchableOpacity>
          </View>

          <View style = {{flex: 2, alignItems: 'center'}}>
            <TouchableOpacity style = {{width: '90%', height: '90%', backgroundColor: '#282828', justifyContent:'center', alignItems:'center', borderRadius: 20, margin:5}}>
              <Text style = {styleMain().text}> Créer un compte </Text>
            </TouchableOpacity>
          </View>

          <View style = {{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity style = {{width: '90%', height: '90%', backgroundColor: '#282828', justifyContent:'center', alignItems:'center', borderRadius: 20, margin:5}}>
              <Text style = {styleMain().text}> Supprimer son compte</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style = {{flex:10}}></View>

      </View>
      
 
    </View>
  );
}

var styleMain = function(clair) {
  var couleurF = clair ? "#FFFFFF" : "#000000";
  var couleurT = clair ? "#000000" : "#FFFFFF";

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
  }
};

export default Account;
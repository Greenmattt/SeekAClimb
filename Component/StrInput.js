import React from 'react';
import { View, TextInput } from 'react-native';

import styles from 'Style';

const StrInput = props => {
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

export default StrInput;

var styleMain = function (clair) {
  var couleurF = clair ? '#FFFFFF' : '#000000';
  var couleurT = clair ? '#000000' : '#FFFFFF';

  return {
    text: {
      color: couleurT,
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

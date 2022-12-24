import React from 'react';
import { Text, View } from 'react-native';

const Account = () => {
  return (
    <View style={styleMain(false).fond}>
      <Text style={styleMain(false).text}>Page du compte</Text>
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
      alignItems: 'center',
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
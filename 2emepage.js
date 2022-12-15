import React, { useState } from 'react';
import { StyleSheet, Text, View , Button, Separator, Alert, TextInput} from 'react-native';

// bon tout faire avec des éléments const comme ça a l'air de bien marché :

// et le import marche bien dans App.js
const Hello = () => {
    // pour stocker les valeurs du input : 
    const [text, setText] = React.useState('');
    return (<View>
        <Text style = {styles.innerText}>Bonjout je suis une autre page</Text>
         <Text style = {styles.innerText}>input : </Text>
         <TextInput style = {styles.innerText}
                onChangeText={setText}
                defaultValue={text}
                placeholder={"là on voit ce qui est écrit"}
                placeholderTextColor='#faf'/>
    </View>);
}
const styles = StyleSheet.create({
    innerText: {
      color: '#ffffff',
    }
  });
export default Hello;
import React, { useState } from 'react';
import { StyleSheet, Text, View , Button, Separator, Alert, TextInput} from 'react-native';

// bon tout faire avec des éléments const comme ça a l'air de bien marché :

// et le import marche bien dans App.js
const Hello = () => {
    // pour stocker les valeurs du input : 
    const [text, setText] = React.useState('');
    return (<View>
        <Text>Bonjout je suis une autre page</Text>
         <Text>input : </Text>
         <TextInput 
                onChangeText={setText}
                defaultValue={text}
                placeholder={"input de l'autre page"}/>
    </View>);
}

export default Hello;
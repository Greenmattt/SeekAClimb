import React, { useState } from 'react';
import { StyleSheet, Text, View , Button, Separator, Alert, TextInput} from 'react-native';

const variable = () => {return "uwu"}

class Hello extends React.Component{
    constructor() {
        super();
        this.variable = 'aaaah';
        //const [text, setText] = React.useState('');
    }

    render() {
        return (<View>
        <Text>Bonjout je suis une autre page</Text>
         <Text>input : </Text>
         <TextInput 
                onChangeText={newText => setText(newText)}
                placeholder={this.variable}/>
    </View>);
    }
}

export default Hello;
import React, {useState, useEffect} from "react";
import {View, Text, Button, TouchableOpacity, Image} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';

import style from "../Component/Styles";
import GoBackButton from "../Component/GoBackButton";

const CreerBloc = (props) => {
    const GoBackToRoutes = () => {
        props.navigation.navigate('Routes');
    }

    const [open, setOpen] = useState(false);
    const [lieuPicker, setLieuPicker] = useState([]); 
    const [items, setItems] = useState([
      {label: 'Blaise-Pascal', value: '0001'},
      {label: 'Casamur', value: '0002', },
      {label: 'Cournols', value: '0003'},
    ]);

    // load du style
    const [styles, setLeStyle] = useState({});

    useEffect(() => {
        async function getStyle (){
        const s = await style();
        setLeStyle(s);
        }
        getStyle();
    }, []);

    return (
        <View style={styles.container}>
            <GoBackButton onPress = {() => GoBackToRoutes(props)}/>
            <View style={{flex:10}}>
                <Text style={styles.text}>Choisissez un site :</Text>

                <DropDownPicker
                open={open}
                value={lieuPicker}
                items={items}
                setOpen={setOpen}
                setValue={setLieuPicker}
                setItems={setItems}

                placeholder="Choisissez un lieu"
                theme="DARK"
                multiple={false}
                style={{borderWidth: 0}}/>

                <Text style={styles.text}>Choisissez l'image sur laquelle est votre route :</Text>
            </View>
        </View>
    );
}

export default CreerBloc;

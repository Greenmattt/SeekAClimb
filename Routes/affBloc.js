import React, {useState, useEffect} from "react";
import {View, Text, TouchableOpacity, Image, Modal} from "react-native";
import { useNavigation } from "@react-navigation/native";

import style from "../Component/Styles";
import SneakyBackButton from "../Component/SneakyBackButton";

const AfficherMur = () => {
   const navigation = useNavigation();
    const {infoImage} = a;
    console.log(infoImage);

    const GoBackToCreerBloc = () => {
        navigation.navigate('CreerBloc');
    }
    // load du style
    const [styles, setLeStyle] = useState({});
    const [image, setImage] = useState();

    useEffect(() => {
        async function getStyle (){
        const s = await style();
        setLeStyle(s);
        }
        getStyle();
        requestImage();
    }, []);
    const requestImage = async() =>{
            try {
            let response = await fetch('http://91.164.5.221:50000/getImage?idSite='+props.IDSite+"&idMur="+props.IDMur+"&numeroImage="+props.NumImage);
            console.log(response);
            let json = await response.json();
            setImage(<Image style={{flex:1,position:'absolute', left:0, right:0}} resizeMode='contain' source={{uri: 'data:image/png;base64,'+json.image}}/>);
            } catch(e) {
            console.warn(e)
        }
    }

    return (
        <View style={styles.container}>
          
            {image}
            <SneakyBackButton onPress = {() => GoBackToCreerBloc(props)}/>  
            
        </View>
    );
}

export default AfficherMur;

import React, {useState, useEffect} from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";

import style from "../Component/Styles";
import SneakyBackButton from "../Component/SneakyBackButton";
import CreerBloc from "./CreerBloc";

const AfficherMur = ({route, navigation}) => {
    const {IDSite} = route.params;
    const {IDMur} = route.params;
    const {NumImage} = route.params;
    console.log(IDSite,IDMur,NumImage);
    

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
            let response = await fetch('http://91.164.5.221:50000/getImage?idSite='+IDMur+"&idMur="+IDSite+"&numeroImage="+NumImage);
            // console.log(response);
            let json = await response.json();
            console.log(String(json))
            setImage(<Image style={{flex:1, left:0, right:0}} resizeMode="cover" source={{uri: 'data:image/png;base64,'+json.image}}/>);
            } catch(e) {
            console.warn(e)
        }
    }

    return (
        <View style={styles.container}>
          
            {image}
            <SneakyBackButton onPress = {() => GoBackToCreerBloc()}/>  
            
        </View>
    );
}

export default AfficherMur;

import React, {useState, useEffect} from "react";
import {View, Image} from "react-native";


import style from "../Component/Styles";
import SneakyBackButton from "../Component/SneakyBackButton";


const AfficherMur = ({route, navigation}) => {
    const {IDSite, IDMur, NumImage} = route.params;
    

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
            let json = await response.json();
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

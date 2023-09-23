import React, {useState, useEffect} from "react";
import {Pressable, View, Image, TouchableOpacity} from "react-native";
import Svg, {
    Circle,
    Ellipse,
    
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
  } from 'react-native-svg';


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
    const [isLogging, setIsLogging] = useState(false);
    const [pathData, setPathData] = useState('');

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

    const getFingerCoords = (evt) =>{
        const { locationX, locationY } = evt.nativeEvent;
        setIsLogging(console.log("x: "+locationX+" y: "+locationY));
        setPathData(`M${locationX} ${locationY}`)
    } 

    const actualiseFingerCoords = (evt) => {
        const { locationX, locationY } = evt.nativeEvent;
        setPathData((prevPath) => `${prevPath} L${locationX} ${locationY}`)
    };

    return (
        <View style={styles.container}>
                
            <TouchableOpacity style={{flex:1,color:'#00000000'}} activeOpacity={1} onPressIn={getFingerCoords} onPressOut={actualiseFingerCoords}>
            <Svg fill = "none" resizeMode="cover" >
                <Path
                
                    d={pathData}
                    fill="none"
                    stroke="red"
                    strokeWidth={5}
                    />
            </Svg>
                    {image}
                
                <SneakyBackButton onPress = {() => GoBackToCreerBloc()}/>  
            </TouchableOpacity>
        </View>
    );
}

export default AfficherMur;

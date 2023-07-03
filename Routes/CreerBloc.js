import React, {useState, useEffect} from "react";
import {View, Text, TouchableOpacity, Image, Modal} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from "@react-navigation/native";

import style from "../Component/Styles";
import GoBackButton from "../Component/GoBackButton";

const CreerBloc = () => {
    const navigation = useNavigation();
    const GoBackToRoutes = () => {
       navigation.navigate('Routes');
    }
    const BigBigImage = (idMur,idSite,numeroImage) => {
        navigation.navigate('AfficherMur',{IDMur:idMur,IDSite:idSite,NumImage:numeroImage});
    };

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

    const [miniatures, setMiniatures] = useState([]);

    useEffect(() =>{
        async function getMiniature (){
            if (lieuPicker[0] != undefined) {
                console.log(lieuPicker)
                try {
                    let response = await fetch('http://91.164.5.221:50000/Miniature?idSite='+String(lieuPicker));
                    let json = await response.json();

                    let liste_TO_res = [];
                    
                    Object.keys(json).forEach(function(key){
                        liste_TO_res.push(
                            <TouchableOpacity key={key} style={{width:100, height:100, backgroundColor:'#252525'}} onPress={() => getImage(json[key].IDSite, json[key].IDMur, json[key].numeroImage)}>
                                <Image style={{flex:1}} resizeMode='contain' source={{uri: 'data:image/png;base64,'+json[key].imageB64}}/>
                            </TouchableOpacity>
                        );
                    });

                    setMiniatures(liste_TO_res);

                }catch(e){
                    console.warn(e);
                }
            }
        }
        getMiniature();

    }, [lieuPicker]);

const [blocImage, setBlocImage] = useState();

const [estModal, setModal] = useState(false);

    const getImage = async(idSite, idMur, numeroImage) => {
        // try {
        //     let response = await fetch('http://91.164.5.221:50000/getImage?idSite='+idSite+"&idMur="+idMur+"&numeroImage="+numeroImage);
        //     let json = await response.json();
        //     setBlocImage(<Image style={{flex:1,position:'absolute', left:0, right:0}} resizeMode='contain' source={{uri: 'data:image/png;base64,'+json.image}}/>);
        //     setModal(true);
        // } catch(e) {
        //     console.warn(e)
        // }
        console.log('lmao ggez big NUBZ')
        BigBigImage(idSite,idMur,numeroImage)
    }

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

                {miniatures}
            </View>
            
        </View>
    );
}

export default CreerBloc;

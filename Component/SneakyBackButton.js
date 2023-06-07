import { View, TouchableOpacity, Image } from 'react-native';
import React, {useEffect, useState} from 'react';
import style from '../Component/Styles';

const SneakyBackButton = props => {

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
    <View style={{position:'absolute', top:'2%', left:'3%'}}>
      <TouchableOpacity onPress={props.onPress} style={styles.sneakyBackButton}>
        <Image style={styles.scanIcon} source={require('./../assets/back_arrow_image.png')}/>
      </TouchableOpacity>
    </View>
  );
}

export default SneakyBackButton;

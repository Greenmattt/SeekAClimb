import { View, TouchableOpacity, Image } from 'react-native';
import React, {useEffect, useState} from 'react';
import style from '../Component/Styles';

const GoBackButton = props => {

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
    <View style={styles.goBackBox}>
      <TouchableOpacity onPress={props.onPress} style={styles.goBackButton}>
        <Image style={styles.backIcon} source={require('./../assets/back_arrow_image.png')}/>
      </TouchableOpacity>
    </View>
  );
}

export default GoBackButton;
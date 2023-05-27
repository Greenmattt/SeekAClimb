import { TextInput } from 'react-native';
import React, {useEffect, useState} from 'react';
import style from './Styles';

const StrInput = props => {

  // load du style
  const [styles, setLeStyle] = useState({});
  const [styleCharge, setStyleCharge] = useState(false);

  useEffect(() => {
    async function getStyle (){
      const s = await style();
      setLeStyle(s);
      setStyleCharge(true);
    }
    getStyle();
  }, []);

  return (
      <TextInput
        style={styles.input}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder= {props.placeholder}
        placeholderTextColor={styleCharge ? styles.text.color : "#000000"}
        secureTextEntry={props.secureTextEntry}
      />
  );
}

export default StrInput;
import { View, Text } from 'react-native';
import React, {useState, useEffect} from 'react';
import style from '../Component/Styles';
import GoBackButton from '../Component/GoBackButton';

const onPressRetour = (props) => {
  props.navigation.navigate('Options');
};

const SupprimerCompte = (props) => {

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
      <GoBackButton onPress = {() => onPressRetour(props)} />

      <View style={{ flex: 90, backgroundColor: '#025e82' }}>
        <Text style={styles.text}> je supprime mon compte</Text>
      </View>
    </View>
  );
  
};
export default SupprimerCompte;
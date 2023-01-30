import { View, Text } from 'react-native';

import styles from '../Component/Styles';
import GoBackButton from '../Component/GoBackButton';

const onPressRetour = (props) => {
  props.navigation.navigate('Options');
};

const SupprimerCompte = (props) => {
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
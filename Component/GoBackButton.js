import { View, TouchableOpacity, Image } from 'react-native';

import styles from '../Component/Styles';

const GoBackButton = props => {
  return (
    <View style={styles.goBackBox}>
      <TouchableOpacity onPress={props.onPress} style={styles.goBackButton}>
        <Image style={styles.backIcon} source={require('./../assets/back_arrow_image.png')}/>
      </TouchableOpacity>
    </View>
  );
}

export default GoBackButton;
import { View, TouchableOpacity, Image } from 'react-native';

import styles from '../Component/Styles';

const GoBackButton = props => {
  return (
  <View
    style={{
      flex: 10,
      backgroundColor: '#214E34',
      justifyContent: 'center',
    }}>
    <TouchableOpacity
      onPress={props.onPress}
      style={{ marginLeft: 10 }}>
      <Image
        style={styles.icon}
        source={require('./../assets/back_arrow_image.png')}
      />
    </TouchableOpacity>
  </View>
  );
}

export default GoBackButton;
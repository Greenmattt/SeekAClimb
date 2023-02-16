import { Text, View } from 'react-native';

import styles from './Component/Styles'

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.homeMainBox}>
        <View style={styles.homeBox}>
          <Text style={styles.text}>Page 1</Text>
        </View>
        <View style={styles.homeBox}>
          <Text style={styles.text}>Page 2</Text>
        </View>
      </View>
      <View style={styles.homeMainBox}>
        <View style={styles.homeBox}>
          <Text style={styles.text}>Page 3</Text>
        </View>
        <View style={styles.homeBox}>
          <Text style={styles.text}>Page 4</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

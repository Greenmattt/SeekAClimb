import { Text, View } from 'react-native';

import styles from './Component/Styles'

const Home = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.textTitre}> Main Menudo </Text>
      </View>
    </View>
  );
};

export default Home;


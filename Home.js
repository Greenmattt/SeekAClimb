import { Text, View, StyleSheet } from 'react-native';

import styles from './Component/Styles'

const Home = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.text}> Main Menudo </Text>
      </View>
    </View>
  );
};

export default Home;


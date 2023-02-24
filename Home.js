import { Text, View } from 'react-native';
import React, { useEffect , useState} from 'react';
import style from './Component/Styles'

const Home = () => {
  // load du style
  const [styles, setLeStyle] = useState({});

  useEffect(() => {
    async function getStyle (){
      const s = await style();
      setLeStyle(s);
    }
    getStyle();
  }, [])

  return (
    <View style={styles.container}>

      <View style={styles.homeQuart}>
        <View style={styles.homeBox}>
          <Text style={styles.text}>Actus</Text>
        </View>
      </View>

      <View style={styles.homeQuart}>
        <View style={styles.homeBox}>
          <Text style={styles.text}>Leaderboard 1 </Text>
        </View>
        <View style={styles.homeBox}>
          <Text style={styles.text}>Leaderboard 2 </Text>
        </View>
        <View style={styles.homeBox}>
          <Text style={styles.text}>Leaderboard 3 </Text>
        </View>
      </View>

      <View style={styles.homeQuart}>
        <View style={styles.homeBox}>
          <Text style={styles.text}>Bloc de la semaine</Text>
        </View>
      </View>

      <View style={styles.homeQuart}>
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

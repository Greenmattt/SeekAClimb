import { Text, View, ActivityIndicator, ScrollView } from 'react-native';
import React, { useEffect , useState} from 'react';

import style from './../Component/Styles';
import Actus from './Actus';

const Home = () => {
  // load du style
  const [styles, setLeStyle] = useState({});

  useEffect(() => {
    async function getStyle (){
      const s = await style();
      setLeStyle(s);
    }
    getStyle();
  }, []);

  // load des info
  const [info, setInfo] = useState();
  const [estInfoCharge, setEstInfoCharge] = useState(false);

  useEffect(() => {
    async function getInfo () {
      try {
        let response = await fetch("http://91.164.5.221:50000/actus", {
          method : "GET"
        });
        let text = await response.json();
        setInfo(text);

      } catch(e) {
        console.warn(e); 
        setInfo("Erreur dans la demande de l'api"); 
  
      } finally { 
        setEstInfoCharge(true);
      }

    }
    getInfo();
  }, []);

  return (
    <View style={styles.container}>

      <View style={styles.homeQuart}>
        <View style={styles.homeBox}>
          <ScrollView style={{flex:1}} horizontal={true}>
          {estInfoCharge ? <Actus text = {info}/> : <Text style = {styles.text}>Attente de l'api pour les info</Text>}
          </ScrollView>
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
 
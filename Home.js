import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={{backgroundColor:'#214E34'}}
    <View style={styles.container}>
      <Text style={styles.header}> SeekAClimb </Text>
      <View style={styles.top}>
        <Text style={styles.text}>Main menudo</Text>
      </View>
      <View style={styles.mid}></View>
      <View style={styles.bottom}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    flex: 1,
    textTransform: 'capitalize',
    fontStyle: 'italic',
  },

  header: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontStyle: 'italic',
  },

  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#131514',
    borderTopColor: '#214E34',
    borderTopWidth: 40,
    padding: 20,
  },

  top: {
    flex: 0.32,
    backgroundColor: '#282828',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  mid: {
    flex: 0.32,
    backgroundColor: '#282828',
    borderColor: '#364156',
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },

  bottom: {
    flex: 0.32,
    backgroundColor: '#282828',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: '#364156',
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },

});

export default Home;

import React, {useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';

const Main = () => { // Page de navigation entre Settings.js et Informations.js

  const [mapRegion, setMapRegion] = useState({
    latitude: 45.777222,
    longitude: 3.087025,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const [casaMarker, setCasaMarker] = useState({
    latitude: 45.77530786164406,
    longitude: 3.0787410539556155,
  })

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={mapRegion}>
        <Marker coordinate={casaMarker} icon={{uri: '../assets/pinPoint.png'}}><Text style={{color: '#F00'}}>Casaaa</Text></Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Main;
import React, {useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import * as Location from 'expo-location'

const Main = () => { // Page de navigation entre Settings.js et Informations.js
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg("L'accès à la localisation a été refusé");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'En attente';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
                initialRegion={mapRegion} 
                showsPointsOfInterest = {false}
                onRegionChange = {setMapRegion}>
        
        { mapRegion.latitudeDelta < 0.2 && mapRegion.longitudeDelta < 0.2?
        <Marker coordinate={casaMarker} image={require('../assets/pinpoint_.png')}>
          <TouchableOpacity onPress={{}}>
            <Text style={{color: '#F00'}}>Casaaa</Text>
          </TouchableOpacity>
        </Marker> : <View></View>}
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

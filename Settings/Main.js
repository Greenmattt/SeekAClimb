import React, {useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location'

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

  const [apiRes, setApiRes] = useState([]);
  const [estCharge, setEstCharge] = useState(false);
  const [estApiError, setEstApiError] = useState(false);
  const [liste_marqueurs, setLM] = useState([]);

  const markerFetch = async () => {
    setEstCharge(false);
    setLM([]);
    try { // là c'est si tout va bien
      let response = await fetch('http://91.164.5.221:50000/Marker?posLat='+String(mapRegion.latitude)+'&posLong='+String(mapRegion.longitude)+
                                 '&dLat='+String(mapRegion.latitudeDelta)+"&dLong="+String(mapRegion.longitudeDelta), {
        method:'GET',
      });
      let json = await response.json();
      console.log(String(json));
      setApiRes(json); // String() pour pouvoir l'afficher correctement (donc c'est temporaire)
    } 
    catch (error) { // là c'est si on a un pb
      console.error(error);
      setApiRes("<Pas de réponse de l'API>");
    }
    finally { // là c'est une fois qu'on a vérifié qu'il n'y a pas d'erreur et que tout est fini


      Object.keys(apiRes).forEach(function (key) {
          liste_marqueurs.push(
            <Marker coordinate={{latitude:apiRes[key][0], longitude:apiRes[key][1]}} key={key} image={require('../assets/pinpoint_.png')}>
              <Text style={{color:"#f00"}}>{key}</Text>
            </Marker>
          ); 
        }); 

        setEstCharge(true);
        setEstApiError(false);
    }
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
                initialRegion={mapRegion} 
                showsPointsOfInterest = {false}
                onRegionChange = {setMapRegion}
                onRegionChangeComplete={markerFetch}>
        
        { mapRegion.latitudeDelta < 0.2 && mapRegion.longitudeDelta < 0.2?
          estCharge ? <View>{liste_marqueurs}</View>: <View></View> : <View></View>}
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

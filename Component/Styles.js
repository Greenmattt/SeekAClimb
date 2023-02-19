import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const darkStyles = StyleSheet.create({
  accountBox: {
    flex: 1,
    backgroundColor: '#282828',
    margin: 7,
    borderColor: '#364156',
    borderWidth: 1,
    borderRadius: 5,
    margin: 7,
  },

  backIcon: {
    width: '10%',
    height: '100%',
    resizeMode: 'center',
    tintColor:'#ffffff',
  },

  bottom: {
    flex: 20,
    backgroundColor: '#282828',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: '#364156',
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  button: {
    width: '100%',
    height: '100%',
    backgroundColor: '#282828',
    borderRadius: 5,
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: '#131514',
  },

  goBackBox: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    borderColor: '#364156',
    borderWidth: 1,
    borderRadius: 5,
    margin: 7,
    marginBottom: 3.5,
  },

  goBackButton: {
    width: '100%',
    height: '100%',
    backgroundColor: '#282828',
    borderRadius: 5,
  },
  
  header: {
    flex: 0.07,
    backgroundColor: '#214E34',
    justifyContent: 'center',
  },

  headerText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
  },

  homeBox: {
    flex: 1,
    backgroundColor: '#282828',
    margin: 5,
    borderWidth: 1,
    borderColor: '#364156',
    borderRadius: 5,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  homeMainBox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#131514'
  },

  icon: {
    width: 30,
    height: 20,
    resizeMode: 'contain',
    tintColor: '#ffffff'
  },

  informationsBox: {
    flex: 15,
    backgroundColor: '#282828',
    borderColor: '#364156',
    borderWidth: 1,
    borderRadius: 5,
    margin: 7,
    marginTop: 3.5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  
  infoSettingsBox: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    borderColor: '#364156',
    borderWidth: 1,
    borderRadius: 5,
    margin: 7,
    marginTop: 3.5,
    justifyContent: 'center',
  },
  
  infoSettingsButton: {
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#282828',
    borderRadius: 5,
  },

  input: {
    height: '10%',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#131514',
    color: '#F7FFFB',
    borderRadius: 5,
    width: '95%',
  },

  mid: {
    flex: 20,
    backgroundColor: '#282828',
    borderColor: '#364156',
    borderWidth: 1,
    borderRadius: 5,
  },

  settingsBox: {
    flex: 10,
    backgroundColor: '#282828',
    borderColor: '#364156',
    borderWidth: 1,
    borderRadius: 5,
    margin: 7,
    marginBottom: 3.5,
    alignItems: 'center',
  },
  
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  
  textTitre: {
    color: 'white',
    textAlign: 'center',
    flex: 1,
    textTransformations: 'capitalize',
    textAlignVertical: 'center',
    fontStyle: 'italic',
  },

  top: {
    flex: 20,
    backgroundColor: '#282828',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  routeOptions: {
    flex: 40,
    justifyContent: 'space-between',
    backgroundColor: '#131514',
  },

  routeReponse: {
    flex: 60,
    justifyContent: 'space-between',
    backgroundColor: '#131514',
  },

  routeBoutonChercherTouchableOpacity: {
    width: '90%',
    height: '90%',
    backgroundColor: '#364156',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 5,
  },

  routeReponseBouton: {
    width: '40%',
    height: '40%',
    backgroundColor: '#364156',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 5,
  },
});

const lightStyles = StyleSheet.create({
  accountBox: {
    flex: 2,
    backgroundColor: '#cdcdcd',
    marginHorizontal: 7,
    marginVertical: 7,
    borderColor: '#364156',
    borderWidth: 1,
    borderRadius: 5,
  },

  backIcon: {
    width: '10%',
    height: '100%',
    resizeMode: 'center',
    tintColor:'#000000',
  },

  bottom: {
    flex: 20,
    backgroundColor: '#CDCDCD',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: '#364156',
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  button: {
    width: '100%',
    height: '100%',
    backgroundColor: '#cdcdcd',
    borderRadius: 5,
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: '#F7FFFB',
  },

  goBackBox: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: '#364156',
    borderWidth: 1,
    borderRadius: 5,
    margin: 7,
    marginBottom: 3.5,
  },

  goBackButton: {
    width: '100%',
    height: '100%',
    backgroundColor: '#CDCDCD',
    borderRadius: 5,
  },

  header: {
    flex: 0.07,
    backgroundColor: '#214E34',
    justifyContent: 'center',
  },

  headerText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    fontStyle: 'italic',
  },

  homeBox: {
    flex: 1,
    backgroundColor: '#CDCDCD',
    margin: 5,
    borderWidth: 1,
    borderColor: '#364156',
    borderRadius: 5,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  homeMainBox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f7fffb'
  },

  icon: {
    width: 30,
    height: 20,
    resizeMode: 'contain',
    tintColor:'#000000',
  },

  informationsBox: {
    flex: 15,
    backgroundColor: '#CDCDCD',
    borderColor: '#364156',
    borderWidth: 1,
    borderRadius: 5,
    margin: 7,
    marginTop: 3.5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  
  infoSettingsBox: {
    flex: 1,
    backgroundColor: '#f7fffb',
    borderColor: '#364156',
    borderWidth: 1,
    borderRadius: 5,
    margin: 7,
    marginTop: 3.5,
    justifyContent: 'center',
  },
  
  infoSettingsButton: {
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#CDCDCD',
    borderRadius: 5,
  },

  input: {
    height: '10%',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#F7FFFB',
    color: '#F7FFFB',
    borderRadius: 5,
    width: '95%',
  },

  mid: {
    flex: 20,
    backgroundColor: '#CDCDCD',
    borderColor: '#364156',
    borderWidth: 1,
    borderRadius: 5,
  },

  settingsBox: {
    flex: 10,
    backgroundColor: '#CDCDCD',
    borderColor: '#364156',
    borderWidth: 1,
    borderRadius: 5,
    margin: 7,
    marginBottom: 3.5,
    alignItems: 'center',
  },
  
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
  },
  
  textTitre: {
    color: 'black',
    textAlign: 'center',
    flex: 1,
    textTransformations: 'capitalize',
    textAlignVertical: 'center',
    fontStyle: 'italic',
  },

  top: {
    flex: 20,
    backgroundColor: '#CDCDCD',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  routeOptions: {
    flex: 40,
    justifyContent: 'space-between',
    backgroundColor: '#F7FFFB',
  },

  routeReponse: {
    flex: 60,
    justifyContent: 'space-between',
    backgroundColor: '#F7FFFB',
  },

  routeBoutonChercherTouchableOpacity: {
    width: '90%',
    height: '90%',
    backgroundColor: '#364156',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 5,
  },

  routeReponseBouton: {
    width: '40%',
    height: '40%',
    backgroundColor: '#364156',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 5,
  },
  
});

const style = async () => {
  
  var estClair = true;

  try {
    const val =  await AsyncStorage.getItem('@theme');
    if (val != null) {
      estClair = await JSON.parse(val);
    }
    else {
      console.warn('valeur lue dans style = null')
    }
  } catch(e) {
    console.warn(e)
    }

  return estClair ? lightStyles : darkStyles;
}

export default style;
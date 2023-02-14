import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const theme = async () => {
  try {
    return await AsyncStorage.getItem('@themeState')
  } catch(e) {
    // read error
    }
}

let styles;

const darkStyles = StyleSheet.create({
  backIcon: {
    width: '10%',
    height: '100%',
    resizeMode: 'center',
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
    width: '90%',
    height: '90%',
    backgroundColor: '#282828',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 5,
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

  icon: {
    width: 30,
    height: 20,
    resizeMode: 'contain',
  },

  informationsBox: {
    flex: 15,
    backgroundColor: '#282828',
    borderColor: '#364156',
    borderWidth: 1,
    borderRadius: 5,
    margin: 7,
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
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'black',
    color: 'black',
    borderRadius: 10,
    width: '100%',
  },

  inputView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
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
  
  container2: {
    padding: 5,
    flex: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#282828',
    borderRadius: 5,
  },
});

const lightStyles = StyleSheet.create({
  backIcon: {
    width: '10%',
    height: '100%',
    resizeMode: 'center',
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
    width: '90%',
    height: '90%',
    backgroundColor: '#CDCDCD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 5,
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

  icon: {
    width: 30,
    height: 20,
    resizeMode: 'contain',
  },

  informationsBox: {
    flex: 15,
    backgroundColor: '#CDCDCD',
    borderColor: '#364156',
    borderWidth: 1,
    borderRadius: 5,
    margin: 7,
    marginTop: 3.5,
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
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    color: 'white',
    borderRadius: 10,
    width: '100%',
  },

  inputView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
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
  
  container2: {
    padding: 5,
    flex: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#CDCDCD',
    borderRadius: 5,
  },
});

if (theme == 'sombre'){
  styles = darkStyles;
} else {
  styles = lightStyles;
}

export default styles;

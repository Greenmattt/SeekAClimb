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

  boutonTriIcon: {
    width:40,
    height:40,
    tintColor:'#ccc'
  },

  clickIcon: {
    marginLeft:60,
    width:50,
    height:50,
    tintColor:"#FFFFFF",
  },

  container: {
    flex: 1,
    backgroundColor: '#131514',
  },

  containerTextActus: {
    flex:1, 
    position:'absolute', 
    left:'2%', 
    top:'60%', 
    alignItems:'flex-start'
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
    flex: 0.06,
    backgroundColor: '#214E34',
    justifyContent: 'center',
  },

  headerText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
  },

  homeBigBox: {
    flex: 1,
    backgroundColor: '#131514',
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

  homeQuart: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#131514'
  },

  icon: {
    width: 23,
    height: 23,
    resizeMode: 'cover',
    tintColor: '#dedede'
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
    flex: 2,
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

  map: {
    width: '100%',
    height: '100%',
  },

  mid: {
    flex: 20,
    backgroundColor: '#282828',
    borderColor: '#364156',
    borderWidth: 1,
    borderRadius: 5,
  },

  photoButton: {
    backgroundColor:"#ffffffdd", 
    height:70, 
    width:70, 
    borderRadius:35, 
    position:'absolute', 
    left :'42%', 
    top:'85%'
  },

  photoConfMain: {
    flex:10,
    backgroundColor: '#131514'
  },

  photoConfPic: {
    flex:5,
    alignItems:'center',
    marginBottom: '5%',
    marginTop: '5%',
    backgroundColor: '#131514'
  },

  photoConfButton: {
    flex:0.6,
    flexDirection:"row",
    marginBottom: '5%', 
    backgroundColor:'#131514'
  },

  photoVerrifButton: {
    backgroundColor: '#364156',
    flex:1,
    borderRadius:5,
    borderColor:"#7282B2",
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    margin: '1%'
  },

  scanButton: {
    backgroundColor:"#04899BBB", 
    height:60, 
    width:60, 
    borderRadius:20, 
    alignItems: 'center', 
    justifyContent:'center',
    borderColor:"#F7FFFB",
    },

  scanIcon: {
    width:40,
    height:40,
    tintColor:"#F7FFFBEC",
  },

  settingsBox: {
    flex: 10,
    backgroundColor: '#282828',
    borderColor: '#364156',
    borderWidth: 1,
    borderRadius: 5,
    margin: 7,
    marginBottom: 3.5,
  },

  settingsLanguageBox: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#364156',
    borderTopWidth: 0.5,
  },

  settingsThemeBox: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    borderColor: '#364156',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  sneakyBackButton:{
    backgroundColor:"#04899B00", 
    height: 60, 
    width: 60, 
    borderRadius: 20,
    borderWidth : 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    borderColor: "#F7FFFB",
  },

  tabBarIconStyle: {
    width: '40%',
    height: '35%'
  },

  tabBarStyle: {
    height: '9%',
    backgroundColor: '#364156'
  },

  tabBarLabelStyle: {
    color: 'white',
  },
  
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },

  textNomBloc: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold'
  },

  textContent: {
    color: 'white',
    fontSize: 15,
    fontStyle: 'italic',
    textAlign: 'justify',

  },

  textPlus: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
  },

  textActus: {
    color: '#fff', 
    fontWeight: 'bold', 
    textDecorationLine: 'underline', 
    fontSize: 24, 
    flexWrap: 'wrap'
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
    flex: 4,
    justifyContent: 'space-between',
    backgroundColor: '#282828',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#364156',
    margin: 5,
    padding: 5,
  },
  
  routeSliderRond: {
    width: 30,
    height: 20,
    resizeMode: 'contain',
    tintColor:'#333',
  },

  routeReponse: {
    flex: 6,
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

  routeRechercheCollapseButton: {
    backgroundColor:"#182028", 
    height:60, 
    width:120, 
    borderBottomRightRadius:20, 
    borderBottomLeftRadius:20, 
    alignItems: 'center', 
    justifyContent:'center',
    borderColor:"#F7FFFB"
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

  routeSlider: {
    flex: 2,
    flexDirection:'row',
    justifyContent: "space-evenly",
    alignItems:'center',
  },
});

const lightStyles = StyleSheet.create({
  accountBox: {
    flex: 2,
    backgroundColor: '#ebeff0',
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
    backgroundColor: '#ebeff0',
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
    backgroundColor: '#ebeff0',
    borderRadius: 5,
    justifyContent: 'center',
  },

  boutonTriIcon: {
    width:50,
    height:50,
    tintColor:'#222'
  },

  clickIcon: {
    marginLeft:60,
    width:50,
    height:50,
    tintColor:"#000000"
  },

  container: {
    flex: 1,
    backgroundColor: '#F7FFFB',
  },

  containerTextActus: {
    flex:1, 
    position:'absolute', 
    left:'2%', 
    top:'60%', 
    alignItems:'flex-start'
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
    backgroundColor: '#ebeff0',
    borderRadius: 5,
  },

  header: {
    flex: 0.06,
    backgroundColor: '#214E34',
    justifyContent: 'center',
  },

  headerText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
  },

  homeBigBox: {
    flex: 1,
    backgroundColor: '#f7fffb',
  },

  homeBox: {
    flex: 1,
    backgroundColor: '#ebeff0',
    margin: 5,
    borderRadius: 5,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  homeQuart: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f7fffb'
  },

  icon: {
    width: 23,
    height: 23,
    resizeMode: 'cover',
    tintColor:'#ccc',
  },

  informationsBox: {
    flex: 15,
    backgroundColor: '#ebeff0',
    borderColor: '#364156',
    borderWidth: 1,
    borderRadius: 5,
    margin: 7,
    marginTop: 3.5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  
  infoSettingsBox: {
    flex: 2,
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
    backgroundColor: '#ebeff0',
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

  map: {
    width: '100%',
    height: '100%',
  },

  mid: {
    flex: 20,
    backgroundColor: '#ebeff0',
    borderColor: '#364156',
    borderWidth: 1,
    borderRadius: 5,
  },

  photoButton: {
    backgroundColor:"#ffffffdd", 
    height:70, 
    width:70, 
    borderRadius:35, 
    position:'absolute', 
    left :'42%', 
    top:'85%'
  },

  photoConfMain: {
    flex:10,
    backgroundColor: '#f7fffb'
  },

  photoConfPic: {
    flex:5,
    alignItems:'center',
    marginBottom: '5%',
    marginTop: '5%',
    backgroundColor: '#f7fffb'
  },

  photoConfButton: {
    flex:0.6,
    flexDirection:"row",
    marginBottom: '5%', 
    backgroundColor:'#f7fffb'
  },

  photoVerrifButton: {
    backgroundColor: '#ebeff0',
    flex:1,
    borderRadius:5,
    borderColor:"#7282B2",
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    margin: '1%'
  },
  
  scanIcon: {
    width:40,
    height:40,
    tintColor:"#FFFFFF"
  },

  scanButton: {
    backgroundColor:"#04899BDE", 
    height:60, 
    width:60, 
    borderRadius:20, 
    alignItems: 'center', 
    justifyContent:'center'
  },

  settingsBox: {
    flex: 10,
    backgroundColor: '#ebeff0',
    borderColor: '#364156',
    borderWidth: 1,
    borderRadius: 5,
    margin: 7,
    marginBottom: 3.5,
  },

  settingsLanguageBox: {
    flex: 1,
    backgroundColor: '#ebeff0',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#364156',
    borderTopWidth: 0.5,
  },

  settingsThemeBox: {
    flex: 1,
    backgroundColor: '#ebeff0',
    borderColor: '#364156',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

    sneakyBackButton:{
    backgroundColor:"#04899B00", 
    height: 60, 
    width: 60, 
    borderRadius: 20,
    borderWidth : 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    borderColor: "#F7FFFB",
  },

  tabBarIconStyle: {
    width: '40%',
    height: '35%',
    tintColor: "#fff",
  },

  tabBarStyle: {
    height: '9%',
    backgroundColor: '#364156'
  },

  tabBarLabelStyle: {
    color: 'white',
  },
  
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
  },

  textNomBloc: {
    color: 'black',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold'
  },
  
  textPlus: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
  },

  textActus: {
    color: '#fff', 
    fontWeight: 'bold', 
    textDecorationLine: 'underline', 
    fontSize: 24, 
    flexWrap: 'wrap'
  },
  
  textContent: {
    color: 'black',
    fontSize: 15,
    fontStyle: 'italic',
    textAlign: 'justify',

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
    backgroundColor: '#ebeff0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  routeOptions: {
    flex: 4,
    justifyContent: 'space-between',
    backgroundColor: '#ebeff0',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#364156',
    margin: 5,
    padding: 5,
  },
  
  routeSliderRond: {
    width: 30,
    height: 20,
    resizeMode: 'contain',
    tintColor:'#333',
  },

  routeReponse: {
    flex: 6,
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

  routeRechercheCollapseButton: {
    backgroundColor:"#182028", 
    height:60, 
    width:120, 
    borderBottomRightRadius:20, 
    borderBottomLeftRadius:20, 
    alignItems: 'center', 
    justifyContent:'center',
    borderColor:"#F7FFFB"
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
  
  routeSlider: {
    flex: 2,
    flexDirection:'row',
    justifyContent: "space-evenly",
    alignItems:'center',
  },
});

const style = async () => {
  
  var estClair = false;

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

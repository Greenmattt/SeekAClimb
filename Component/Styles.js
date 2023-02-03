import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    justifyContent: 'space-between',
    backgroundColor: '#131514',
  },

  header: {
    flex: .07,
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
    height: 30,
    resizeMode: 'contain',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "black",
    color: "black",
    borderRadius:10,
    width:'100%',
  },

  inputView: {
    flex:1, 
    justifyContent:'center', 
    alignItems:'center',
    marginLeft:10,
    marginRight:10,
  },
  
  mid: {
    flex: 20,
    backgroundColor: '#282828',
    borderColor: '#364156',
    borderWidth: 1,
    borderRadius: 5,
  },

  text : {
    color : 'white',
    textAlign:'center',
  },

  textTitre: {
    color: 'white',
    textAlign: 'center',
    flex: 1,
    textTransform: 'capitalize',
    fontStyle: 'italic',
  },

  top: {
    flex: 20,
    backgroundColor: '#282828',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  
});

export default styles;

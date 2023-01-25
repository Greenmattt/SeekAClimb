const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor : '#131514',
  },
  
  text: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    flex: 1,
    textTransform: 'capitalize',
    fontStyle: 'italic',
  },

  header:{
    flex: 1,
    backgroundColor: '#214E34'
  },

  headText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
  },

  container: {
    flex: 15,
    justifyContent: 'space-between',
    backgroundColor: '#131514',
  },

  top: {
    flex: 20,
    backgroundColor: '#282828',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  mid: {
    flex: 20,
    backgroundColor: '#282828',
    borderColor: '#364156',
    borderWidth: 1,
    borderRadius: 5,
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
});

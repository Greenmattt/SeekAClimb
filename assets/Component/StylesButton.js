var styleBoutton = function(appuye, clair= false) {
  return {
    button: {
      backgroundColor: appuye ? "#023276" : clair ? "#CDCDCD" : "#131514",
      height: "100%",
      width: "20%",
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5
    },
    text: {
      color: clair ? "#000" : "#fff"
    }
  }
};

export default styleBoutton;
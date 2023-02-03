var styleBoutton = function(appuye, clair= false) {
    return {
      button: {
        backgroundColor: appuye ? "#ba513a" : clair ? "#ffffff" : "#000000",
        height: "100%",
        width: "20%",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        color: clair ? "#000" : "#fff"
      }
    }
  };
  
  export default styleBoutton;
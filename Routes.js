import React, { useState } from 'react';
import { Text, View, TextInput, Switch, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
// commandes à faire :  npm install react-native-dropdown-picker
//                      npm install --save @ptomasroos/react-native-multi-slider

const Routes = () => {
  // const [lieu, onChangeLieu] = useState('');
  // const [type, onChangeType] = useState('');
  const [diff, onChangeDiff] = useState('');

  const [estBlaise, onChangeEstBlaise] = useState(false);
  const switchBlaise = () => onChangeEstBlaise(a => !a)

  const [estCustom, onChangeEstCustom] = useState(false);
  const toggleSwitch = () => onChangeEstCustom(a => !a);

  const [typeID, onChangeTypeID] = useState(1);
  const changeType = (value) => onChangeTypeID(a => value)


  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(['Blaise-pascal', 'Casamur']);
  const [items, setItems] = useState([
    {label: 'Blaise-Pascal', value: 'Blaise-Pascal'},
    {label: 'Casamur', value: 'Casamur', },
  ]);

  enableScroll = () => this.setState({ scrollEnabled: true });
  disableScroll = () => this.setState({ scrollEnabled: false });
 
  const [
    nonCollidingMultiSliderValue,
    setNonCollidingMultiSliderValue,
  ] = React.useState([0, 100]);
  nonCollidingMultiSliderValuesChange = values =>
    setNonCollidingMultiSliderValue(values);

  return (
    <View style={styleMain().fond}>
      {/* Un petit view pour laisser de l'espace en haut */}
      <View style={styleMain().espace}></View>

      {/* Je mets absolument tout dans des View pour bien pouvoir faire des compartiments du screens équitables */}

      {/* <View style = {styleMain().inputHaut}>
        <TextInput style= {styleMain(false).input} 
                   placeholder="Lieu"
                   onChangeText={onChangeLieu}
                   value = {lieu}/>
      </View> */}

       <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}

              theme="DARK"
              multiple={true}
              mode="BADGE"
              badgeDotColors={["#3a75b1", "#3ab175"]}
              style= {{margin: 1}}/>



      {/* <View style = {styleMain().inputCentre}>
        <TextInput style= {styleMain(false).input} 
                   placeholder="Type de route"
                   onChangeText={onChangeType}
                   value = {type}/>
      </View> */}

      <View style = {{flex: 2, flexDirection:'row', justifyContent: "space-evenly", alignItems:'center'}}>

        <TouchableOpacity style= {styleBoutton(typeID == 1).button} onPress = {() => changeType(1)}>
          <Text style={styleBoutton(typeID == 1).text}>Voie</Text>
        </TouchableOpacity>

        <TouchableOpacity style= {styleBoutton(typeID == 2).button} onPress = {() => changeType(2)}>
          <Text style={styleBoutton(typeID == 1).text}>Bloc</Text>
        </TouchableOpacity>

        <TouchableOpacity style= {styleBoutton(typeID == 3).button} onPress = {() => changeType(3)}>
          <Text style={styleBoutton(typeID == 1).text}>Traversée</Text>
        </TouchableOpacity>

      </View>      

      <View style = {{flex: 2, flexDirection:'row', justifyContent: "space-evenly", alignItems:'center'}}>
        <Text style={{color: '#3a75b1'}}>Officiel</Text>

        <Switch trackColor={{false: '#3a75b1', true: "#3ab175"}}
                thumbColor = {estCustom ? "#fff" : "#fff"}
                onValueChange = {toggleSwitch}
                value = {estCustom}/>

        <Text style={{color: "#3ab175"}}>Custom</Text>
      </View>

      {/* <View style = {styleMain().inputBas}>
        <TextInput style= {styleMain(false).input} 
                   placeholder="Difficulté"
                   onChangeText={onChangeDiff}
                   value = {diff}/>
      </View> */}
      
      <View style = {{flex: 2, flexDirection:'row', justifyContent: "space-evenly", alignItems:'center'}}>
        <MultiSlider
          values={[
            nonCollidingMultiSliderValue[0],
            nonCollidingMultiSliderValue[1],
          ]}
          sliderLength={280}
          onValuesChange={nonCollidingMultiSliderValuesChange}
          min={0}
          max={100}
          step={1}
          allowOverlap={false}
          snapped
          minMarkerOverlapDistance={4}

        />
      </View>


      <View style ={styleMain().canvas}>
        <Text style={styleMain().text}>Page des voies</Text>
      </View>
    </View>
  );
}

var styleMain = function(clair = false) {
  var couleurF = clair ? "#FFFFFF" : "#000000";
  var couleurT = clair ? "#000000" : "#FFFFFF";

  // Pour l'instant les couleurs donnent à peu près envie de vomir donc c'est à changer
  return {
    fond: {
      flex: 1,
      backgroundColor: couleurF, 
      flexDirection : 'column',
      justifyContent: 'space-evenly',
    },
    espace: {
      flex: 2,
    },
    textInfoView: {
      flex: 1,
    },
    // inputHaut: {
    //   flex: 3,
    //   backgroundColor: "#cccccc",
    //   justifyContent: 'center',
    //   borderWidth: 2,
    //   borderColor: "#aaaaaa",
    //   borderTopLeftRadius: 5,
    //   borderTopRightRadius: 5,
    //   margin: 3
    // },
    // inputCentre: {
    //   flex: 2,
    //   backgroundColor: "#cccccc",
    //   justifyContent: 'center',
    //   borderWidth: 2,
    //   borderColor: "#aaaaaa",
    //   margin: 3,
    // },
    // inputBas: {
    //   flex: 2,
    //   backgroundColor: "#cccccc",
    //   justifyContent: 'center',
    //   borderWidth: 2,
    //   borderColor: "#aaaaaa",
    //   borderBottomLeftRadius: 5,
    //   borderBottomRightRadius: 5,
    //   margin: 3
    // },
    canvas: {
      flex: 24,
      backgroundColor: couleurF, 
      alignItems: 'stretch',
      flexDirection : 'column',
      justifyContent: 'flex-start',
    },
    text: {
      color: couleurT,
    },
    input: {
      backgroundColor: couleurT,
      marginLeft: 10,
      marginRight: 10,
      borderWidth: 1,
      borderColor: "#000000"
    },
  }
};

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

}

export default Routes;
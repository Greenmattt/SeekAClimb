import { View, TouchableOpacity, Image, Text } from 'react-native';

import styleBoutton from './StylesButton';

const EnumButtons = props => {

  var buttonsListArr = []

    for(let i = 0 ; i < props.text.length; i++) {
      buttonsListArr.push(
        <TouchableOpacity key = {i} style= {styleBoutton(props.typeID == i).button} onPress = {() => props.changeType(i)}>
          <Text style={styleBoutton(props.typeID == i).text}>{props.text[i]}</Text>
        </TouchableOpacity>
      )
    }

  return (
    <View style={{flex: 2, flexDirection:'row', justifyContent: "space-around", alignItems:'center'}}>
      {buttonsListArr}
    </View>
    );
}

export default EnumButtons;
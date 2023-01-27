import { View, TextInput } from 'react-native';

import styles from './Styles';

const StrInput = props => {
  return (
    <View style = {styles.inputView}>
      <TextInput
        style={styles.input}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder= {props.placeholder}
        placeholderTextColor={styles.text.color}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
}

export default StrInput;
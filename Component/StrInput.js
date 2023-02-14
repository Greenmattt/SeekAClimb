import { TextInput } from 'react-native';

import styles from './Styles';

const StrInput = props => {
  return (
      <TextInput
        style={styles.input}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder= {props.placeholder}
        placeholderTextColor={styles.text.color}
        secureTextEntry={props.secureTextEntry}
      />
  );
}

export default StrInput;
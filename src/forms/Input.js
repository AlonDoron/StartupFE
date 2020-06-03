import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = (props) => {
  // const [output, setOutput] = useState('');

  // const regex = {
  //   email: /^([a-zA-Z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,

  //   phoneNumber: /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
  // };

  return (
    <TextInput
      keyboardType={props.inputType}
      autoCapitalize="none"
      autoCorrect={false}
      style={[{...props.style}, styles.input]}
      placeholder={props.textHolder}
      placeholderTextColor="#000"
      onEndEditing={(value) => {
        props.onSubmitInput(value);
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    textAlign: 'left',
  },
});

export default Input;

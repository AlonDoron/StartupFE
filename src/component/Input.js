import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = (props) => {
  const [output, setOutput] = useState('');

  const regex = {
    email: /^([a-zA-Z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,

    phoneNumber: /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
  };

  const checkValidation = (value) => {
    switch (props.inputType) {
      case 'default': {
        if (value == '') {
          return false;
        } else {
          return true;
        }
      }
      case 'email-address': {
        if (value != '' && value.match(regex.email)) {
          return true;
        } else {
          return false;
        }
      }
      case 'phone-pad': {
        if (value != '' && value.match(regex.phoneNumber)) {
          return true;
        } else {
          return false;
        }
      }
    }
  };

  return (
    <TextInput
      keyboardType={props.inputType}
      autoCapitalize="none"
      autoCorrect={false}
      style={[{...props.style}, styles.input]}
      placeholder={props.textHolder}
      placeholderTextColor="#000"
      onChangeText={(value) => {
        setOutput(value);
        props.onInputChange(value);
      }}
      onEndEditing={() => {
        if (checkValidation(output)) {
          // setValid(true);
          props.onSubmitInput(true);
        } else {
          // setValid(false);
          props.onSubmitInput(false);
        }
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

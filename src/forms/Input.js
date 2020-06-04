import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = (props) => {
  return (
    <TextInput
      keyboardType={props.inputType}
      autoCapitalize="none"
      autoCorrect={false}
      style={[{...props.style}, styles.input]}
      placeholder={props.textHolder}
      placeholderTextColor="#000"
      onChangeText={(value) => {
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

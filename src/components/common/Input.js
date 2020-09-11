import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, TextInput } from "react-native-paper";

const Input = (props) => {
  return (
    <View style={styles.textInput}>
      <TextInput
        name={props.name}
        keyboardType={props.keyboardType}
        value={props.value}
        label={props.label}
        mode="outlined"
        onChange={(newVal) => props.onChange(props.name, newVal)}
        required={props.required}
      />
      <Text>{props.errors}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: "80%",
    alignSelf: "center",
    paddingTop: "5%",
  },
});

export default Input;

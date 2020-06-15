import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, TextInput } from "react-native-paper";

const Input = (props) => {
  return (
    <View style={styles.textInput}>
      <TextInput
        value={props.value}
        label={props.label}
        mode="outlined"
        onChange={props.onChange}
        name={props.name}
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

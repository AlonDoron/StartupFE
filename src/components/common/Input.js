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
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
      />
      {props.isError ? (
        <Text style={{ color: "red" }}>{props.isError}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: "80%",
    alignSelf: "center",
    paddingTop: "5%",
    marginBottom: "5%",
  },
});

export default Input;

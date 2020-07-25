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
        onChangeText={props.handleChangeText}
        onBlur={props.handleonBlur}
      />
      {props.error && <Text style={{ color: "red" }}>{props.error}</Text>}
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

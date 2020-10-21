import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Input as FormInput } from "@ui-kitten/components";

const Input = (props) => {
  return (
    <Layout style={styles.container}>
      <FormInput
        name={props.name}
        keyboardType={props.keyboardType}
        value={props.value}
        label={props.label}
        caption={props.errors}
        onChangeText={props.handleChangeText}
        onBlur={props.handleBlur}
        status={(props.errors && "danger") || "basic"}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignSelf: "center",
    paddingTop: "5%",
    marginBottom: "5%",
  },
});

export default Input;

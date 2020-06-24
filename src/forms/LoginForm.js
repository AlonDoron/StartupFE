import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useForm } from "../hooks";
import { Input } from "../components/common";
import validateForm from "../forms/validateForm";

const LoginForm = (props) => {
  const handleFormSubmit = () => {
    props.submitForm(values);
  };

  const [values, errors, handleChange, handleSubmit] = useForm(
    handleFormSubmit,
    validateForm
  );

  return (
    <View>
      <Input
        name="phoneNumber"
        value={values.phoneNumber || ""}
        onChange={(name, value) => handleChange(name, value)}
        label="Phone Number"
        keyboardType="number-pad"
      />
      {errors.phoneNumber ? <Text>{errors.phoneNumber}</Text> : null}
      <Button
        mode="outlined"
        onPress={handleSubmit}
        loading={props.submitting}
        disabled={props.submitting}
      >
        Login
      </Button>
    </View>
  );
};

export default LoginForm;

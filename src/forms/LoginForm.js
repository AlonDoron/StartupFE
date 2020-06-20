import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { useForm } from "../hooks";
import { Input } from "../components/common";

const LoginForm = (props) => {
  const handleFormSubmit = () => {
    props.submitForm(values);
  };

  const [values, handleChange, handleSubmit] = useForm(handleFormSubmit);

  return (
    <View>
      <Input
        name="phoneNumber"
        value={values.phoneNumber || ""}
        onChange={(name, value) => handleChange(name, value)}
        label="Phone Number"
        keyboardType="number-pad"
      />

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

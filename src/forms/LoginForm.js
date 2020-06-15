import React from "react";
import { View, TextInput } from "react-native";
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
        value={values.phoneNumber || ""}
        onChange={handleChange}
        name="phoneNumber"
        label="Phone Number"
        required
      />
      <Button mode="outlined" onPress={handleSubmit}>
        Login
      </Button>
    </View>
  );
};

export default LoginForm;

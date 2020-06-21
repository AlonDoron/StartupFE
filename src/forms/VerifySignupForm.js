import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { useForm } from "../hooks";
import { Input } from "../components/common";

const VerifySignupForm = (props) => {
  const handleFormSubmit = () => {
    props.submitForm(values);
  };

  const [values, handleChange, handleSubmit] = useForm(handleFormSubmit);

  return (
    <View>
      <Input
        name="VerificationCode"
        value={values.VerificationCode || ""}
        onChange={(name, value) => handleChange(name, value)}
        label="Verification Code"
        keyboardType="number-pad"
      />

      <Button mode="outlined" onPress={handleSubmit}>
        Login
      </Button>
    </View>
  );
};

export default VerifySignupForm;

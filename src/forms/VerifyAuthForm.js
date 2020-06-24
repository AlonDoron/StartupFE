import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useForm } from "../hooks";
import { Input } from "../components/common";
import validateForm from "../forms/validateForm";

const VerifyAuthForm = (props) => {
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
        name="VerificationCode"
        value={values.VerificationCode || ""}
        onChange={(name, value) => handleChange(name, value)}
        label="Verification Code"
        keyboardType="number-pad"
      />
      {errors.VerificationCode ? <Text>{errors.VerificationCode}</Text> : null}
      <Button mode="outlined" onPress={handleSubmit}>
        {props.pageName}
      </Button>
    </View>
  );
};

export default VerifyAuthForm;

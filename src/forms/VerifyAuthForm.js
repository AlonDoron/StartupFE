import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { useForm } from "../hooks";
import { Input } from "../components/common";

const VerifyAuthForm = (props) => {
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

      <Button
        mode="outlined"
        onPress={handleSubmit}
        loading={props.submitting}
        disabled={props.submitting}
      >
        {props.pageName}
      </Button>
    </View>
  );
};

export default VerifyAuthForm;

import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { useForm } from "../hooks";
import { Input } from "../components/common";

const SignupForm = (props) => {
  const handleFormSubmit = () => {
    props.submitForm(values);
  };

  const [values, handleChange, handleSubmit] = useForm(handleFormSubmit);

  return (
    <View>
      <Input
        name="firstName"
        value={values.firstName || ""}
        onChange={(name, value) => handleChange(name, value)}
        label="First Name"
        keyboardType="default"
      />
      <Input
        name="lastName"
        value={values.lastName || ""}
        onChange={(name, value) => handleChange(name, value)}
        label="Last Name"
        keyboardType="default"
      />
      <Input
        name="email"
        value={values.email || ""}
        onChange={(name, value) => handleChange(name, value)}
        label="Email"
        keyboardType="email-address"
      />
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
        Signup
      </Button>
    </View>
  );
};

export default SignupForm;

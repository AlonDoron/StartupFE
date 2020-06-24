import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useForm } from "../hooks";
import { Input } from "../components/common";
import validateForm from "../forms/validateForm";

const SignupForm = (props) => {
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
        name="firstName"
        value={values.firstName || ""}
        onChange={(name, value) => handleChange(name, value)}
        label="First Name"
        keyboardType="default"
      />
      {errors.firstName ? <Text>{errors.firstName}</Text> : null}
      <Input
        name="lastName"
        value={values.lastName || ""}
        onChange={(name, value) => handleChange(name, value)}
        label="Last Name"
        keyboardType="default"
      />
      {errors.lastName ? <Text>{errors.lastName}</Text> : null}
      <Input
        name="email"
        value={values.email || ""}
        onChange={(name, value) => handleChange(name, value)}
        label="Email"
        keyboardType="email-address"
      />
      {errors.email ? <Text>{errors.email}</Text> : null}
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
        Registration
      </Button>
    </View>
  );
};

export default SignupForm;

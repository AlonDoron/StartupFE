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
        error={errors.firstName ? errors.firstName : null}
      />

      <Input
        name="lastName"
        value={values.lastName || ""}
        onChange={(name, value) => handleChange(name, value)}
        label="Last Name"
        keyboardType="default"
        error={errors.lastName ? errors.lastName : null}
      />

      <Input
        name="email"
        value={values.email || ""}
        onChange={(name, value) => handleChange(name, value)}
        label="Email"
        keyboardType="email-address"
        error={errors.email ? errors.email : null}
      />

      <Input
        name="phoneNumber"
        value={values.phoneNumber || ""}
        onChange={(name, value) => handleChange(name, value)}
        label="Phone Number"
        keyboardType="number-pad"
        error={errors.phoneNumber ? errors.phoneNumber : null}
      />

      <Button
        mode="outlined"
        onPress={(e) => handleSubmit(e, "registraion")}
        loading={props.submitting}
        disabled={props.submitting}
      >
        Registration
      </Button>
    </View>
  );
};

export default SignupForm;

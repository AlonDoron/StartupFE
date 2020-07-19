import React, { useState } from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { Input } from "./components/common";
import { useForm } from "./hooks";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required().email(),
  phoneNumber: yup.string().required().min(10),
});

const ExmpleScreen = (props) => {
  const [error, setError] = useState("");
  const handleFormSubmit = () => {
    schema
      .validate({ ...values })
      .then((valid) => {
        console.log(valid);
      })
      .catch((errors) => {
        setError(errors);
      });
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

      <Text>{error}</Text>

      <Button mode="outlined" onPress={handleSubmit}>
        Registration
      </Button>
    </View>
  );
};

export default ExmpleScreen;

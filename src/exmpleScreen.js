import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { Input } from "./components/common";
// import useForm from "react-hook-form";

const ExmpleScreen = () => {
  //   const { register, handeSubmit, errors } = useForm();
  return (
    <View>
      <Input
        name="firstName"
        label="First Name"
        keyboardType="default"
        // ref={register}
      />
      <Input
        name="lastName"
        label="Last Name"
        keyboardType="default"
        // ref={register}
      />
      <Input
        name="email"
        label="Email"
        keyboardType="email-address"
        // ref={register}
      />
      <Input
        name="phoneNumber"
        label="Phone Number"
        keyboardType="number-pad"
        // ref={register}
      />

      <Button mode="outlined">Registration</Button>
    </View>
  );
};

export default ExmpleScreen;

import React, { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { Input } from "./components/common";
import { Formik } from "formik";
import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const exmpleSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required().email(),
  phoneNumber: yup
    .string()
    .required()
    .matches(phoneRegExp, "Phone number is not valid"),
});

const ExmpleScreen = (props) => {
  return (
    <View>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
        }}
        validationSchema={exmpleSchema}
        onSubmit={(values) => console.log(values)}
      >
        {(props) => (
          <View>
            <Input
              name="First Name"
              value={props.values.firstName}
              onChangeText={props.handleChange("firstName")}
              label="First Name"
              keyboardType="default"
              isError={props.touched.firstName && props.errors.firstName}
            />
            {console.log(props.errors.firstName)}
            <Input
              name="Last Name"
              value={props.values.lastName}
              onChangeText={props.handleChange("lastName")}
              label="Last Name"
              keyboardType="default"
              isError={props.touched.lastName && props.errors.lastName}
            />
            <Input
              name="email"
              value={props.values.email}
              onChangeText={props.handleChange("email")}
              label="Email"
              keyboardType="email-address"
              isError={props.touched.email && props.errors.email}
            />
            <Input
              name="phone Number"
              value={props.values.phoneNumber}
              onChangeText={props.handleChange("phoneNumber")}
              label="Phone Number"
              keyboardType="number-pad"
              isError={props.touched.phoneNumber && props.errors.phoneNumber}
            />

            <Button mode="outlined" onPress={props.handleSubmit}>
              Registration
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ExmpleScreen;

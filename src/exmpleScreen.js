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
  const [error, setError] = useState("");

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
              name="firstName"
              value={props.values.firstName}
              onChangeText={props.handleChange("firstName")}
              label="First Name"
              keyboardType="default"
            />
            <Input
              name="lastName"
              value={props.values.lastName}
              onChangeText={props.handleChange("lastName")}
              label="Last Name"
              keyboardType="default"
            />
            <Input
              name="email"
              value={props.values.email}
              onChangeText={props.handleChange("email")}
              label="Email"
              keyboardType="email-address"
            />
            <Input
              name="phoneNumber"
              value={props.values.phoneNumber}
              onChangeText={props.handleChange("phoneNumber")}
              label="Phone Number"
              keyboardType="number-pad"
            />

            <Text>{error}</Text>

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

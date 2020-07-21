import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { Input } from "../components/common";
import { Formik } from "formik";
import * as yup from "yup";
import errorMessages from "../../errorMessages";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const registraionSchema = yup.object({
  firstName: yup.string().required(errorMessages("First Name")),
  lastName: yup.string().required(errorMessages("Last Name")),
  email: yup
    .string()
    .required(errorMessages("Email"))
    .email(errorMessages("Email", "Invalid")),
  phoneNumber: yup
    .string()
    .required(errorMessages("Phone Number"))
    .matches(phoneRegExp, errorMessages("Phone Number", "Invalid")),
});

const RegistrationForm = (props) => {
  return (
    <View>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
        }}
        validationSchema={registraionSchema}
        onSubmit={(values) => props.submitForm(values)}
      >
        {(props) => (
          <View>
            <Input
              name="First Name"
              value={props.values.firstName}
              onChangeText={props.handleChange("firstName")}
              onBlur={props.handleBlur("firstName")}
              label="First Name"
              keyboardType="default"
              isError={props.touched.firstName && props.errors.firstName}
            />

            <Input
              name="Last Name"
              value={props.values.lastName}
              onChangeText={props.handleChange("lastName")}
              onBlur={props.handleBlur("lastName")}
              label="Last Name"
              keyboardType="default"
              isError={props.touched.lastName && props.errors.lastName}
            />
            <Input
              name="email"
              value={props.values.email}
              onChangeText={props.handleChange("email")}
              onBlur={props.handleBlur("email")}
              label="Email"
              keyboardType="email-address"
              isError={props.touched.email && props.errors.email}
            />
            <Input
              name="phone Number"
              value={props.values.phoneNumber}
              onChangeText={props.handleChange("phoneNumber")}
              onBlur={props.handleBlur("phoneNumber")}
              label="Phone Number"
              keyboardType="number-pad"
              isError={props.touched.phoneNumber && props.errors.phoneNumber}
            />

            <Button
              mode="outlined"
              onPress={props.handleSubmit}
              loading={props.submitting}
              disabled={props.submitting}
            >
              Registraion
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default RegistrationForm;

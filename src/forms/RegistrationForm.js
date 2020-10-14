import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { Input } from "../components/common";
import { Formik } from "formik";
import { registrationSchema } from "../validations";
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
        validationSchema={registrationSchema}
        onSubmit={(values) => props.submitForm(values)}
      >
        {(props) => (
          <View>
            <Input
              name="First Name"
              value={props.values.firstName}
              handleChangeText={props.handleChange("firstName")}
              handleBlur={props.handleBlur("firstName")}
              label="First Name"
              keyboardType="default"
              errors={props.touched.firstName && props.errors.firstName}
            />

            <Input
              name="Last Name"
              value={props.values.lastName}
              handleChangeText={props.handleChange("lastName")}
              handleBlur={props.handleBlur("lastName")}
              label="Last Name"
              keyboardType="default"
              errors={props.touched.lastName && props.errors.lastName}
            />
            <Input
              name="email"
              value={props.values.email}
              handleChangeText={props.handleChange("email")}
              handleBlur={props.handleBlur("email")}
              label="Email"
              keyboardType="email-address"
              errors={props.touched.email && props.errors.email}
            />
            <Input
              name="phone Number"
              value={props.values.phoneNumber}
              handleChangeText={props.handleChange("phoneNumber")}
              handleBlur={props.handleBlur("phoneNumber")}
              label="Phone Number"
              keyboardType="number-pad"
              errors={props.touched.phoneNumber && props.errors.phoneNumber}
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
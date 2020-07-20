import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { Input } from "../components/common";
import { Formik } from "formik";
import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const loginSchema = yup.object({
  phoneNumber: yup
    .string()
    .required()
    .matches(phoneRegExp, "Phone number is not valid"),
});

const LoginForm = (props) => {
  return (
    <View>
      <Formik
        initialValues={{
          phoneNumber: "",
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => props.submitForm(values)}
      >
        {(props) => (
          <View>
            <Input
              name="phone Number"
              value={props.values.phoneNumber}
              onChangeText={props.handleChange("phoneNumber")}
              label="Phone Number"
              keyboardType="number-pad"
              isError={props.touched.phoneNumber && props.errors.phoneNumber}
            />

            <Button
              mode="outlined"
              onPress={handleSubmit}
              loading={props.submitting}
              disabled={props.submitting}
            >
              Login
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default LoginForm;

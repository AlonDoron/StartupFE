import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { Input } from "../components/common";
import { Formik } from "formik";
import { loginSchema } from "../validations/validationSchema";
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
              handleChangeText={props.handleChange("phoneNumber")}
              label="Phone Number"
              keyboardType="number-pad"
              error={props.touched.phoneNumber && props.errors.phoneNumber}
            />

            <Button
              mode="outlined"
              onPress={props.handleSubmit}
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

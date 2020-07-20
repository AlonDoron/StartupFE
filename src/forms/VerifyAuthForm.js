import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { Input } from "../components/common";
import { Formik } from "formik";
import * as yup from "yup";

const verificationSchema = yup.object({
  VerificationCode: yup.string().required().equals(5),
});

const VerifyAuthForm = (props) => {
  return (
    <View>
      <Formik
        initialValues={{
          VerificationCode: "",
        }}
        validationSchema={verificationSchema}
        onSubmit={(values) => props.submitForm(values)}
      >
        {(props) => (
          <View>
            <Input
              name="VerificationCode"
              value={props.values.VerificationCode}
              onChangeText={props.handleChange("VerificationCode")}
              label="Verification Code"
              keyboardType="number-pad"
              isError={
                props.touched.VerificationCode && props.errors.VerificationCode
              }
            />

            <Button
              mode="outlined"
              loading={props.submitting}
              disabled={props.submitting}
            >
              {props.pageName}
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default VerifyAuthForm;

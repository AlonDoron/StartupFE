import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { Input } from "../components/common";
import { Formik } from "formik";
import { verificationSchema } from "../validation/validationSchema";
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
              onPress={props.handleSubmit}
              loading={props.submitting}
              disabled={props.submitting}
            >
              Verify
              {props.pageName}
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default VerifyAuthForm;

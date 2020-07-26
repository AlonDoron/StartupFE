import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { Input } from "../components/common";
import { Formik } from "formik";
import { verificationSchema } from "../validations/validationSchema";
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
              handleChangeText={props.handleChange("VerificationCode")}
              label="Verification Code"
              keyboardType="number-pad"
              errors={
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

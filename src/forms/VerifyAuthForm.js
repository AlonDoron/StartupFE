import React from "react";
import { Layout, Button } from "@ui-kitten/components";
import { Input, LoadingIndicator } from "../components/common";
import { Formik } from "formik";
import { verificationSchema } from "../validations";

const VerifyAuthForm = (props) => {
  return (
    <Layout>
      <Formik
        initialValues={{
          VerificationCode: "",
        }}
        validationSchema={verificationSchema}
        onSubmit={(values) => props.submitForm(values)}
      >
        {(props) => (
          <Layout>
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
              disabled={props.submitting}
              accessoryLeft={LoadingIndicator}
            >
              Verify
              {props.pageName}
            </Button>
          </Layout>
        )}
      </Formik>
    </Layout>
  );
};

export default VerifyAuthForm;

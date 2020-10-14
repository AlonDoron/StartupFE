import React from "react";
import { Layout, Button } from "@ui-kitten/components";
import { Input, LoadingIndicator } from "../components/common";
import { Formik } from "formik";
import { loginSchema } from "../validations";
import i18n from "../i18n";

const LoginForm = (props) => {
  return (
    <Layout>
      <Formik
        initialValues={{
          phoneNumber: "",
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => props.submitForm(values)}
      >
        {(props) => (
          <Layout>
            <Input
              name="phone Number"
              value={props.values.phoneNumber}
              handleChangeText={props.handleChange("phoneNumber")}
              label={i18n.t("phoneNumber")}
              keyboardType="number-pad"
              errors={props.touched.phoneNumber && props.errors.phoneNumber}
            />

            <Button
              mode="outlined"
              onPress={props.handleSubmit}
              disabled={props.submitting}
              accessoryLeft={LoadingIndicator}
            >
              {i18n.t("login")}
            </Button>
          </Layout>
        )}
      </Formik>
    </Layout>
  );
};

export default LoginForm;

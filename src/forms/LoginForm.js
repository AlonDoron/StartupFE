import React from "react";
import { StyleSheet } from "react-native";
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
          <Layout style={styles.form1}>
            <Input
              name="phoneNumber"
              value={props.values.phoneNumber}
              handleChangeText={props.handleChange("phoneNumber")}
              label={i18n.t("phoneNumber")}
              keyboardType="number-pad"
              errors={props.touched.phoneNumber && props.errors.phoneNumber}
            />

            <Button
              style={styles.button}
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

const styles = StyleSheet.create({
  button: {
    width: 380,
    alignSelf: "center",
  },
});

export default LoginForm;

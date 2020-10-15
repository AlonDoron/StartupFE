import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Button } from "@ui-kitten/components";
import { Input, LoadingIndicator } from "../components/common";
import { Formik } from "formik";
import { registrationSchema } from "../validations";
import i18n from "../i18n";

const RegistrationForm = (props) => {
  return (
    <Layout>
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
          <Layout>
            <Input
              name="First Name"
              value={props.values.firstName}
              handleChangeText={props.handleChange("firstName")}
              handleBlur={props.handleBlur("firstName")}
              label={i18n.t("firstName")}
              keyboardType="default"
              errors={props.touched.firstName && props.errors.firstName}
            />

            <Input
              name="Last Name"
              value={props.values.lastName}
              handleChangeText={props.handleChange("lastName")}
              handleBlur={props.handleBlur("lastName")}
              label={i18n.t("lastName")}
              keyboardType="default"
              errors={props.touched.lastName && props.errors.lastName}
            />
            <Input
              name="email"
              value={props.values.email}
              handleChangeText={props.handleChange("email")}
              handleBlur={props.handleBlur("email")}
              label={i18n.t("email")}
              keyboardType="email-address"
              errors={props.touched.email && props.errors.email}
            />
            <Input
              name="phone Number"
              value={props.values.phoneNumber}
              handleChangeText={props.handleChange("phoneNumber")}
              handleBlur={props.handleBlur("phoneNumber")}
              label={i18n.t("phoneNumber")}
              keyboardType="number-pad"
              errors={props.touched.phoneNumber && props.errors.phoneNumber}
            />

            <Button
              style={styles.button}
              mode="outlined"
              onPress={props.handleSubmit}
              loading={props.submitting}
              disabled={props.submitting}
              accessoryLeft={LoadingIndicator}
            >
              {i18n.t("registration")}
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

export default RegistrationForm;

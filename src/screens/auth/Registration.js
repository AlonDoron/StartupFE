import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Layout } from "@ui-kitten/components";
import { RegistrationForm } from "../../forms";
import { useDispatch, useSelector } from "react-redux";
import { isUserExistsByPhoneNumber } from "../../actions/authAction";

const Registration = ({ navigation }) => {
  const [values, setValues] = useState({});
  const [allowNavigate, setAllowNavigate] = useState(false);

  const dispatch = useDispatch();
  const isUserExists = useSelector((state) => state.auth.isUserExists);
  const isFetching = useSelector((state) => state.auth.isFetching);

  const handleSubmitForm = (vals) => {
    setValues(vals);
    dispatch(
      isUserExistsByPhoneNumber("Registration", {
        phoneNumber: vals.phoneNumber,
      })
    ).then(() => setAllowNavigate(true));
  };

  useEffect(() => {
    if (allowNavigate) {
      if (isUserExists) navigation.navigate("Login");
      else
        navigation.navigate("VerifyAuth", {
          vals: values,
          sentFrom: "Registration",
        });
    }
  }, [allowNavigate]);

  return (
    <Layout style={styles.container}>
      <RegistrationForm submitForm={handleSubmitForm} submitting={isFetching} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
  },
});

export default Registration;

import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Layout } from "@ui-kitten/components";
import { LoginForm } from "~forms";
import { useDispatch, useSelector } from "react-redux";
import { isUserExistsByPhoneNumber } from "~actions/authAction";

const Login = ({ navigation }) => {
  const [values, setValues] = useState({});
  const [allowNavigate, setAllowNavigate] = useState(false);

  const dispatch = useDispatch();
  const isUserExists = useSelector((state) => state.auth.isUserExists);
  const isFetching = useSelector((state) => state.auth.isFetching);

  const handleSubmitForm = (vals) => {
    setValues(vals);
    dispatch(isUserExistsByPhoneNumber("Login", vals)).then(() =>
      setAllowNavigate(true)
    );
  };

  useEffect(() => {
    if (allowNavigate) {
      if (isUserExists)
        navigation.navigate("VerifyAuth", {
          vals: values,
          sentFrom: "Login",
        });
      else navigation.navigate("Registration");
    }
  }, [allowNavigate]);

  return (
    <Layout style={styles.container}>
      <LoginForm submitForm={handleSubmitForm} submitting={isFetching} />
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

export default Login;

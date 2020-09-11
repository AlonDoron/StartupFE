import React, { useState } from "react";
import { View } from "react-native";
import LoginForm from "../../forms/LoginForm";
import HttpClient from "../../api/HttpClient";
import apiConfig from "../../config/apiConfig";

const Login = (props) => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmitForm = (vals) => {
    setSubmitting(true);

    HttpClient.get(
      apiConfig.LOGIN_PORT,
      "api/Login/checkIfUserExists",
      vals
    ).then((result) => {
      setSubmitting(false);
      props.navigation.navigate(result ? "VerifyAuth" : "Signup", {
        vals: vals,
        sentFrom: "Login",
      });
    });
  };

  return (
    <View>
      <LoginForm submitForm={handleSubmitForm} submitting={submitting} />
    </View>
  );
};

export default Login;

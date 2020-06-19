import React from "react";
import { View } from "react-native";
import LoginForm from "../../forms/LoginForm";
import HttpClient from "../../api/HttpClient";
import apiConfig from "../../config/apiConfig";

const Login = (props) => {
  const handleSubmitForm = (vals) => {
    HttpClient.get(
      apiConfig.LOGIN_PORT,
      "api/Login/checkIfUserExists",
      vals
    ).then((result) => {
      props.navigation.navigate(result ? "VerifyLogin" : "Signup", { ...vals });
    });
  };

  return (
    <View>
      <LoginForm submitForm={handleSubmitForm} />
    </View>
  );
};

export default Login;

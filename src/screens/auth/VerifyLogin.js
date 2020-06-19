import React, { useEffect } from "react";
import { View, Text, AsyncStorage, Alert } from "react-native";
import HttpClient from "../../api/HttpClient";
import apiConfig from "../../config/apiConfig";

const VerifyLogin = (props) => {
  const handleSubmitForm = (vals) => {
    HttpClient.get(
      apiConfig.LOGIN_PORT,
      "api/Login/checkIfUserExists",
      vals
    ).then((result) => {
      props.navigation.navigate(result ? "VerifyLogin" : "Signup");
    });
  };

  return (
    <View>
      <Text>VERIFY</Text>
    </View>
  );
};

export default VerifyLogin;

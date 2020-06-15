import React, { useEffect } from "react";
import { View, Text, AsyncStorage, Alert } from "react-native";
import LoginForm from "../../forms/LoginForm";

const Login = (props) => {
  return (
    <View>
      <LoginForm submitForm={(vals) => console.log(vals)} />
    </View>
  );
};

export default Login;

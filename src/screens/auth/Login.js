import React from "react";
import { View } from "react-native";
import LoginForm from "../../forms/LoginForm";
import { checkIfUserExists } from "../../api/wrappers/authService";

const Login = (props) => {
  const handleSubmitForm = (vals) => {
    checkIfUserExists("Login", vals).then((result) => {
      props.navigation.navigate(result ? "VerifyAuth" : "Signup", {
        vals: vals,
        sentFrom: "Login",
      });
    });
  };

  return (
    <View>
      <LoginForm submitForm={handleSubmitForm} submitting={false} />
    </View>
  );
};

export default Login;

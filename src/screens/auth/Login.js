import React, { useEffect } from "react";
import { View } from "react-native";
import LoginForm from "../../forms/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { isUserExistsByPhoneNumber } from "../../actions/authAction";

const Login = (props) => {
  const dispatch = useDispatch();
  const isUserExists = useSelector((state) => state.auth.isUserExists);
  const isFetching = useSelector((state) => state.auth.isFetching);

  useEffect(() => {
    // TODO: CHECK WHEN DONE FETCHING AND UPDATE WHEN RELEVANT
    if (!isFetching)
      props.navigation.navigate(isUserExists ? "VerifyAuth" : "Signup", {
        vals: "1234", // TODO: SEPERATE VALS TO BE AN INDEPENDANT STATE AT LOGIN.JS
        sentFrom: "Login",
      });
  }, [isFetching]);

  const handleSubmitForm = (vals) => {
    dispatch(isUserExistsByPhoneNumber("Login", vals));
  };

  return (
    <View>
      <LoginForm submitForm={handleSubmitForm} submitting={false} />
    </View>
  );
};

export default Login;

import React, { useEffect, useState } from "react";
import { View } from "react-native";
import LoginForm from "../../forms/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { isUserExistsByPhoneNumber } from "../../actions/authAction";

const Login = (props) => {
  const [values, setValues] = useState({});
  const dispatch = useDispatch();
  const isUserExists = useSelector((state) => state.auth.isUserExists);
  const isFetching = useSelector((state) => state.auth.isFetching);
  const isDoneFetching = useSelector((state) => state.auth.isDoneFetching);

  const handleSubmitForm = (vals) => {
    dispatch(isUserExistsByPhoneNumber("Login", vals));
    setValues(vals);
  };

  useEffect(() => {
    if (isDoneFetching)
      props.navigation.navigate(isUserExists ? "VerifyAuth" : "Signup", {
        vals: values,
        sentFrom: "Login",
      });
  }, [isDoneFetching]);

  return (
    <View>
      <LoginForm submitForm={handleSubmitForm} submitting={isFetching} />
    </View>
  );
};

export default Login;

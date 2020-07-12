import React, { useEffect, useState } from "react";
import { View } from "react-native";
import LoginForm from "../../forms/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { isUserExistsByPhoneNumber } from "../../actions/authAction";

const Login = (props) => {
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
      props.navigation.navigate(isUserExists ? "VerifyAuth" : "Signup", {
        vals: values,
        sentFrom: "Login",
      });
    }
  }, [allowNavigate]);

  return (
    <View>
      <LoginForm submitForm={handleSubmitForm} submitting={isFetching} />
    </View>
  );
};

export default Login;

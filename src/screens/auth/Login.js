import React, { useEffect, useState } from "react";
import { View } from "react-native";
import LoginForm from "../../forms/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { isUserExistsByPhoneNumber } from "../../actions/authAction";

const Login = (props) => {
  const [values, setValues] = useState({});
<<<<<<< HEAD
  const [allowNavigate, setAllowNavigate] = useState(false);

  const dispatch = useDispatch();
  const isUserExists = useSelector((state) => state.auth.isUserExists);

  const handleSubmitForm = (vals) => {
    setValues(vals);
    dispatch(isUserExistsByPhoneNumber("Login", vals)).then(() =>
      setAllowNavigate(true)
    );
  };

  useEffect(() => {
    if (allowNavigate)
=======
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
>>>>>>> 7ed5aadfe5115e279991c9bfc2a26b243ed84fa7
      props.navigation.navigate(isUserExists ? "VerifyAuth" : "Signup", {
        vals: values,
        sentFrom: "Login",
      });
<<<<<<< HEAD
  }, [allowNavigate, isUserExists, values]);
=======
  }, [isDoneFetching]);
>>>>>>> 7ed5aadfe5115e279991c9bfc2a26b243ed84fa7

  return (
    <View>
      <LoginForm submitForm={handleSubmitForm} submitting={isFetching} />
    </View>
  );
};

export default Login;

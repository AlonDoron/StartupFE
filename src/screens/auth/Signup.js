import React, { useEffect, useState } from "react";
import { View } from "react-native";
import SignupForm from "../../forms/SignupForm";
import { useDispatch, useSelector } from "react-redux";
import { isUserExistsByPhoneNumber } from "../../actions/authAction";

const Signup = ({ navigation }) => {
  const [values, setValues] = useState({});
  const [allowNavigate, setAllowNavigate] = useState(false);

  const dispatch = useDispatch();
  const isUserExists = useSelector((state) => state.auth.isUserExists);
  const isFetching = useSelector((state) => state.auth.isFetching);

  const handleSubmitForm = (vals) => {
    setValues(vals);
    dispatch(
      isUserExistsByPhoneNumber("Registration", {
        phoneNumber: vals.phoneNumber,
      })
    ).then(() => setAllowNavigate(true));
  };

  useEffect(() => {
    if (allowNavigate) {
      if (isUserExists) navigation.navigate("Login");
      else
        navigation.navigate("VerifyAuth", {
          vals: values,
          sentFrom: "Registration",
        });
    }
  }, [allowNavigate]);

  return (
    <View>
      <SignupForm submitForm={handleSubmitForm} submitting={isFetching} />
    </View>
  );
};

export default Signup;

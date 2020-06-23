import React, { useState } from "react";
import { View } from "react-native";
import SignupForm from "../../forms/SignupForm";
import HttpClient from "../../api/HttpClient";
import apiConfig from "../../config/apiConfig";

const Signup = (props) => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmitForm = (vals) => {
    setSubmitting(true);

    HttpClient.get(
      apiConfig.REGISTRATION_PORT,
      "api/Registration/checkIfUserExists",
      { phoneNumber: vals.phoneNumber }
    )
      .then((result) => {
        setSubmitting(false);
        if (result) {
          props.navigation.navigate("Login");
        } else {
          props.navigation.navigate("VerifyAuth", {
            vals: vals,
            sentFrom: "Signup",
          });
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <View>
      <SignupForm submitForm={handleSubmitForm} submitting={submitting} />
    </View>
  );
};

export default Signup;

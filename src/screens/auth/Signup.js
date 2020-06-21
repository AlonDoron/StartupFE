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
        if (!result) {
          console.log("not exists");
          HttpClient.create(
            apiConfig.REGISTRATION_PORT,
            "api/Registration/CreateVerficationRequest",
            {
              FirstName: vals.firstName,
              LastName: vals.lastName,
              Email: vals.email,
              PhoneNumber: vals.phoneNumber,
            }
          )
            .then((verificationKey) => {
              setSubmitting(false);
              props.navigation.navigate("VerifySignup", { verificationKey });
            })
            .catch((e) => console.log(e));
        } else {
          console.log("Exists");
          props.navigation.navigate("Auth");
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

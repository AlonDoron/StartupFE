import React, { useEffect, useState } from "react";
import { View } from "react-native";
import HttpClient from "../../api/HttpClient";
import apiConfig from "../../config/apiConfig";
import VerifySignupForm from "../../forms/VerifySignupForm";
import TokensHandler from "../../api/TokensHandler";

const VerifyLogin = (props) => {
  const [userGUID, setUserGuid] = useState({});

  useEffect(() => {
    HttpClient.create(
      apiConfig.REGISTRATION_PORT,
      "api/Registration/CreateVerficationRequest",
      props.navigation.state.params
    )
      .then((result) => {
        setUserGuid({ VerificationRequestKey: result });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmitForm = (vals) => {
    let mergedState = { ...userGUID, ...vals };

    HttpClient.create(
      apiConfig.REGISTRATION_PORT,
      "api/Registration/VerifyCode",
      mergedState
    ).then((result) => {
      TokensHandler.writeTokenToDevice(result)
        .then(() => props.navigation.navigate(result ? "App" : "Signup"))
        .catch((err) => {
          console.log(err);
          props.navigation.navigate("Auth");
        });
    });
  };

  return (
    <View>
      <VerifySignupForm submitForm={handleSubmitForm} />
    </View>
  );
};

export default VerifyLogin;

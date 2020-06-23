import React, { useEffect, useState } from "react";
import { View } from "react-native";
import HttpClient from "../../api/HttpClient";
import apiConfig from "../../config/apiConfig";
import VerifyAuthForm from "../../forms/VerifyAuthForm";
import TokensHandler from "../../api/TokensHandler";

const VerifyAuth = (props) => {
  const [userGUID, setUserGuid] = useState({});
  const sentFrom = props.navigation.state.params.sentFrom;
  const values = props.navigation.state.params.vals;

  useEffect(() => {
    (sentFrom === "login"
      ? HttpClient.create(
          apiConfig.LOGIN_PORT,
          "api/Login/CreateVerficationRequest",
          values
        )
      : HttpClient.create(
          apiConfig.REGISTRATION_PORT,
          "api/Registration/CreateVerficationRequest",
          values
        )
    )
      .then((result) => {
        setUserGuid({ VerificationRequestKey: result });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmitForm = (vals) => {
    let mergedState = { ...userGUID, ...vals };

    (sentFrom === "login"
      ? HttpClient.create(
          apiConfig.LOGIN_PORT,
          "api/Login/VerifyCode",
          mergedState
        )
      : HttpClient.create(
          apiConfig.REGISTRATION_PORT,
          "api/Registration/VerifyCode",
          mergedState
        )
    ).then((result) => {
      TokensHandler.writeTokenToDevice(result)
        .then(() => props.navigation.navigate(result ? "App" : "Login"))
        //Check the above line
        .catch((err) => {
          console.log(err);
          props.navigation.navigate("Auth");
        });
    });
  };

  return (
    <View>
      <VerifyAuthForm pageName={sentFrom} submitForm={handleSubmitForm} />
    </View>
  );
};

export default VerifyAuth;

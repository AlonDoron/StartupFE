import React, { useEffect, useState } from "react";
import { View } from "react-native";
import HttpClient from "../../api/HttpClient";
import apiConfig from "../../config/apiConfig";
import VerifyLoginForm from "../../forms/VerifyLoginForm";
import TokensHandler from "../../api/TokensHandler";

const VerifyLogin = (props) => {
  const [userGUID, setUserGuid] = useState({});

  useEffect(() => {
    HttpClient.create(
      apiConfig.LOGIN_PORT,
      "api/Login/CreateVerficationRequest",
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
      apiConfig.LOGIN_PORT,
      "api/Login/VerifyCode",
      mergedState
    ).then((result) => {
      TokensHandler.writeTokenToDevice(result)
        .then(() => props.navigation.navigate(result ? "App" : "Login"))
        .catch((err) => {
          console.log(err);
          props.navigation.navigate("Auth");
        });
    });
  };

  return (
    <View>
      <VerifyLoginForm submitForm={handleSubmitForm} />
    </View>
  );
};

export default VerifyLogin;

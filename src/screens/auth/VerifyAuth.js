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

  const getPort = () => {
    if (sentFrom === "Login") return apiConfig.LOGIN_PORT;
    if (sentFrom === "Registration") return apiConfig.REGISTRATION_PORT;
  };

  useEffect(() => {
    HttpClient.create(
      getPort(),
      `api/${sentFrom}/CreateVerficationRequest`,
      values
    )
      .then((result) => {
        setUserGuid({ VerificationRequestKey: result });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmitForm = (vals) => {
    let mergedState = { ...userGUID, ...vals };

    HttpClient.create(
      getPort(),
      `api/${sentFrom}/VerifyCode`,
      mergedState
    ).then((result) => {
      TokensHandler.writeTokenToDevice(result)
        .then(() => {
          result ? props.navigation.navigate("App") : props.navigation.goBack();
        })

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

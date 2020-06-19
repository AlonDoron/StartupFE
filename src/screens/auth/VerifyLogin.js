import React, { useEffect, useState } from "react";
import { View } from "react-native";
import HttpClient from "../../api/HttpClient";
import apiConfig from "../../config/apiConfig";
import VerifyLoginForm from "../../forms/VerifyLoginForm";
import TokensHandler from "../../api/TokensHandler";

const VerifyLogin = (props) => {
  const [userGUID, setUserGuid] = useState({});

  // TEST:
  // useEffect(() => {
  //   setUserGuid({
  //     VerificationRequestKey: "51fa4392-f349-43b6-b029-88ab400f6792",
  //   });
  // }, []);
  // WE COMMENTED THAT SHIT BECAUSE IT COSTS MONEY FOR EACH SMS WE GET.
  // SO WE USE HARDCODED VALID DATA.
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

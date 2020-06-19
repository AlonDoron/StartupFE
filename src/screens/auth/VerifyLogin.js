import React, { useEffect, useState } from "react";
import { View } from "react-native";
import HttpClient from "../../api/HttpClient";
import apiConfig from "../../config/apiConfig";
import VerifyLoginForm from "../../forms/VerifyLoginForm";

const VerifyLogin = (props) => {
  const [userGUID, setUserGuid] = useState({});

  useEffect(() => {
    setUserGuid({
      VerificationRequestKey: "51fa4392-f349-43b6-b029-88ab400f6792",
    });
  }, []);
  // useEffect(() => {
  //   HttpClient.create(
  //     apiConfig.LOGIN_PORT,
  //     "api/Login/CreateVerficationRequest",
  //     props.navigation.state.params
  //   )
  //     .then((result) => {
  //       setUserGuid({ VerificationRequestKey: result });
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const handleSubmitForm = (vals) => {
    let mergedState = { ...userGUID, ...vals };

    HttpClient.create(
      apiConfig.LOGIN_PORT,
      "api/Login/VerifyCode",
      mergedState
    ).then((result) => {
      console.log(result);
      props.navigation.navigate(result ? "App" : "Login");
    });
  };

  return (
    <View>
      <VerifyLoginForm submitForm={handleSubmitForm} />
    </View>
  );
};

export default VerifyLogin;

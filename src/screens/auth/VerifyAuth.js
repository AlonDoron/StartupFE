import React, { useEffect, useState } from "react";
import { View } from "react-native";
import VerifyAuthForm from "../../forms/VerifyAuthForm";
import TokensHandler from "../../api/TokensHandler";
import {
  createVerifyRequest,
  verifyCode,
} from "../../api/wrappers/authService";

const VerifyAuth = (props) => {
  const [userGUID, setUserGuid] = useState({});
  const sentFrom = props.navigation.state.params.sentFrom;
  const values = props.navigation.state.params.vals;

  useEffect(() => {
    createVerifyRequest(sentFrom, values)
      .then((result) => {
        setUserGuid({ VerificationRequestKey: result });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmitForm = (vals) => {
    let mergedState = { ...userGUID, ...vals };

    verifyCode(sentFrom, mergedState).then((result) => {
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

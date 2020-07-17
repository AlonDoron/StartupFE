import React, { useEffect, useState } from "react";
import { View } from "react-native";
import VerifyAuthForm from "../../forms/VerifyAuthForm";
import TokensHandler from "../../api/TokensHandler";
import { useSelector, useDispatch } from "react-redux";
import { verifyRequest, verifyCode } from "../../actions/authAction";

const VerifyAuth = (props) => {
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.auth.isFetching);

  const sentFrom = props.navigation.state.params.sentFrom;
  const values = props.navigation.state.params.vals;

  const [allowNavigate, setAllowNavigate] = useState(false);
  const [userGUID, setUserGuid] = useState({});

  useEffect(() => {
    dispatch(verifyRequest(sentFrom, values)).then((verificationRequestKey) => {
      setUserGuid({ VerificationRequestKey: verificationRequestKey });
    });
  }, []);

  useEffect(() => {
    if (allowNavigate) {
      props.navigation.navigate("App");
    }
  }, [allowNavigate]);

  const handleSubmitForm = (vals) => {
    let mergedState = { ...userGUID, ...vals };

    dispatch(verifyCode(sentFrom, mergedState)).then((userId) => {
      TokensHandler.writeTokenToDevice(userId)
        .then(() => {
          setAllowNavigate(true);
        })

        .catch((err) => {
          console.log(err);
          props.navigation.navigate("Auth");
        });
    });
  };

  return (
    <View>
      <VerifyAuthForm
        pageName={sentFrom}
        submitForm={handleSubmitForm}
        submitting={isFetching}
      />
    </View>
  );
};

export default VerifyAuth;

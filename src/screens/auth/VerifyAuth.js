import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Layout } from "@ui-kitten/components";
import { VerifyAuthForm } from "../../forms";
import TokensHandler from "../../api/TokensHandler";
import { useSelector, useDispatch } from "react-redux";
import { verifyRequest, verifyCode } from "../../actions/authAction";

const VerifyAuth = ({ navigation }) => {
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.auth.isFetching);

  const sentFrom = navigation.state.params.sentFrom;
  const values = navigation.state.params.vals;

  const [allowNavigate, setAllowNavigate] = useState(false);
  const [userGUID, setUserGuid] = useState({});

  useEffect(() => {
    dispatch(verifyRequest(sentFrom, values)).then((verificationRequestKey) => {
      setUserGuid({ VerificationRequestKey: verificationRequestKey });
    });
  }, []);

  useEffect(() => {
    if (allowNavigate) {
      navigation.navigate("App");
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
          navigation.navigate("Auth");
        });
    });
  };

  return (
    <Layout style={styles.container}>
      <VerifyAuthForm
        pageName={sentFrom}
        submitForm={handleSubmitForm}
        submitting={isFetching}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
  },
});

export default VerifyAuth;

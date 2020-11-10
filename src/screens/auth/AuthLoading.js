import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { Layout } from "@ui-kitten/components";
import { LoadingIndicator } from "~components/common";
import TokensHandler from "~api/TokensHandler";
import { useDispatch, useSelector } from "react-redux";
import { isUserExistsByToken, setIsUserExists } from "~actions/authAction";

const AuthLoading = ({ navigation }) => {
  const dispatch = useDispatch();
  const isUserExists = useSelector((state) => state.auth.isUserExists);

  const [allowNavigate, setAllowNavigate] = useState(false);

  const fetchData = async () => {
    const token = await TokensHandler.getTokenFromDevice();

    if (token === null) {
      dispatch(setIsUserExists(false));
      setAllowNavigate(true);
    } else
      dispatch(isUserExistsByToken(token)).then(() => setAllowNavigate(true));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (allowNavigate || isUserExists != null)
      navigation.navigate(isUserExists ? "App" : "Auth");
  }, [allowNavigate, isUserExists]);

  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LoadingIndicator size="large" />
      <StatusBar barStyle="default" />
    </Layout>
  );
};

export default AuthLoading;

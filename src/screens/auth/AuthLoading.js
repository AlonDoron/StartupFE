import React, { useEffect } from "react";
import { StatusBar, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { ApiConfig } from "../../config";
import HttpClient from "../../api/HttpClient";
import TokensHandler from "../../api/TokensHandler";

const AuthLoading = (props) => {
  useEffect(() => {
    fetchToken().then((token) => {
      let params = {
        userId: token,
      };

      if (!params.userId) props.navigation.navigate("Auth");
      else
        HttpClient.get(ApiConfig.IDENTITY_PORT, "api/identity", params)
          .then((result) => {
            props.navigation.navigate(result ? "App" : "Auth");
          })
          .catch((err) => console.log(err));
    });
  }, []);

  const fetchToken = async () => {
    return TokensHandler.getTokenFromDevice();
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
      <StatusBar barStyle="default" />
    </View>
  );
};

export default AuthLoading;

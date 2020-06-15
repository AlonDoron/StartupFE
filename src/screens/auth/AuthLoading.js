import React, { useEffect } from "react";
import { ActivityIndicator, AsyncStorage, StatusBar, View } from "react-native";
import { DeviceConfig, ApiConfig } from "../../config";
import HttpClient from "../../api/HttpClient";

const AuthLoading = (props) => {
  useEffect(() => {
    bootstrapAsync().then((token) => {
      let params = {
        userId: token,
      };

      HttpClient.get(ApiConfig.IDENTITY_PORT, "api/identity", params)
        .then((result) => {
          console.log(result);
          props.navigation.navigate(result ? "App" : "Auth");
        })
        .catch((err) => console.log(err));
    });
  }, []);

  const bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem(
      DeviceConfig.DEVICE_TOKEN_NAME
    );

    return userToken;
  };

  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};

export default AuthLoading;

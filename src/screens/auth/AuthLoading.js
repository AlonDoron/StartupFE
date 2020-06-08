import React, { useEffect } from "react";
import { ActivityIndicator, AsyncStorage, StatusBar, View } from "react-native";
import { DeviceConfig, ApiConfig } from "../../config";

const AuthLoading = (props) => {
  useEffect(() => {
    bootstrapAsync().then((token) =>
      /*console.log(
          `${ApiConfig.SERVER_URL}:${ApiConfig.IDENTITY_PORT}/api/Identity?userId=${token}`
        )
        */
      /*
        console.log({
          ...ApiConfig.HEADERS,
          ApiKey: "Token 97a74c03004e7d6b0658dfdfde34fd6aa4b14ddb",
        })
*/
      fetch(
        `${ApiConfig.SERVER_URL}:${ApiConfig.IDENTITY_PORT}/api/Identity?userId=${token}`,
        {
          headers: {
            ...ApiConfig.HEADERS,
            ApiKey: "97a74c03004e7d6b0658dfdfde34fd6aa4b14ddb",
          },
        }
      )
        .then((response) => response.json())

        .then((result) => {
          props.navigation.navigate(result ? "App" : "Auth");
        })
        .catch((error) => {
          // console.log(error);
          props.navigation.navigate("Auth");
        })
    );
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

import React, { useEffect } from "react";
import { ActivityIndicator, AsyncStorage, StatusBar, View } from "react-native";
import { DeviceConfig, ApiConfig } from "../../config";

const AuthLoading = (props) => {
  useEffect(() => {
    bootstrapAsync().then((token) =>
      fetch(`${ApiConfig.SERVER_URL}/Identity`, {
        headers: ApiConfig.HEADERS,
        body: token,
      })
        .then((response) => response.json())

        .then((result) => {
          props.navigation.navigate(result ? "App" : "Auth");
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

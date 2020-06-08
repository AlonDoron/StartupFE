import React, { useEffect } from "react";
import { View, Text, AsyncStorage, Alert } from "react-native";

const Login = () => {
  /*useEffect(() => {
    writeTokenToDevice();
  }, []);

  const writeTokenToDevice = async () => {
    await AsyncStorage.setItem(
      "UserToken",
      "248c63a0-82d2-4ae3-8dc8-8165350907c"
    ).then(Alert.alert("Done"));
  };*/

  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

export default Login;

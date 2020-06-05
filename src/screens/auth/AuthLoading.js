import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
  Text,
} from "react-native";

const AuthLoading = () => {
  /*componentDidMount() {
    this._bootstrapAsync();
  }*/

  // _bootstrapAsync = async () => {
  //   const userToken = await AsyncStorage.getItem("StartupToken");
  //   this.props.navigation.navigate(userToken ? "App" : "Auth");
  // };
  return (
    <View>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
      <Text>Hi</Text>
    </View>
  );
};

export default AuthLoading;

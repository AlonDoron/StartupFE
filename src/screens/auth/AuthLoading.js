import React, { useEffect } from "react";
import { StatusBar, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import TokensHandler from "../../api/TokensHandler";
import { useDispatch, useSelector } from "react-redux";
import { isTokenExists } from "../../actions/authAction";

const AuthLoading = (props) => {
  console.log("AuthLoading running");
  const isUser = useSelector((state) => state.authReducer.isUserExists);
  const dispatch = useDispatch();

  useEffect(() => {
    getTokenAndCheckIfUserExists().then(() =>
      props.navigation.navigate(isUser ? "App" : "Auth")
    );

    // TokensHandler.getTokenFromDevice().then((token) => {
    //   console.log(token);
    //   dispatch(isTokenExists(token)).then(() =>
    //     props.navigation.navigate(isUser ? "App" : "Auth")
    //   );
    // });
  }, []);

  const getTokenAndCheckIfUserExists = async () => {
    const token = await TokensHandler.getTokenFromDevice();
    dispatch(isTokenExists(token));
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
      <StatusBar barStyle="default" />
    </View>
  );
};

export default AuthLoading;

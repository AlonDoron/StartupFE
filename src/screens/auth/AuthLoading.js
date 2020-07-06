import React, { useEffect } from "react";
import { StatusBar, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import TokensHandler from "../../api/TokensHandler";
import { useDispatch, useSelector } from "react-redux";
import { isTokenExists } from "../../actions/authAction";

const AuthLoading = (props) => {
  const dispatch = useDispatch();
  const isUser = useSelector((state) => state.authReducer.isUserExists);
  const isDoneFetching = useSelector(
    (state) => state.authReducer.isDoneFetching
  );

  const fetchData = async () => {
    const token = await TokensHandler.getTokenFromDevice();
    dispatch(isTokenExists(token));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (isDoneFetching === true)
      props.navigation.navigate(isUser ? "App" : "Auth");
  }, [isDoneFetching]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
      <StatusBar barStyle="default" />
    </View>
  );
};

export default AuthLoading;

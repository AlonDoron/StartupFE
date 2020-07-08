import React, { useEffect } from "react";
import { StatusBar, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import TokensHandler from "../../api/TokensHandler";
import { useDispatch, useSelector } from "react-redux";
import { isUserExistsByToken } from "../../actions/authAction";

const AuthLoading = (props) => {
  const dispatch = useDispatch();
  const isUserExists = useSelector((state) => state.auth.isUserExists);
  const isFetching = useSelector((state) => state.auth.isFetching);

  const fetchData = async () => {
    const token = await TokensHandler.getTokenFromDevice();
    dispatch(isUserExistsByToken(token));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!isFetching && isUserExists != null)
      props.navigation.navigate(isUserExists ? "App" : "Auth");
  }, [isUserExists]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
      <StatusBar barStyle="default" />
    </View>
  );
};

export default AuthLoading;

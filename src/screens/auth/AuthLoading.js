import React, { useState, useEffect } from "react";
import { StatusBar, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import TokensHandler from "../../api/TokensHandler";
import { useDispatch, useSelector } from "react-redux";
import { isUserExistsByToken, setIsUserExists } from "../../actions/authAction";

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

  useEffect(() => {
    if (allowNavigate || isUserExists != null)
      navigation.navigate(isUserExists ? "App" : "Auth");
  }, [allowNavigate, isUserExists]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
      <StatusBar barStyle="default" />
    </View>
  );
};

export default AuthLoading;

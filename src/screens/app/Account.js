import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import TokensHandler from "../../api/TokensHandler";

const Account = (props) => {
  const signout = () => {
    TokensHandler.removeTokenFromDevice().then(
      props.navigation.navigate("Auth")
    );
  };

  return (
    <View>
      <Button mode="contained" onPress={signout}>
        Sign out!
      </Button>
    </View>
  );
};

Account.navigationOptions = {
  title: "Account",
  tabBarIcon: <FontAwesome name="user" size={20} />,
};

export default Account;

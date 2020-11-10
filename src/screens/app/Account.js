import React from "react";
import { View, Text } from "react-native";
import { Button } from "@ui-kitten/components";
import { FontAwesome } from "@expo/vector-icons";
import TokensHandler from "api/TokensHandler";
import i18n from "i18n";

const Account = (props) => {
  const signout = () => {
    TokensHandler.removeTokenFromDevice().then(
      props.navigation.navigate("Auth")
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Account</Text>
      <Button mode="contained" onPress={signout}>
        Sign out!
      </Button>
    </View>
  );
};

Account.navigationOptions = {
  title: i18n.t("account"),
  tabBarIcon: <FontAwesome name="user" size={20} />,
};

export default Account;

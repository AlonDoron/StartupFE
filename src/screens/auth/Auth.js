import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import i18n from "../../i18n";

const Auth = ({ navigation }) => {
  return (
    <View>
      <View>
        <Button
          style={{ margin: "5%" }}
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          {i18n.t("login")}
        </Button>
      </View>

      <View>
        <Button
          style={{ margin: "5%" }}
          mode="contained"
          onPress={() => navigation.navigate("Registration")}
        >
          {i18n.t("registration")}
        </Button>
      </View>
    </View>
  );
};

export default Auth;

import React from "react";
import { View } from "react-native";
import { Text } from "@ui-kitten/components";
import { AntDesign } from "@expo/vector-icons";
import i18n from "i18n";

const MyServices = (props) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40 }}>My Servicsses</Text>
    </View>
  );
};

MyServices.navigationOptions = {
  title: i18n.t("myServices"),
  tabBarIcon: <AntDesign name="home" size={20} />,
};

export default MyServices;

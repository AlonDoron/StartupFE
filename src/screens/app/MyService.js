import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

const MyService = (props) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40 }}>MyService</Text>
    </View>
  );
};

MyService.navigationOptions = {
  title: "My Service",
  tabBarIcon: <AntDesign name="home" size={20} />,
};

export default MyService;

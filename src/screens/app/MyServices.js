import React from "react";
import { View } from "react-native";
import { Text } from "@ui-kitten/components";
import { AntDesign } from "@expo/vector-icons";

const MyServices = (props) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40 }}>My Services</Text>
    </View>
  );
};

MyServices.navigationOptions = {
  title: "My Services",
  tabBarIcon: <AntDesign name="home" size={20} />,
};

export default MyServices;

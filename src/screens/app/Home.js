import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { Map } from "../../components/common";
import { Foundation } from "@expo/vector-icons";
const Home = (props) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40 }}>Home</Text>
      <Map />
    </View>
  );
};

Home.navigationOptions = {
  title: "Find",
  tabBarIcon: <Foundation name="target-two" size={20} />,
};

export default Home;

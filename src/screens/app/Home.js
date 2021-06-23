import React from "react";
import { View } from "react-native";
import { Text } from "@ui-kitten/components";
import { Foundation } from "@expo/vector-icons";
const Home = (props) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40 }}>Home</Text>
    </View>
  );
};

Home.navigationOptions = {
  title: "Find",
  tabBarIcon: <Foundation name="target-two" size={20} />,
};

export default Home;

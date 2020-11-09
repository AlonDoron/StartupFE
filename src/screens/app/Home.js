import React from "react";
import { View } from "react-native";
import { Text } from "@ui-kitten/components";
import { Foundation } from "@expo/vector-icons";
import i18n from '../../i18n'
const Home = (props) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40 }}>Home</Text>
    </View>
  );
};

Home.navigationOptions = {
  title: i18n.t('bottomTabs.homeTab'),
  tabBarIcon: <Foundation name="target-two" size={20} />,
};

export default Home;

import React from "react";
import { StyleSheet, View } from "react-native";
import { useLocation } from "../../hooks";
import { withNavigationFocus } from "react-navigation";
import { Map } from "../../components/common";

const Home = ({ isFocused }) => {
  const [err] = useLocation(isFocused);
  return (
    <View style={{ flex: 1 }}>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </View>
  );
};

export default withNavigationFocus(Home);

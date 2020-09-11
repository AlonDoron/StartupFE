import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Foundation } from "@expo/vector-icons";
import { useLocation } from "../../hooks";
import { withNavigationFocus } from "react-navigation";
import { Map, SearchBar } from "../../components/common";
import { Marker } from "react-native-maps";

const Home = ({ isFocused }) => {
  const [initLocation, setInitLocation] = useState({});
  const getLocation = (location) => {
    setInitLocation(location.coords);
  };
  const [err] = useLocation(isFocused, getLocation);

  return (
    <View style={{ flex: 1 }}>
      <SearchBar />
      <Map
        currentLocation={{
          latitude: 31.9884232,
          longitude: 34.7788025,
        }}
      ></Map>
      {err ? <Text>Please enable location services</Text> : null}
    </View>
  );
};

Home.navigationOptions = {
  title: "Find",
  tabBarIcon: <Foundation name="target-two" size={20} />,
};

export default withNavigationFocus(Home);

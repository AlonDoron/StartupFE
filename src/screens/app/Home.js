import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useLocation } from "../../hooks";
import { withNavigationFocus } from "react-navigation";
import { Map, SearchBar } from "../../components/common";

const Home = ({ isFocused }) => {
  const [initLocation, setInitLocation] = useState({});
  const getLocation = (location) => {
    setInitLocation(location.coords);
  };

  const [err] = useLocation(isFocused, getLocation);
  return (
    <View style={{ flex: 1 }}>
      <SearchBar />
      <Map currentLocation={initLocation} />
      {err ? <Text>Please enable location services</Text> : null}
    </View>
  );
};

export default withNavigationFocus(Home);

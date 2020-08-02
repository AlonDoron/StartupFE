import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Foundation } from "@expo/vector-icons";
import { useLocation } from "../../hooks";
import { withNavigationFocus } from "react-navigation";
import { Map, SearchBar } from "../../components/common";
import HttpClient from "../../api/HttpClient";
import apiConfig from "../../config/apiConfig";
import { Marker } from "react-native-maps";
const Home = ({ isFocused }) => {
  const [initLocation, setInitLocation] = useState({});
  const getLocation = (location) => {
    setInitLocation(location.coords);
  };

  const [err] = useLocation(isFocused, getLocation);
  useEffect(() => {
    if (initLocation) {
      console.log(
        `${apiConfig.SERVER_URL}:${apiConfig.CONSUMER_PORT}/api/Consumer?Latitude=${initLocation.latitude}&Longitude=${initLocation.longitude}&Radius=1000&MeasureUnit=0`
      );
      HttpClient.get(
        apiConfig.SERVER_URL,
        apiConfig.CONSUMER_PORT,
        `api/Consumer?Latitude=${initLocation.latitude}&Longitude=${initLocation.longitude}&Radius=1000&MeasureUnit=0`
      )
        .then((result) => {
          console.log("result", result);
        })
        .catch((err) => console.log(err));
    } else console.log("initLocation is undefine");
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <SearchBar />
      <Map currentLocation={initLocation} />
      {err ? <Text>Please enable location services</Text> : null}
    </View>
  );
};

Home.navigationOptions = {
  title: "Find",
  tabBarIcon: <Foundation name="target-two" size={20} />,
};

export default withNavigationFocus(Home);

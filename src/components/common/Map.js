import React from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

const Map = ({ currentLocation }) => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    />
  );
};

const styles = StyleSheet.create({
  map: {
    height: "90%",
  },
});

export default Map;

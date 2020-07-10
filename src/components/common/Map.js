import React from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

const Map = (props) => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        longitude: 34.7368496,
        latitude: 31.8859948,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    />
  );
};

const styles = StyleSheet.create({
  map: {
    height: "100%",
  },
});

export default Map;

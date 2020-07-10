import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle, Marker } from "react-native-maps";

const Map = (props) => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        longitude: 37.218475,
        latitude: 32.248575,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      }}
    ></MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: "100%",
  },
});

export default Map;

import React, { Children } from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

const Map = ({ currentLocation, children }) => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 31.9884232,
        longitude: 34.7788025,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      {children}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: "90%",
  },
});

export default Map;

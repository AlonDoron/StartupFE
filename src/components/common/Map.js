import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView from 'react-native-maps'
const Map = ({children, location}) => {
  return (
     <MapView
      style={styles.map}
      initialRegion={{
        ...location,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      }}
    >
      {children}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default Map;

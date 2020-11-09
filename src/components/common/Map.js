import React from "react";
import { StyleSheet } from "react-native";
import MapView from 'react-native-maps'
import { locationConfig } from '../../config'
const Map = ({children, location}) => {
  return (
     <MapView
      style={styles.map}
      initialRegion={{
       ...location,
       ...locationConfig.initDeltaCoords
      }}>
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

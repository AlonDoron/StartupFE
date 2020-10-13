import React from "react";
import { StyleSheet } from "react-native";
import MapView from 'react-native-maps'
import {locationConfig} from '../../config'
const OfflineMap = (props) => {
  return (
     <MapView
      style={styles.map}
      initialRegion={{
        ...locationConfig.initLocation,
        ...locationConfig.initDeltaCoords,
      }}>
      {props.children}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default OfflineMap;

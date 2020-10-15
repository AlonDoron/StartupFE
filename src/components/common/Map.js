import React from "react";
import { StyleSheet } from "react-native";
import MapView,{Circle, Marker} from 'react-native-maps'
import { locationConfig } from '../../config'
const Map = ({children, location}) => {
  return (
     <MapView
      style={styles.map}
      initialRegion={{
       ...location,
       ...locationConfig.initDeltaCoords
      }}>
         <Marker pinColor='#FFD700' coordinate={location} title='Consumer'/>
      <Circle center={location} radius={locationConfig.radius}/>
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

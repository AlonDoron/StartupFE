import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView from 'react-native-maps'
const Map = ({children, location}) => {
  const [initialLocation, setInitialLocation] = useState({})

  useEffect(() => {
    if(!location || Object.keys(location).length === 0){
      setInitialLocation({latitude: 31.9882718,
    longitude: 34.7789174})
    }   
    else setInitialLocation(location)
  }, [location])

  return (
     <MapView
      style={styles.map}
      initialRegion={{
        ...initialLocation,
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

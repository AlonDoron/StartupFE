import React from "react";
import { ProvidersList } from "../providers";
import MapView from "react-native-maps";
import { Layout } from "@ui-kitten/components";
import { StyleSheet, Dimensions } from "react-native";
import { mapsConfig } from "config";

const MapviewWrapper = (props) => {
  return (
    <Layout>
      <MapView
        moveOnMarkerPress={false}
        style={styles.mapStyle}
        initialRegion={mapsConfig.INITIAL_REGION}
      >
        <ProvidersList
          onProviderPress={props.onProviderPress}
          userLocation={props.userLocation}
        />
      </MapView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapviewWrapper;

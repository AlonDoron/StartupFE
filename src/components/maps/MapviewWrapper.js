import React from "react";
import ProvidersList from "./ProvidersList";
import { View } from "react-native";
import MapView from "react-native-maps";
import { Layout } from "@ui-kitten/components";
import { StyleSheet, Dimensions } from "react-native";
import { mapsConfig } from "config";

const MapviewWrapper = (props) => {
  return (
    <Layout>
      <MapView
        style={styles.mapStyle}
        initialRegion={mapsConfig.INITIAL_REGION}
      >
        <ProvidersList />
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

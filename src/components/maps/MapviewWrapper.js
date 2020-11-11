import React from "react";
import ProvidersList from "./ProvidersList";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { Layout, Text } from "@ui-kitten/components";
import { StyleSheet, Dimensions, View } from "react-native";
import { mapsConfig } from "config";

const MapviewWrapper = (props) => {
  const providersListMock = [
    {
      id: 1,
      location: {
        longitude: 34.780806,
        latitude: 32.081583,
      },
      title: "drug store",
      description: "best shit in town",
    },
    {
      id: 2,
      location: {
        longitude: 34.780806,
        latitude: 20.081583,
      },
      title: "shoes store",
      description: "great shoes!",
    },
  ];

  return (
    <Layout>
      <MapView
        style={styles.mapStyle}
        initialRegion={mapsConfig.INITIAL_REGION}
      >
        <ProvidersList providers={providersListMock} />
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

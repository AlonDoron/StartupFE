import React from "react";
import MapView from "react-native-maps";
import { Layout, Text } from "@ui-kitten/components";
import { StyleSheet, Dimensions } from "react-native";

const MapviewWrapper = (props) => {
  return (
    <Layout>
      <MapView style={styles.mapStyle} />
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

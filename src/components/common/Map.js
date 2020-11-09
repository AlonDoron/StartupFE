import React from "react";
import { StyleSheet, View, Text } from "react-native";
const Map = (props) => {
  return (
    <View style={styles.map}>
      <Text style={{ color: "red" }}>Map</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Map;

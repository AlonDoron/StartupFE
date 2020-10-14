import React from "react";
import { StyleSheet, View } from "react-native";
import { Spinner } from "@ui-kitten/components";

const LoadingIndicator = (props) => {
  return (
    <View style={[props.style, styles.indicator]}>
      <Spinner size="medium" />
    </View>
  );
};

const styles = StyleSheet.create({
  indicator: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadingIndicator;

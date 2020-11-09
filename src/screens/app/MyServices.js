import React from "react";
import { View } from "react-native";
import { Text, Button } from "@ui-kitten/components";

const MyServices = (props) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40 }}>Dont have a shop yet?</Text>
      <Button onPress={() => props.navigation.navigate('CreateStore')}>Create Store</Button>
    </View>
  );
};


export default MyServices;

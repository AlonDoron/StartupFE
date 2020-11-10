import React from "react";
import { View } from "react-native";
import { Text, Button } from "@ui-kitten/components";
import i18n from 'i18n'
const MyServices = (props) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40 }}>Dont have a shop yet?</Text>
      <Button onPress={() => props.navigation.navigate('CreateStore')}>{i18n.t("myServices.createStore")}</Button>
    </View>
  );
};


export default MyServices;

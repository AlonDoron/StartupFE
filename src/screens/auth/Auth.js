import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Auth = () => {
  return (
    <View>
      <View>
        <Text>Login</Text>
        {/* <TouchableOpacity onPress={props.navigation.navigate("Login")} /> */}
      </View>

      <View>
        <Text>Signup</Text>
        {/* <TouchableOpacity onPress={props.navigation.navigate("Signup")} /> */}
      </View>
    </View>
  );
};

export default Auth;

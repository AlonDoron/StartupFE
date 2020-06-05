import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Auth = (props) => {
  return (
    <View>
      <View>
        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
          <Text>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Auth;

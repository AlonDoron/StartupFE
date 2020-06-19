import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

const Auth = (props) => {
  return (
    <View>
      <View>
        <Button
          style={{ margin: "5%" }}
          mode="contained"
          onPress={() => props.navigation.navigate("Login")}
        >
          Login
        </Button>
      </View>

      <View>
        <Button
          style={{ margin: "5%" }}
          mode="contained"
          onPress={() => props.navigation.navigate("Signup")}
        >
          Signup
        </Button>
      </View>
    </View>
  );
};

export default Auth;

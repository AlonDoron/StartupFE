import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

const Auth = ({ navigation }) => {
  return (
    <View>
      <View>
        <Button
          style={{ margin: "5%" }}
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Button>
      </View>

      <View>
        <Button
          style={{ margin: "5%" }}
          mode="contained"
          onPress={() => navigation.navigate("Registration")}
        >
          Registration
        </Button>
      </View>
    </View>
  );
};

export default Auth;

import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import TokensHandler from "../../api/TokensHandler";

const Home = (props) => {
  const signout = () => {
    TokensHandler.removeTokenFromDevice().then(
      props.navigation.navigate("Auth")
    );
  };

  return (
    <View>
      <Button mode="contained" onPress={signout}>
        Sign out!
      </Button>
    </View>
  );
};

export default Home;

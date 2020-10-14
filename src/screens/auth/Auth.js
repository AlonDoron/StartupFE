import React from "react";
import { StyleSheet } from "react-native";
import { Button, Layout } from "@ui-kitten/components";
import i18n from "../../i18n";

const Auth = ({ navigation }) => {
  return (
    <Layout style={styles.container}>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        {i18n.t("login")}
      </Button>

      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Registration")}
      >
        {i18n.t("registration")}
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    padding: 20,
    textAlign: "center",
    margin: 30,
    width: 200,
  },
});

export default Auth;

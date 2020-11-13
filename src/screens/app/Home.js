import React from "react";
import { StyleSheet } from "react-native";
import { Text, Layout } from "@ui-kitten/components";
import { Foundation } from "@expo/vector-icons";
import { MapviewWrapper } from "components/maps";
import i18n from "i18n";

const Home = (props) => {
  const showModal = (provider) => {
    console.log(provider);
  };

  return (
    <Layout style={styles.container}>
      <Text style={{ fontSize: 40 }}>{i18n.t("home")}</Text>
      <MapviewWrapper handleProviderPress={showModal} />
    </Layout>
  );
};

Home.navigationOptions = {
  title: i18n.t("explore"),
  tabBarIcon: <Foundation name="target-two" size={20} />,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;

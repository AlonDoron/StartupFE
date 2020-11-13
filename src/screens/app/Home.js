import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Layout } from "@ui-kitten/components";
import { Foundation } from "@expo/vector-icons";
import { MapviewWrapper } from "components/maps";
import { ProviderModal } from "components/providers";
import i18n from "i18n";

const Home = (props) => {
  const [isProviderModalVisible, setProviderModalVisible] = useState(false);
  const [currProvider, setCurrProvider] = useState({});

  const showModal = (provider) => {
    setProviderModalVisible(true);
    setCurrProvider(provider);
  };

  const handleHideModal = () => {
    setProviderModalVisible(false);
  };

  return (
    <Layout style={styles.container}>
      <Text style={{ fontSize: 40 }}>{i18n.t("home")}</Text>
      <MapviewWrapper onProviderPress={showModal} />
      {isProviderModalVisible && (
        <ProviderModal
          isVisible={isProviderModalVisible}
          onHideModal={handleHideModal}
          providerData={currProvider}
        />
      )}
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

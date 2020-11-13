import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Layout } from "@ui-kitten/components";
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

  const hideModal = () => {
    setProviderModalVisible(false);
    setCurrProvider({});
  };

  return (
    <Layout style={styles.container}>
      <MapviewWrapper onProviderPress={showModal} />
      {isProviderModalVisible && (
        <ProviderModal
          style={styles.modal}
          isVisible={isProviderModalVisible}
          onHideModal={hideModal}
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
  modal: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default Home;

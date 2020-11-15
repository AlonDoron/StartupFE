import React from "react";
import { View } from "react-native";
import { Text, Button, Layout } from "@ui-kitten/components";
import Modal from "react-native-modal";
import i18n from "i18n";

const ProviderModal = (props) => {
  return (
    <Modal
      isVisible={props.isVisible}
      swipeDirection={["left", "right", "down"]}
      style={props.style}
      onSwipeComplete={props.onHideModal}
      onBackdropPress={props.onHideModal}
      animationIn="zoomInDown"
      backdropOpacity={0.1}
    >
      <Layout>
        <View style={{ marginLeft: "2%", marginTop: "1%", marginBottom: "1%" }}>
          <Text>
            {i18n.t("firstName")}: {props.providerData.FirstName}
          </Text>
          <Text>
            {i18n.t("lastName")}: {props.providerData.LastName}
          </Text>
          <Text>
            {i18n.t("title")}: {props.providerData.Title}
          </Text>
          <Text>
            {i18n.t("profession")}: {props.providerData.Profession}
          </Text>

          <Text>
            {i18n.t("rating")}: {props.providerData.Rating}
          </Text>
        </View>
        <Button onPress={props.onHideModal}>Press To Close!</Button>
      </Layout>
    </Modal>
  );
};

export default ProviderModal;

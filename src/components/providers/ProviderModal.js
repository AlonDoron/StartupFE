import React from "react";
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
      backdropOpacity={0.1}
    >
      <Layout>
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

        <Button onPress={props.onHideModal}>Press To Close!</Button>
      </Layout>
    </Modal>
  );
};

export default ProviderModal;

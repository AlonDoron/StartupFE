import React from "react";
import { StyleSheet } from "react-native";
import { Text, Button } from "@ui-kitten/components";
import Modal from "react-native-modal";

const ProviderModal = (props) => {
  console.log(props.providerData);
  return (
    <Modal
      isVisible={props.isVisible}
      swipeDirection={["up", "left", "right", "down"]}
      style={styles.view}
      onBackdropPress={() => props.hideModal}
    >
      <Text>ID: {props.providerData.Id}</Text>
      <Text>
        {props.providerData.FirstName}
        {props.providerData.LastName}
      </Text>
      <Text>{props.providerData.Title}</Text>
      <Button onPress={props.onHideModal}>Press To Close!</Button>
    </Modal>
  );
};

const styles = StyleSheet.create({
  view: {},
});

export default ProviderModal;

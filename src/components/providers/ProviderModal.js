import React from "react";
import { Text, Button } from "@ui-kitten/components";
import Modal from "react-native-modal";

const ProviderModal = (props) => {
  console.log(props.providerData);
  return (
    <Modal
      isVisible={props.isVisible}
      swipeDirection={["left", "right", "down"]}
      style={props.style}
      onSwipeComplete={props.onHideModal}
      onBackdropPress={props.onHideModal}
      animationInTiming={250}
      coverScreen={false}
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

export default ProviderModal;

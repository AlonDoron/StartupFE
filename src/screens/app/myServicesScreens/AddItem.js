import React from "react";
import { AddItemForm } from "forms";

const AddItem = ({ navigation }) => {
  const addStoreItem = navigation.state.params.addStoreItem;

  const handleSubmitForm = (newItemdata) => {
    console.log("newItem", newItemdata);
    addStoreItem({
      ...newItemdata,
      Images: [
        require("./_mockData/_mockItemImg1.jpg"),
        require("./_mockData/_mockItemImg2.jpg"),
        require("./_mockData/_mockItemImg3.jpg"),
      ],
      key: "777",
    });
    navigation.goBack();
  };

  return <AddItemForm submitForm={handleSubmitForm} />;
};

export default AddItem;

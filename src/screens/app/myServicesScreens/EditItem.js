import React from "react";
import { AddItemForm } from "forms";

const EditItem = ({ navigation }) => {
  const onEdit = navigation.state.params.onEdit;
  const itemData = navigation.state.params.itemData;

  const handleSubmitForm = (newItemdata) => {
    const editedItem = { ...newItemdata, Images: [...itemData.Images] };
    onEdit(editedItem.key, editedItem);
    navigation.goBack();
  };

  return <AddItemForm submitForm={handleSubmitForm} editData={itemData} />;
};

export default EditItem;

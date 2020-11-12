import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Button, ListItem } from "@ui-kitten/components";

const StoreListItem = ({ itemData, navigation, onDelete }) => (
  <ListItem
    onPress={() => navigation.navigate("StoreItem", { itemData })}
    title={itemData.ItemName}
    description={itemData.ItemDescription}
    accessoryLeft={() => (
      <Avatar style={{ tintColor: null }} source={itemData.Images[0]} />
    )}
    accessoryRight={() => {
      return (
        <View style={styles.btnContainer}>
          <Button size="tiny">Edit</Button>
          <Button size="tiny" onPress={() => onDelete(itemData.key)}>
            Delete
          </Button>
        </View>
      );
    }}
  />
);

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default StoreListItem;

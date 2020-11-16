import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Button, Layout, ListItem, Text } from "@ui-kitten/components";

const StoreListItem = ({ itemData, navigation, onDelete, onEdit }) => {
  return (
    <Layout style={styles.itemContainer}>
      <ListItem
        onPress={() => navigation.navigate("StoreItem", { itemData })}
        title={() => <Text style={{ fontSize: 20 }}>{itemData.ItemName}</Text>}
        description={() => (
          <Text style={{ fontSize: 12 }}>{itemData.ItemDescription}</Text>
        )}
        accessoryLeft={() => (
          <Avatar style={{ tintColor: null }} source={itemData.Images[0]} />
        )}
        accessoryRight={() => {
          return (
            <Layout style={styles.btnContainer}>
              <Button
                style={{ flex: 1, margin: 5 }}
                size="small"
                onPress={() => {
                  navigation.navigate("EditItem", {
                    itemData,
                    onEdit,
                  });
                }}
              >
                Edit
              </Button>
              <Button
                style={{ flex: 1, margin: 5 }}
                size="small"
                onPress={() => onDelete(itemData.key)}
              >
                Delete
              </Button>
            </Layout>
          );
        }}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: "2.5%",
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100%",
  },
});

export default StoreListItem;

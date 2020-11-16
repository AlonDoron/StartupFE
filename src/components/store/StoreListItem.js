import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Button, Layout, ListItem, Text } from "@ui-kitten/components";
import i18n from "i18n";
const StoreListItem = ({ itemData, navigation, onDelete, onEdit }) => {
  const title = () => <Text category="s1">{itemData.ItemName}</Text>;
  const subtitle = () => <Text category="s2">{itemData.ItemDescription}</Text>;
  const miniImage = () => (
    <Avatar style={{ tintColor: null }} source={itemData.Images[0]} />
  );
  return (
    <Layout style={styles.itemContainer}>
      <ListItem
        onPress={() => navigation.navigate("StoreItem", { itemData })}
        title={title}
        description={subtitle}
        accessoryLeft={miniImage}
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
                {i18n.t("myServices.storeItem.editItem")}
              </Button>
              <Button
                style={{ flex: 1, margin: 5 }}
                size="small"
                onPress={() => onDelete(itemData.key)}
              >
                {i18n.t("myServices.storeItem.deleteItem")}
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

import React from "react";
import { StyleSheet } from "react-native";
import { List, Divider, Layout } from "@ui-kitten/components";
import StoreListItem from "./StoreListItem";

const StoreItemsList = (props) => {
  return (
    <Layout style={{ flex: 1, width: "100%" }}>
      <List
        contentContainerStyle={styles.listContaier}
        scrollEnabled
        data={props.storeItems}
        renderItem={({ item, index }) => (
          <StoreListItem
            onEdit={props.editStoreItem}
            onDelete={props.onDelete}
            itemData={item}
            key={index}
            navigation={props.navigation}
          />
        )}
        ItemSeparatorComponent={Divider}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  listContaier: {
    justifyContent: "space-around",
  },
});

export default StoreItemsList;

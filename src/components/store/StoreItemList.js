import React from "react";
import { StyleSheet, ScrollView, FlatList } from "react-native";
import { Text, List, Divider, Layout } from "@ui-kitten/components";
import StoreListItem from "./StoreListItem";
const StoreItemList = (props) => {
  return (
    <Layout style={{ flex: 1, width: "100%" }}>
      <List
        contentContainerStyle={styles.listContaier}
        scrollEnabled={true}
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
    // flex: 1,
    justifyContent: "space-around",
    // maxHeight: 1000,
  },
});

export default StoreItemList;

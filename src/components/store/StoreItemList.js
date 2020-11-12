import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Text, List, Divider } from "@ui-kitten/components";
import StoreListItem from "./StoreListItem";
const StoreItemList = (props) => {
  return (
    <List
      data={props.storeItems}
      renderItem={({ item, index }) => (
        <StoreListItem
          onDelete={props.onDelete}
          style={{ margin: 10 }}
          itemData={item}
          key={index}
          navigation={props.navigation}
        />
      )}
      ItemSeparatorComponent={Divider}
    />
  );
};

export default StoreItemList;

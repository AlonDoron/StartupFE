import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { Text, List, Divider, Layout } from "@ui-kitten/components";
import { ImageSwiper } from "components/common";
const StoreItem = (props) => {
  const window = useWindowDimensions();
  const itemData = props.navigation.state.params.itemData;
  console.log(itemData);

  return (
    <Layout style={{ flex: 1 }}>
      <Layout style={{ flex: 3, alignItems: "center" }}>
        <Text
          category="h1"
          style={{
            flex: 1,
          }}
        >
          {itemData.ItemName}
        </Text>
        <Text category="h2" style={{ flex: 1 }}>
          Price: {itemData.ItemPrice}
        </Text>
        <Text category="h3" style={{ flex: 2 }}>
          {itemData.ItemDescription}
        </Text>
      </Layout>
      <Layout style={{ flex: 2 }}>
        <ImageSwiper images={itemData.Images} />
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  listContaier: {
    //  width:window.wi
  },
});

export default StoreItem;

import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Layout } from "@ui-kitten/components";
import { StoreItemList } from "components/store";
import _mockStoreitems from "./_mockData/_mockStoreItems";
import i18n from "i18n";

const ProviderStore = ({ navigation }) => {
  const storeName = navigation.state.params.storeName;
  const [storeItems, setStoreItems] = useState([]);

  useEffect(() => {
    setStoreItems(_mockStoreitems);
  }, []);

  const addStoreItem = (newItem) => {
    setStoreItems((prevItems) => [
      ...prevItems,
      { key: prevItems.length, ...newItem },
    ]);
  };

  const deleteStoreItem = (itemKey) => {
    let updatedStoreItems = storeItems.filter((item) => item.key !== itemKey);
    setStoreItems(updatedStoreItems);
  };
  return (
    <Layout style={{ flex: 1 }}>
      <Text category="h1" style={styles.storeTitle}>
        {storeName}
      </Text>
      <StoreItemList
        storeItems={storeItems}
        navigation={navigation}
        onAdd={addStoreItem}
        onDelete={deleteStoreItem}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  storeTitle: {
    alignSelf: "center",
  },
});

export default ProviderStore;

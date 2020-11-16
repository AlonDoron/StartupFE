import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Layout, Icon, Button } from "@ui-kitten/components";
import { StoreItemList } from "components/store";
import _mockStoreitems from "./_mockData/_mockStoreItems";
import i18n from "i18n";
import { ScrollView } from "react-native";

const ProviderStore = ({ navigation }) => {
  const storeName = navigation.state.params.storeName;
  const [storeItems, setStoreItems] = useState([]);

  useEffect(() => {
    setStoreItems(_mockStoreitems);
  }, []);

  const addStoreItem = (newItem) => {
    setStoreItems((prevItems) => [...prevItems, newItem]);
  };

  const deleteStoreItem = (itemKey) => {
    let updatedStoreItems = storeItems.filter((item) => item.key !== itemKey);
    setStoreItems(updatedStoreItems);
  };

  const editStoreItem = (itemKey, newItemData) => {
    console.log(newItemData);
    let tempStoreItems = [...storeItems];
    const itemToEditIndex = tempStoreItems.findIndex(
      (item) => item.key == itemKey
    );

    console.log("Before update: ", tempStoreItems[itemToEditIndex]);

    tempStoreItems[itemToEditIndex] = newItemData;

    console.log("After update: ", tempStoreItems[itemToEditIndex]);
    setStoreItems(tempStoreItems);
  };

  return (
    <Layout style={{ flex: 1 }}>
      <Layout style={styles.storeHeader}>
        <Layout style={styles.titleContainer}>
          <Text category="h3" style={styles.storeTitle}>
            {storeName}
          </Text>
        </Layout>
        <TouchableOpacity
          style={styles.addItemIconContainer}
          onPress={() => navigation.navigate("AddItem", { addStoreItem })}
        >
          <Icon
            style={styles.addItemIcon}
            fill="#8F9BB3"
            name="plus-circle-outline"
          />
        </TouchableOpacity>
      </Layout>
      <StoreItemList
        editStoreItem={editStoreItem}
        style={styles.itemList}
        storeItems={storeItems}
        navigation={navigation}
        onDelete={deleteStoreItem}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  storeHeader: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  itemList: {
    flex: 1,
  },
  titleContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  storeTitle: {},
  editContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  editStore: {
    width: "90%",
    height: "80%",
  },
  addItemIconContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  addItemIcon: {
    width: 50,
    height: 50,
  },
});

export default ProviderStore;

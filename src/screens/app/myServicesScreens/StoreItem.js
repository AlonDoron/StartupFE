import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text, List, Divider } from "@ui-kitten/components";

const StoreItem = (props) => {
  const itemData = props.navigation.state.params.itemData;
  console.log(itemData);
  return (
    <View>
      <Text category="h1">{itemData.ItemName}</Text>
      <Text category="h2">{itemData.ItemPrice}</Text>
      <Text category="h3">{itemData.ItemDescription}</Text>
      <List
        data={itemData.Images}
        keyExtractor={(value, index) => JSON.stringify(index)}
        renderItem={({ item, index }) => (
          <Image
            style={{ margin: 10, alignSelf: "center" }}
            source={item}
            width={100}
            height={100}
          />
        )}
        ItemSeparatorComponent={Divider}
      />
    </View>
  );
};

export default StoreItem;

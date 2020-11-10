import React, { useState } from "react";
import { View } from "react-native";
import { Text, Layout } from "@ui-kitten/components";
import { StoreItemList } from 'components/store'
import i18n from 'i18n';

const ProviderStore = ({ navigation }) => {
    const storeName = navigation.state.params.storeName;
    const [storeItems, setStoreItems] = useState([])

    const addStoreItem = (newItem) => {
        setStoreItems(prevItems => [...prevItems, { key: prevItems.length, ...newItem }])
    }

    const deleteStoreItem = (itemKey) => {
        let updatedStoreItems = storeItems.filter((item) => item.key !== itemKey)
        setStoreItems(updatedStoreItems)
    }
    return (
        <Layout style={{ flex: 1 }}>
            <Text>{storeName}</Text>
            <StoreItemList
                storeItems={storeItems}
                navigation={navigation}
                onAdd={addStoreItem}
                onDelete={deleteStoreItem}
            />
        </Layout>
    );
};


export default ProviderStore;

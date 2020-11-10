import React from "react";
import { View } from "react-native";
import { Text, Layout } from "@ui-kitten/components";
import { StoreItemList } from 'components/store'
import i18n from 'i18n';

let storeItems = [
    {
        itemName: 'bob1',
        itemPrice: '20'
    },
    {
        itemName: 'bob2',
        itemPrice: '20'
    },
    {
        itemName: 'bob3',
        itemPrice: '20'
    },
    {
        itemName: 'bob1',
        itemPrice: '20'
    },
    {
        itemName: 'bob2',
        itemPrice: '20'
    },
    {
        itemName: 'bob3',
        itemPrice: '20'
    },
    {
        itemName: 'bob1',
        itemPrice: '20'
    },
    {
        itemName: 'bob2',
        itemPrice: '20'
    },
    {
        itemName: 'bob3',
        itemPrice: '20'
    },
    {
        itemName: 'bob1',
        itemPrice: '20'
    },
    {
        itemName: 'bob2',
        itemPrice: '20'
    },
    {
        itemName: 'bob3',
        itemPrice: '20'
    },
    {
        itemName: 'bob1',
        itemPrice: '20'
    },
    {
        itemName: 'bob2',
        itemPrice: '20'
    },
    {
        itemName: 'bob3',
        itemPrice: '20'
    },
]

const ProviderStore = ({ navigation }) => {
    const storeName = navigation.state.params.storeName;
    return (
        <Layout style={{ flex: 1 }}>
            <Text>{storeName}</Text>
            <StoreItemList storeItems={storeItems} navigation={navigation} />
        </Layout>
    );
};


export default ProviderStore;

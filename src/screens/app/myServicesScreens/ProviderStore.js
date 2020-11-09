import React from "react";
import { View } from "react-native";
import { Text } from "@ui-kitten/components";
import { StoreItem } from '../../../components/store'
import i18n from '../../../i18n';

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
]

const ProviderStore = ({ navigation }) => {
    const storeName = navigation.state.params.storeName;
    return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text>{storeName}</Text>
            {
                storeItems.map((value, i) => {
                    return (
                        <StoreItem key={i} itemName={value.itemName} itemPrice={value.itemPrice} />
                    )
                })
            }
        </View>
    );
};


export default ProviderStore;

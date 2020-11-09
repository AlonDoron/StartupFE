import React from "react";
import { View } from "react-native";
import { Text } from "@ui-kitten/components";
import i18n from '../../../i18n';

const ProviderStore = ({ navigation }) => {
    const storeName = navigation.state.params.storeName;
    return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text>{storeName}</Text>
        </View>
    );
};


export default ProviderStore;

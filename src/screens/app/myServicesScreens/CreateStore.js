import React from "react";
import { View } from "react-native";
import { Text } from "@ui-kitten/components";
import i18n from '../../../i18n';
import { CreateStoreForm } from '../../../forms'
const CreateStore = (props) => {

    const handleSubmit = (values) => {
        props.navigation.navigate('ProviderStore', {
            storeName: values.storeName
        })
    }


    return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <CreateStoreForm submitForm={handleSubmit} />
        </View>
    );
};


export default CreateStore;

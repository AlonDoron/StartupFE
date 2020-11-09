import React from "react";
import { View } from "react-native";
import { Text } from "@ui-kitten/components";
import i18n from '../../../i18n';
import { CreateStoreForm } from '../../../forms'
const CreateStore = (props) => {
    return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <CreateStoreForm />
        </View>
    );
};


export default CreateStore;

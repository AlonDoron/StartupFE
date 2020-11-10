import React from "react";
import { StyleSheet } from 'react-native'
import { Layout } from "@ui-kitten/components"
import i18n from 'i18n';
import { CreateStoreForm } from 'forms'
const CreateStore = (props) => {

    const handleSubmit = (values) => {
        props.navigation.navigate('ProviderStore', {
            storeName: values.storeName
        })
    }


    return (
        <Layout style={styles.container}>
            <CreateStoreForm submitForm={handleSubmit} />
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignContent: "center",
    },
});

export default CreateStore;

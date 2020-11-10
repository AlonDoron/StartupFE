import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Button } from "@ui-kitten/components";
import { Input, LoadingIndicator } from "../components/common";
import { Formik } from "formik";
import { createStoreSchema } from "../validations";
import i18n from "../i18n";

const CreateStoreForm = (props) => {
    return (
        <Layout>
            <Formik
                initialValues={{
                    storeName: "",
                }}
                validationSchema={createStoreSchema}
                onSubmit={(values) => props.submitForm(values)}
            >
                {(props) => (
                    <Layout style={styles.form1}>
                        <Input
                            name="storeName"
                            value={props.values.storeName}
                            handleChangeText={props.handleChange("storeName")}
                            label={i18n.t("myServices.storeName")}
                            keyboardType="default"
                            errors={props.touched.storeName && props.errors.storeName}
                        />

                        <Button
                            style={styles.button}
                            mode="outlined"
                            onPress={props.handleSubmit}
                            disabled={props.submitting}
                            accessoryLeft={LoadingIndicator}
                        >
                            {i18n.t("myServices.createStore")}
                        </Button>
                    </Layout>
                )}
            </Formik>
        </Layout>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 380,
        alignSelf: "center",
    },
});

export default CreateStoreForm;

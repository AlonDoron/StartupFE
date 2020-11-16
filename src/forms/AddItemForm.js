import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Button } from "@ui-kitten/components";
import { Input, LoadingIndicator } from "components/common";
import { Formik } from "formik";
import { addItemSchema } from "../validations";
import i18n from "i18n";

const AddItemForm = ({ editData, submitForm }) => {
  return (
    <Layout>
      <Formik
        initialValues={{
          ItemName: editData ? editData.ItemName : "",
          ItemPrice: editData ? editData.ItemPrice : "",
          ItemDescription: editData ? editData.ItemDescription : "",
          key: editData ? editData.key : "",
        }}
        validationSchema={addItemSchema}
        onSubmit={(values) => submitForm(values)}
      >
        {(props) => (
          <Layout style={styles.form1}>
            <Input
              name="ItemName"
              value={props.values.ItemName}
              handleChangeText={props.handleChange("ItemName")}
              label={i18n.t("myServices.storeItem.itemName")}
              keyboardType="default"
              errors={props.touched.ItemName && props.errors.ItemName}
            />
            <Input
              name="ItemPrice"
              value={props.values.ItemPrice}
              handleChangeText={props.handleChange("ItemPrice")}
              label={i18n.t("myServices.storeItem.itemPrice")}
              keyboardType="number-pad"
              errors={props.touched.ItemPrice && props.errors.ItemPrice}
            />
            <Input
              name="ItemDescription"
              value={props.values.ItemDescription}
              handleChangeText={props.handleChange("ItemDescription")}
              label={i18n.t("myServices.storeItem.itemDescription")}
              keyboardType="default"
              errors={
                props.touched.ItemDescription && props.errors.ItemDescription
              }
            />

            <Button
              style={styles.button}
              mode="outlined"
              onPress={props.handleSubmit}
              disabled={props.submitting}
              accessoryLeft={LoadingIndicator}
            >
              {i18n.t(
                `myServices.storeItem.${editData ? "editItem" : "createItem"}`
              )}
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

export default AddItemForm;

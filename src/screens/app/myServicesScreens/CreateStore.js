import React from "react";
import { StyleSheet } from "react-native";
import { Layout } from "@ui-kitten/components";
import { CreateStoreForm } from "forms";
const CreateStore = (props) => {
  const handleSubmit = (values) => {
    props.navigation.navigate("MyStore", {
      storeName: values.storeName,
    });
  };

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

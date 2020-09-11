import React, { useState } from "react";
import { useForm } from "../../hooks";
import { StyleSheet, View, Modal, Text } from "react-native";
import { Button } from "react-native-paper";
import Input from "./Input";

import { Entypo } from "@expo/vector-icons";

const SearchBar = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [values, handleChange, handleSubmit] = useForm();

  const message = (radius, job) => {
    console.log(`you searcing for ${job} within radius of ${radius}`);
  };

  return (
    <View style={styles.barContainer}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Entypo
          name="magnifying-glass"
          size={24}
          style={styles.icon}
          onPress={() => setModalVisible(true)}
        />
      </View>
      <Modal visible={modalVisible} animationType={"slide"}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 30,
          }}
        >
          <Entypo
            name="back"
            size={24}
            style={styles.icon}
            onPress={() => setModalVisible(false)}
          />

          <Input
            name="byRadius"
            value={values.byRadius || ""}
            onChange={(name, value) => handleChange(name, value)}
            label="Search By Radius"
            keyboardType="number-pad"
          />

          <Input
            name="bySubject"
            value={values.bySubject || ""}
            onChange={(name, value) => handleChange(name, value)}
            label="Search By Subject"
          />
          <Button
            title="Search"
            onPress={() => message(values.byRadius, values.bySubject)}
          >
            Search
          </Button>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  barContainer: {
    width: "100%",
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  con: {
    flex: 1,
  },
});

export default SearchBar;

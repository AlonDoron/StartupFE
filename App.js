import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";

import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./src/store";

const store = configureStore();

export default function App() {
  return (
    <ReduxProvider store={store}>
      <AppNavigator />
    </ReduxProvider>
  );
}

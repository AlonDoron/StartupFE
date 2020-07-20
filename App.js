import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";

import { Provider as StoreProvider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";

import configureStore from "./src/store/configureStore";
const store = configureStore();

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </StoreProvider>
  );
}

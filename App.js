import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";

import { Provider as StoreProvider } from "react-redux";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import configureStore from "./src/store/configureStore";
const store = configureStore();

export default function App() {
  return (
    <StoreProvider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <AppNavigator />
      </ApplicationProvider>
    </StoreProvider>
  );
}

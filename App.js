import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";

import { Provider as StoreProvider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { ApplicationProvider as KittenProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import configureStore from "./src/store/configureStore";
const store = configureStore();

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <KittenProvider {...eva} theme={eva.light}>
          <AppNavigator />
        </KittenProvider>
      </PaperProvider>
    </StoreProvider>
  );
}

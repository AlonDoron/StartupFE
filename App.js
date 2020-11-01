// import './src/_mockLocation'
import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { I18nManager } from "react-native";
import * as Localization from "expo-localization";
import { Appearance } from "react-native-appearance";

import { Provider as StoreProvider } from "react-redux";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import configureStore from "./src/store/configureStore";
const store = configureStore();

export default function App() {
  I18nManager.forceRTL(Localization.isRTL);

  return (
    <StoreProvider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva[Appearance.getColorScheme()]}>
        <AppNavigator />
      </ApplicationProvider>
    </StoreProvider>
  );
}

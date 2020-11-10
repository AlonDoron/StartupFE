import { createAppContainer, createSwitchNavigator } from "react-navigation";

import { AuthLoading } from "screens/auth";
import AuthStack from "./stacks/AuthStack";
import AppStack from "./stacks/AppStack";

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      Auth: AuthStack,
      App: AppStack,
    },
    { initialRouteName: "AuthLoading" }
  )
);

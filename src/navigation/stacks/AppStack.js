import { createBottomTabNavigator } from "react-navigation-tabs";
import { Home, Account, MyServices } from "~screens/app";

const AppStack = createBottomTabNavigator(
  {
    MyServices: {
      screen: MyServices,
    },
    Home: {
      screen: Home,
    },
    Account: {
      screen: Account,
    },
  },
  { initialRouteName: "Home" }
);

export default AppStack;

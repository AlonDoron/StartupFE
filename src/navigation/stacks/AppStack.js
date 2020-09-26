import { createBottomTabNavigator } from "react-navigation-tabs";
import { Home, Account, MyService } from "../../screens/app";

const AppStack = createBottomTabNavigator(
  {
    MyService: {
      screen: MyService,
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

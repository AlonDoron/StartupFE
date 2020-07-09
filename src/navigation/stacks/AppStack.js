import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Home, Account } from "../../screens/app";

const AppStack = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
    },
    Account: {
      screen: Account,
    },
  },
  { initialRouteName: "Home" }
);
// const AppStack = createStackNavigator(
//   {
//     Home: {
//       screen: Home,
//     },
//   },
//   { initialRouteName: "Home" }
// );

export default AppStack;

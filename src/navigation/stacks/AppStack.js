import { createBottomTabNavigator } from "react-navigation-tabs";
import { Home, Account } from "../../screens/app";
import MyServicesStack from './bottomTabStacks/MyServicesStack'


const AppStack = createBottomTabNavigator(
  {
    servicesStack: {
      screen: MyServicesStack
    },
    Home: {
      screen: Home,
    },
    Account: {
      screen: Account,
    },
  },
  { initialRouteName: "servicesStack" }
);

export default AppStack;

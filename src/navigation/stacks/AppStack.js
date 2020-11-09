import { createBottomTabNavigator } from "react-navigation-tabs";
import { Home, Account } from '../../screens/app'
import { ServicesStack } from './bottomTabStacks'


const AppStack = createBottomTabNavigator(
  {
    ServicesStack: {
      screen: ServicesStack,
    },
    Home: {
      screen: Home,
    },
    Account: {
      screen: Account,
    },
  },
  { initialRouteName: "ServicesStack" }
);

export default AppStack;

import { createStackNavigator } from "react-navigation-stack";
import { Home } from "../../screens/app";

const AppStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
  },
  { initialRouteName: "Home" }
);

export default AppStack;

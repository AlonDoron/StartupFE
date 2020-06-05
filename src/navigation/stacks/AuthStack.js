import { createStackNavigator } from "react-navigation-stack";
import { Auth, Signup, Login } from "../../screens/auth";

const AuthStack = createStackNavigator(
  {
    Auth: {
      screen: Auth,
    },
    Signup: {
      screen: Signup,
    },
    Login: {
      screen: Login,
    },
  },
  { initialRouteName: "Auth" }
);

export default AuthStack;

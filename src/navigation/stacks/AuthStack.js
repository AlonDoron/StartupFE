import { createStackNavigator } from "react-navigation-stack";
import {
  Auth,
  Signup,
  Login,
  VerifyLogin,
  VerifySignup,
} from "../../screens/auth";

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
    VerifyLogin: {
      screen: VerifyLogin,
    },
    VerifySignup: {
      screen: VerifySignup,
    },
  },
  { initialRouteName: "Auth" }
);

export default AuthStack;

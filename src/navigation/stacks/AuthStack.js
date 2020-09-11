import { createStackNavigator } from "react-navigation-stack";
import { Auth, Signup, Login, VerifyAuth } from "../../screens/auth";

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

    VerifyAuth: {
      screen: VerifyAuth,
    },
  },
  { initialRouteName: "Auth" }
);

export default AuthStack;

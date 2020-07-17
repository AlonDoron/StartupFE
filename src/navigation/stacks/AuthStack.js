import { createStackNavigator } from "react-navigation-stack";
import { Auth, Registration, Login, VerifyAuth } from "../../screens/auth";

const AuthStack = createStackNavigator(
  {
    Auth: {
      screen: Auth,
    },
    Registration: {
      screen: Registration,
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

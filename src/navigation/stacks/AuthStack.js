import { createStackNavigator } from "react-navigation-stack";
import { Auth, Signup, Login, VerifyLogin } from "../../screens/auth";

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
  },
  { initialRouteName: "Auth" }
);

export default AuthStack;

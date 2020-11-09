import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { MyServices } from "../../../screens/app";
import { AntDesign } from "@expo/vector-icons";


const servicesStack = createStackNavigator(
    {
        MyServices: {
            screen: MyServices
        }
    },
    {
        initialRouteName: 'MyServices',
    }
)

servicesStack.navigationOptions = {
    title: "My Services",
    tabBarIcon: <AntDesign name="home" size={20} />,
};

export default servicesStack;



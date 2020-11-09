import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { MyServices } from '../../../screens/app'
import { CreateStore } from '../../../screens/app/myServicesScreens'
import { AntDesign } from "@expo/vector-icons";


const ServicesStack = createStackNavigator(
    {
        MyServices: {
            screen: MyServices
        },
        CreateStore: {
            screen: CreateStore
        }
    },
    {
        initialRouteName: 'MyServices',
    }
)

ServicesStack.navigationOptions = {
    title: "My Services",
    tabBarIcon: <AntDesign name="home" size={20} />,
};

export default ServicesStack;



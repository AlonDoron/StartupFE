import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { MyServices } from '../../../screens/app'
import { CreateStore } from '../../../screens/app/myServicesScreens'
import { AntDesign } from "@expo/vector-icons";
import i18n from "../../../i18n";

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
    title: i18n.t('bottomTabs.myServicesTab'),
    tabBarIcon: <AntDesign name="home" size={20} />,
};

export default ServicesStack;



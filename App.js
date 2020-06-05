import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {
  LandPageScreen,
  PhoneNumberValidationTest,
  RegistrationScreen,
  LoginViaPhoneScreen,
  PhoneNumberValidation,
} from './src/screens';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

const App = () => {
  const createHomeStack = () => {
    const headerOption = {
      title: '',
      headerTintColor: '#000',
      headerTitleAlign: 'center',
      headerStatusBarHeight: 0,
      headerTransparent: true,
      headerStyle: {
        backgroundColor: 'none',
      },
    };
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="LandPage"
          component={LandPageScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginViaPhoneScreen"
          component={LoginViaPhoneScreen}
          options={{...headerOption, title: 'Login'}}
        />

        <Stack.Screen
          name="PhoneNumberValidationTest"
          component={PhoneNumberValidationTest}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="PhoneNumberValidation"
          component={PhoneNumberValidation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{...headerOption, title: 'Registration'}}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="LandPage" component={createHomeStack} />
        <Drawer.Screen
          name="PhoneNumberValidationTest"
          component={PhoneNumberValidationTest}
        />

        <Drawer.Screen
          name="LoginViaPhoneScreen"
          component={LoginViaPhoneScreen}
        />

        <Drawer.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;

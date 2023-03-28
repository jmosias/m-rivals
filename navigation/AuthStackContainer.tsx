import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Constants
import {AUTH_NAME, LOGIN_NAME, REGISTER_NAME} from '../constants/screenNames';

// Screens
import AuthScreen from '../screens/auth/AuthScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import LoginScreen from '../screens/auth/LoginScreen';

// Create stack
const Stack = createStackNavigator();

export default function AuthStackContainer(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName={AUTH_NAME}
      screenOptions={() => ({headerShown: false})}>
      <Stack.Screen name={AUTH_NAME} component={AuthScreen} />
      <Stack.Screen name={REGISTER_NAME} component={RegisterScreen} />
      <Stack.Screen name={LOGIN_NAME} component={LoginScreen} />
    </Stack.Navigator>
  );
}

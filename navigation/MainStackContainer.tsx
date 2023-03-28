import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Constants
import {DEFAULT_THEME} from '../constants/themes';
import {AUTH_STACK_NAME, BOTTOM_TABS_NAME} from '../constants/screenNames';

// Containers
import AuthStackContainer from './AuthStackContainer';
import BottomTabsContainer from './BottomTabsContainer';

// Create stack
const Stack = createStackNavigator();

export default function MainStackContainer(): JSX.Element {
  return (
    <NavigationContainer theme={DEFAULT_THEME}>
      <Stack.Navigator
        initialRouteName={BOTTOM_TABS_NAME}
        screenOptions={() => ({headerShown: false})}>
        <Stack.Screen name={AUTH_STACK_NAME} component={AuthStackContainer} />
        <Stack.Screen name={BOTTOM_TABS_NAME} component={BottomTabsContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

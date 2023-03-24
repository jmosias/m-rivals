import React from 'react';

import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
  DefaultTheme,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../styles/colors';

// Screens
import MessagesScreen from './screens/MessagesScreen';
import LeaderboardsScreen from './screens/LeaderboardsScreen';
import TournamentsScreen from './screens/TournamentsScreen';
import TeamScreen from './screens/TeamScreen';
import ProfileScreen from './screens/ProfileScreen';

// Screen names
const messagesName = 'Messages';
const leaderboardsName = 'Leaderboards';
const tournamentsName = 'Tournaments';
const teamName = 'Team';
const profileName = 'Profile';

// Theme
const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.black,
    color: COLORS.white,
  },
};

const Tab = createBottomTabNavigator();

export default function MainContainer(): JSX.Element {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Tab.Navigator
        initialRouteName={tournamentsName}
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 70,
            borderTopWidth: 0,
            backgroundColor: COLORS.black,
          },
          tabBarIcon: ({focused, size}) =>
            navigationIcon(route, {focused, size}),
        })}>
        <Tab.Screen name={messagesName} component={MessagesScreen} />
        <Tab.Screen name={leaderboardsName} component={LeaderboardsScreen} />
        <Tab.Screen name={tournamentsName} component={TournamentsScreen} />
        <Tab.Screen name={teamName} component={TeamScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function navigationIcon(
  route: RouteProp<ParamListBase, string>,
  {focused, size}: {focused: boolean; size: number},
) {
  let iconName = '';
  let routeName = route.name;

  if (routeName === messagesName) {
    iconName = focused ? 'chatbox' : 'chatbox-outline';
  } else if (routeName === leaderboardsName) {
    iconName = focused ? 'podium' : 'podium-outline';
  } else if (routeName === tournamentsName) {
    iconName = focused ? 'trophy' : 'trophy-outline';
  } else if (routeName === teamName) {
    iconName = focused ? 'people' : 'people-outline';
  } else if (routeName === profileName) {
    iconName = focused ? 'person' : 'person-outline';
  }

  return (
    <Ionicons
      name={iconName}
      color={focused ? COLORS.yellow : COLORS.white}
      size={size}
    />
  );
}

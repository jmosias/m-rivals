import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Constants
import COLORS from '../constants/colors';
import {
  MESSAGES_NAME,
  LEADERBOARDS_NAME,
  TOURNAMENTS_NAME,
  TEAM_NAME,
  PROFILE_NAME,
} from '../constants/screenNames';

// Screens
import MessagesScreen from '../screens/bottom_tabs/MessagesScreen';
import LeaderboardsScreen from '../screens/bottom_tabs/LeaderboardsScreen';
import TournamentsScreen from '../screens/bottom_tabs/TournamentsScreen';
import TeamScreen from '../screens/bottom_tabs/TeamScreen';
import ProfileScreen from '../screens/bottom_tabs/ProfileScreen';

// Components
import BottomTabsIcon from '../components/navigation/BottomTabsIcon';

// Create tabs
const Tab = createBottomTabNavigator();

export default function BottomTabsContainer(): JSX.Element {
  return (
    <Tab.Navigator
      initialRouteName={TOURNAMENTS_NAME}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
          backgroundColor: COLORS.black,
        },
        tabBarIcon: ({focused, size}) => BottomTabsIcon(route, focused, size),
      })}>
      <Tab.Screen name={MESSAGES_NAME} component={MessagesScreen} />
      <Tab.Screen name={LEADERBOARDS_NAME} component={LeaderboardsScreen} />
      <Tab.Screen name={TOURNAMENTS_NAME} component={TournamentsScreen} />
      <Tab.Screen name={TEAM_NAME} component={TeamScreen} />
      <Tab.Screen name={PROFILE_NAME} component={ProfileScreen} />
    </Tab.Navigator>
  );
}

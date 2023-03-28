import React from 'react';
import {ParamListBase, RouteProp} from '@react-navigation/native';

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

// Constants
import COLORS from '../../constants/colors';
import {
  LEADERBOARDS_NAME,
  MESSAGES_NAME,
  PROFILE_NAME,
  TEAM_NAME,
  TOURNAMENTS_NAME,
} from '../../constants/screenNames';

export default function BottomTabsIcon(
  route: RouteProp<ParamListBase, string>,
  focused: boolean,
  size: number,
) {
  let iconName = '';
  let routeName = route.name;

  if (routeName === MESSAGES_NAME) {
    iconName = focused ? 'chatbox' : 'chatbox-outline';
  } else if (routeName === LEADERBOARDS_NAME) {
    iconName = focused ? 'podium' : 'podium-outline';
  } else if (routeName === TOURNAMENTS_NAME) {
    iconName = focused ? 'trophy' : 'trophy-outline';
  } else if (routeName === TEAM_NAME) {
    iconName = focused ? 'people' : 'people-outline';
  } else if (routeName === PROFILE_NAME) {
    iconName = focused ? 'person' : 'person-outline';
  }

  return (
    <Ionicons
      name={iconName}
      color={focused ? COLORS.primary : COLORS.white}
      size={size}
    />
  );
}

import React from 'react';
import {Text, View} from 'react-native';

// Styles
import {viewStyles} from '../../styles';

export default function MessagesScreen(): JSX.Element {
  return (
    <View style={viewStyles.column}>
      <Text> messages </Text>
    </View>
  );
}

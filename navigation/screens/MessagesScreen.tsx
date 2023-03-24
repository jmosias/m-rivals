import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function MessagesScreen(): JSX.Element {
  return (
    <View style={styles.view}>
      <Text> messages </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function TeamScreen(): JSX.Element {
  return (
    <View style={styles.view}>
      <Text> team </Text>
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

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function TournamentsScreen(): JSX.Element {
  return (
    <View style={styles.view}>
      <Text> tournaments </Text>
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

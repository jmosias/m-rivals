import React from 'react';
import {View} from 'react-native';

// Styles
import {viewStyles} from '../../styles';

// Components
import AppButton from '../../components/AppButton';

export default function AuthScreen() {
  return (
    <View style={viewStyles.centered}>
      <AppButton text="Login" onPress={() => console.log('clicked')} />
      <AppButton text="Register" onPress={() => console.log('clicked')} />
    </View>
  );
}

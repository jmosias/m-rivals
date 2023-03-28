import React, {useState} from 'react';
import {KeyboardAvoidingView, View} from 'react-native';

// Styles
import {viewStyles} from '../../styles';

// Interfaces
import {IUser} from 'ts/interfaces';

// Components
import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';

export default function RegisterScreen(): JSX.Element {
  const [email, setEmail] = useState<IUser['email']>('');
  const [password, setPassword] = useState<IUser['password']>('');

  return (
    <KeyboardAvoidingView style={viewStyles.centered} behavior="padding">
      <View>
        <AppInput
          placeholder="Enter your email"
          value={email}
          setValue={setEmail}
        />
        <AppInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          isPassword={true}
        />
        <AppButton text="Register" onPress={() => console.log('clicked')} />
      </View>
    </KeyboardAvoidingView>
  );
}

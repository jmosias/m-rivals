import React from 'react';
import {TextInput} from 'react-native';

// Styles
import styles from './AppInput.styles';

// Props
type AppInputProps = {
  value: string;
  setValue: (v: React.SetStateAction<string>) => void;
  placeholder?: string;
  isPassword?: boolean;
};

export default function AppInput({
  value,
  setValue,
  placeholder,
  isPassword = false,
}: AppInputProps): JSX.Element {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={v => setValue(v)}
      secureTextEntry={isPassword}
      style={styles.container}
    />
  );
}

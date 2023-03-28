import React from 'react';
import {Pressable, Text} from 'react-native';

// Styles
import styles from './AppButton.styles';

// Props
type AppButtonProps = {
  text: string;
  onPress: () => void;
};

export default function AppButton({
  text,
  onPress,
}: AppButtonProps): JSX.Element {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

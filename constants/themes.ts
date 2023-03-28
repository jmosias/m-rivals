import {DefaultTheme} from '@react-navigation/native';

// Constants
import COLORS from './colors';

export const DEFAULT_THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.black,
    color: COLORS.white,
  },
};

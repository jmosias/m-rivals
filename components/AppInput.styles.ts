import {StyleSheet} from 'react-native';

// Utils
import {padding} from '../utils/styling';

// Constants
import COLORS from '../constants/colors';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.white,
    borderRadius: 3,
    ...padding(9, 12),
    color: COLORS.black,
    fontSize: 14,
  },
});

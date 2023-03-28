import {StyleSheet} from 'react-native';

// Utils
import {padding} from '../utils/styling';

// Constants
import COLORS from '../constants/colors';

export default StyleSheet.create({
  container: {
    borderRadius: 3,
    ...padding(9, 6),
    backgroundColor: COLORS.primary,
  },
  text: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

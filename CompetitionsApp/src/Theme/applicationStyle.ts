import {StyleSheet} from 'react-native';
import colors from './colors';
import fonts from './fonts';
import metrics from './metrics';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: metrics.horizontalPadding.paddingHorizontal,
    backgroundColor: '#FFFFFF',
  },
  title: {
    color: colors.black,
    fontSize: fonts.fontSize.dp40,
    backgroundColor: colors.lightBlue,
  },
});

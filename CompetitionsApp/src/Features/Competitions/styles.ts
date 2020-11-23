import applicationStyle from '@theme/applicationStyle';
import colors from '@theme/colors';
import fonts from '@theme/fonts';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  safeArea: {
    ...applicationStyle.safeArea,
  },
  title: {
    color: colors.black,
    fontSize: fonts.fontSize.dp60,
  },
  item: {
    height: 71,
    backgroundColor: colors.blue,
    opacity: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
});

import {StyleSheet} from 'react-native';
import applicationStyle from '../../Theme/applicationStyle';
import colors from '../../Theme/colors';
import fonts from '../../Theme/fonts';

export default StyleSheet.create({
  safeArea: {
    ...applicationStyle.safeArea,
  },
  title: {
    color: 'black',
    fontSize: fonts.fontSize.dp50,
    textAlign: 'center',
  },
  firstElement: {
    marginStart: 15,
  },
  image: {
    width: 66,
    height: 58,
  },
  item: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.blue,
    borderRadius: 10,
    marginTop: 4,
  },
});

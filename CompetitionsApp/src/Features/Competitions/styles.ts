import applicationStyle from '@theme/applicationStyle';
import colors from '@theme/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  safeArea: {
    ...applicationStyle.safeArea,
  },
  title: {
    ...applicationStyle.title,
  },
  item: {
    flexDirection: 'row',
    height: 40,
    opacity: 1,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 4,
    borderBottomColor: colors.black,
    borderBottomWidth: 0.5,
  },
  firstElement: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius:100,
    borderColor: colors.black,
    borderWidth: 2,
  },
  lastElement: {
    flex: 1,
    alignItems: 'flex-end',
    marginEnd: 15,
  },
  competitions: {
    fontSize: 20,
  },
  rank: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

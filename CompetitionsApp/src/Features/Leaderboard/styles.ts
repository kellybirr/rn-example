import {StyleSheet} from 'react-native';
import applicationStyle from '../../Theme/applicationStyle';

export default StyleSheet.create({
  safeArea: {
    ...applicationStyle.safeArea,
  },
  title: {
    ...applicationStyle.title,
  },
  firstElement: {
    marginStart: 15,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  item: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    borderRadius: 100,
    marginTop: 4,
  },
  name: {
    fontSize: 20,
  },
});

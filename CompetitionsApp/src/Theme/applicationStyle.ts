import {StyleSheet} from 'react-native';
import metrics from './metrics';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: metrics.horizontalPadding.paddingHorizontal,
    backgroundColor: '#FFFFFF',
  },
});

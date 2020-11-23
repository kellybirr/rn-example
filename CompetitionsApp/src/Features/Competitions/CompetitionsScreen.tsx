import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Competition from '@models/Competition/competition';
import {AppRoute} from '@navigation/app-routes';
import {LocalizationContext} from '@translations/Translations';
import useMountEffect from '@utils/Hooks/useMountEffect';
import styles from './styles';

type StoreProps = {
  competitions: Competition[];
};

type DispatchProps = {
  fetchCompetitions: () => void;
};

type Props = StoreProps & DispatchProps;
const CompetitionsScreen = (props: Props) => {
  const {competitions, fetchCompetitions} = props;
  console.log(props.competitions);
  const navigation = useNavigation();
  const {translations} = useContext(LocalizationContext);

  useMountEffect(() => {
    fetchCompetitions();
  });
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(AppRoute.Leaderboard, {leaders: item.leaders})
        }>
        <Text>
          {item.myRank} {item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>{translations.competitions}:</Text>
      {competitions.length !== 0 && (
        <FlatList
          data={competitions}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id.toString()}
        />
      )}
    </SafeAreaView>
  );
};

export default CompetitionsScreen;

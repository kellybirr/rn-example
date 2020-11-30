import useMountEffect from '@customHooks/useMountEffect';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Competition from '@models/Competition/competition';
import {AppRoute} from '@navigation/app-routes';
import {useNavigation} from '@react-navigation/native';
import colors from '@theme/colors';
import {LocalizationContext} from '@translations/Translations';
import React, {useContext} from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

type StoreProps = {
  competitions: Competition[];
  loading: boolean;
};

type DispatchProps = {
  fetchCompetitions: () => void;
};

type Props = StoreProps & DispatchProps;
const CompetitionsScreen = (props: Props) => {
  const {competitions, fetchCompetitions, loading} = props;
  const navigation = useNavigation();
  const {translations} = useContext(LocalizationContext);

  useMountEffect(() => {
    fetchCompetitions();
  });

  const renderItem = ({item}: any) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate(AppRoute.Leaderboard, {id: item.id})}>
      <View style={styles.firstElement}>
        <Text style={styles.rank}>{item.myRank}</Text>
      </View>
      <Text style={styles.competitions}> {item.name}</Text>
      <View style={styles.lastElement}>
        <FontAwesomeIcon
          icon={faAngleRight}
          size={18}
          color={colors.black}></FontAwesomeIcon>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>{translations.competitions}:</Text>
      {loading && <ActivityIndicator size="large" color={colors.blue} />}
      {!loading && competitions.length !== 0 && (
        <FlatList
          data={competitions}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id.toString()}
        />
      )}
      {!loading && <Button onPress={() => navigation.navigate(AppRoute.Login)} title="Logout" />}
    </SafeAreaView>
  );
};

export default CompetitionsScreen;

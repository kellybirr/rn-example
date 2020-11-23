import Leaders from '@models/Leaders/leaders';
import {LeadersRouteProp} from '@navigation/AppNavigator';
import {useRoute} from '@react-navigation/native';
import {RootState} from '@store/Root/RootState';
import {LocalizationContext} from '@translations/Translations';
import React, {useContext} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import styles from './styles';

const LeaderboardScreen = () => {
  const route = useRoute<LeadersRouteProp>();
  const id = route.params['id'];
  const {translations} = useContext(LocalizationContext);

  const leaders = useSelector((state: RootState) => {
    let leaders: Leaders[] = [];
    state.competitions.competitionData.find((element) => {
      if (element.id === id) {
        leaders = element.leaders;
      }
    });
    return leaders;
  });
  const renderItem = (item: Leaders, index: number) => {
    return (
      <View style={styles.item}>
        <Text style={styles.name}> #{index + 1}</Text>
        <View style={styles.firstElement}>
          {item.imageUrl !== null ? (
            <Image style={styles.image} source={{uri: item.imageUrl}}></Image>
          ) : (
            <Image
              style={styles.image}
              source={require('@assets/png/profile.png')}
            />
          )}
        </View>
        <View>
          <Text style={styles.name}>
            {item.displayName} - {item.score}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}> {translations.leadersboard} </Text>
      <FlatList
        data={leaders}
        renderItem={({item, index}) => renderItem(item, index)}
        keyExtractor={(item: Leaders) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default LeaderboardScreen;

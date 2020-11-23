import {LeadersRouteProp} from '@navigation/AppNavigator';
import {useRoute} from '@react-navigation/native';
import {LocalizationContext} from '@translations/Translations';
import React, {useContext} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

const LeaderboardScreen = () => {
  const route = useRoute<LeadersRouteProp>();
  const leaders = route.params['leaders'];
  const {translations} = useContext(LocalizationContext);

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <View style={styles.firstElement}>
        <Image style={styles.image} source={{uri: item.imageUrl}}></Image>
      </View>
      <View>
        <Text style={styles.title}>
          {item.displayName} - {item.score}
        </Text>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}> {translations.leadersboard} </Text>
      {leaders.length !== 0 && (
        <FlatList
          data={leaders}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id.toString()}
        />
      )}
    </SafeAreaView>
  );
};

export default LeaderboardScreen;

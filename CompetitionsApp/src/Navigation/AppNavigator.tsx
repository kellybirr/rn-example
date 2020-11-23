import Leaders from '@models/Leaders/leaders';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import CompetitionsContainer from '@features/Competitions/CompetitionsContainer';
import LeaderboardContainer from '@features/Leaderboard/LeaderboardContaier';
import {AppRoute} from './app-routes';

export type ParamList = {
  Competitions: undefined;
  Leaderboard: {
    leaders: Leaders[];
  };
};

export type LeadersRouteProp = RouteProp<ParamList, AppRoute.Leaderboard>;

const Stack = createStackNavigator<ParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Competitions">
        <Stack.Screen
          name={AppRoute.Competitions}
          component={CompetitionsContainer}
        />
        <Stack.Screen
          name={AppRoute.Leaderboard}
          component={LeaderboardContainer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

import CompetitionsContainer from '@features/Competitions/CompetitionsContainer';
import LeaderboardContainer from '@features/Leaderboard/LeaderboardContaier';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {AppRoute} from './app-routes';

export type ParamList = {
  Competitions: undefined;
  Leaderboard: {
    id: string;
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
          options={{
            headerShown: false,
          }}
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

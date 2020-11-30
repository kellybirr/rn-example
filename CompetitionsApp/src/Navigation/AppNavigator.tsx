import CompetitionsContainer from '@features/Competitions/CompetitionsContainer';
import LeaderboardContainer from '@features/Leaderboard/LeaderboardContainer';
import LoginContainer from '@features/Login/LoginContainer';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {AppRoute} from './app-routes';

export type ParamList = {
  Competitions: undefined;
  Login: {
    action?: string;
  };
  Leaderboard: {
    id: string;
  };
};

export type LoginRouteProp = RouteProp<ParamList, AppRoute.Login>;
export type LeadersRouteProp = RouteProp<ParamList, AppRoute.Leaderboard>;

const Stack = createStackNavigator<ParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={AppRoute.Login}>
        <Stack.Screen
          name={AppRoute.Login}
          component={LoginContainer}
          initialParams={{action: ''}}
        />
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

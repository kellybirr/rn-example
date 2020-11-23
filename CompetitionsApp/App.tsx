/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import AppNavigator from './src/Navigation/AppNavigator';
import {store} from './src/Stores/createStore';
import {LocalizationProvider} from './src/Translations/Translations';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <LocalizationProvider>
          <SafeAreaProvider>
            <AppNavigator />
          </SafeAreaProvider>
        </LocalizationProvider>
      </Provider>
    </>
  );
};

export default App;

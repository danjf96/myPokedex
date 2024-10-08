/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Routes from './src/routes';
import { Provider } from 'react-redux';
import store from './src/store';

if (__DEV__) {
  require("./ReactotronConfig");
}

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
};
export default App
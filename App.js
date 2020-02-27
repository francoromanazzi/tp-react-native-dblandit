import React from 'react';
import { AsyncStorage } from 'react-native'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux'
import jwt_decode from 'jwt-decode';

import Navigation from './components/layout/Navigation'

import store from './redux/store'
import setAuthToken from './utils/setAuthToken'
import { setCurrentUser } from './redux/actions/auth'

// Check for token
(async () => {
  try {
    const jwtToken = await AsyncStorage.getItem('@jwtToken')
    if (jwtToken !== null) {
      // Set auth token header auth
      setAuthToken(`Bearer ${localStorage.jwtToken}`);
      // Decode token and get user info and
      const decoded = jwt_decode(localStorage.jwtToken);
      // Set user and isAuthenticated
      store.dispatch(setCurrentUser(decoded));
    }
  } catch(e) {

  }
})();



const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#538e5a',
    accentLight: '#ef8656',
    accent: '#f05c22'
  },
};

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
        <Navigation />
      </PaperProvider>
    </ReduxProvider>
  );
}
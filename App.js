import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux'

import Navigation from './components/layout/Navigation'

import store from './redux/store'


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
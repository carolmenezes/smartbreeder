import React from 'react';
/**
 * STORE
 */
import { useSelector } from 'react-redux';

/**
 * APOLLO - API REQUESTS
 */
import ApolloClient from './apollo/client';
import { ApolloProvider } from '@apollo/client';

/**
 * MATERIAL UI
 */
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { generateTheme } from './styles/theme';

import DefaultLayout from './Layouts/Default';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const teste = useSelector((state) => state.characters.selected.id);
  const theme = generateTheme(teste);
  return (
    <ApolloProvider client={ApolloClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DefaultLayout />
        <LoadingScreen />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;

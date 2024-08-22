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

import CharacterPanel from './pages/CharacterPanel';

function App() {
  const dynamicTheme = useSelector((state) => state.characters.active);
  const theme = generateTheme(dynamicTheme);

  return (
    <ApolloProvider client={ApolloClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CharacterPanel />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;

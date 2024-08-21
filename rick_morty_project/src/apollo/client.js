import { ApolloClient, InMemoryCache } from '@apollo/client';

// Configuração do Apollo Client
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    'Content-Type': 'application/json'
  },
});

export default client;
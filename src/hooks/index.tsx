import React from 'react';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const AppProvider: React.FC = ({ children }) => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://api.github.com/graphql',
    headers: {
      Authorization: `Bearer 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`,
    },
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default AppProvider;

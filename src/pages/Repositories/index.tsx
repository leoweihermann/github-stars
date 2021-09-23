import React, { useMemo } from 'react';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { FiChevronLeft } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import Header from '../../Components/Header';
import UserResults from '../../Components/UserResults';

import { Container } from './styles';

interface IRepositoriesParams {
  userName: string;
}

const Repositories: React.FC = () => {
  const { userName } = useParams<IRepositoriesParams>();

  const { authData } = useAuth();

  const client = useMemo(
    () =>
      new ApolloClient({
        cache: new InMemoryCache(),
        uri: 'https://api.github.com/graphql',
        headers: {
          Authorization: `Bearer ${authData.token}`,
        },
      }),
    [authData.token],
  );

  return (
    <Container>
      <ApolloProvider client={client}>
        <Header>
          <Link to="/">
            <FiChevronLeft />
            Voltar
          </Link>
        </Header>

        <UserResults userName={userName} />
      </ApolloProvider>
    </Container>
  );
};

export default Repositories;

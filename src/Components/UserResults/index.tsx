import React, { useCallback, useEffect } from 'react';

import { gql, useQuery } from '@apollo/client';

import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import UserInfo from './UserInfo';
import RepositoryList from './RepositoryList';

import { Container } from './styles';
import Loading from './Loading';

interface IUserResultsProps {
  userName: string;
}

const UserResults: React.FC<IUserResultsProps> = ({ userName }) => {
  const { authData } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (!authData.token) {
      history.push('/');
    }
  }, [history, authData.token]);

  const GET_STARREDREPOSITORIES = gql`
    query ($user: String!, $nextPage: String) {
      user(login: $user) {
        id
        avatarUrl
        bio
        email
        name
        location
        url
        login
        starredRepositories(after: $nextPage) {
          pageInfo {
            startCursor
            hasPreviousPage
            hasNextPage
            endCursor
          }
          totalCount
          nodes {
            id
            name
            description
            url
            viewerHasStarred
            owner {
              avatarUrl
            }
          }
        }
      }
    }
  `;

  const { loading, data, refetch } = useQuery(GET_STARREDREPOSITORIES, {
    variables: {
      user: userName,
      nextPage: '',
    },
  });

  const handleUpdateResults = useCallback(() => {
    if (data && data.user.starredRepositories.pageInfo.hasNextPage) {
      refetch({
        user: userName,
        nextPage: data.user.starredRepositories.pageInfo.endCursor,
      });
    }
  }, [refetch, userName, data]);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <section>
          {data && (
            <>
              <UserInfo userInfo={data.user} />
              <RepositoryList
                repositories={data.user.starredRepositories.nodes}
                handleUpdateResults={handleUpdateResults}
              />
            </>
          )}
        </section>
      )}
    </Container>
  );
};

export default UserResults;

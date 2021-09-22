import React from 'react';

import { gql, useQuery } from '@apollo/client';

import UserInfo from './UserInfo';
import RepositoryList from './RepositoryList';

import { Container } from './styles';
import Loading from './Loading';

interface IUserResultsProps {
  userName: string;
}

const UserResults: React.FC<IUserResultsProps> = ({ userName }) => {
  const GET_STARREDREPOSITORIES = gql`
    query ($user: String!, $nextPage: String, $previousPage: String) {
      user(login: $user) {
        id
        avatarUrl
        bio
        email
        name
        location
        url
        login
        starredRepositories(after: $nextPage, before: $previousPage) {
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
            owner {
              avatarUrl
            }
          }
        }
      }
    }
  `;

  const { loading, data } = useQuery(GET_STARREDREPOSITORIES, {
    variables: {
      user: userName,
      nextPage: '',
      previousPage: '',
    },
  });

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
              />
            </>
          )}
        </section>
      )}
    </Container>
  );
};

export default UserResults;

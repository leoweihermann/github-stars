import React, { useCallback, useState } from 'react';

import { gql, useMutation } from '@apollo/client';

import { MdStarBorder, MdStar } from 'react-icons/md';

import { Container, Repositories, StarButton } from './styles';

interface IRepository {
  id: string;
  name: string;
  description: string;
  url: string;
  viewerHasStarred: boolean;
  owner: {
    avatarUrl: string;
  };
}

interface IRepositoryListProps {
  repositories: Array<IRepository>;
  handleUpdateResults(): void;
}

const RepositoryList: React.FC<IRepositoryListProps> = ({
  repositories,
  handleUpdateResults,
}) => {
  const [stateRepositories] = useState<Array<IRepository>>(
    JSON.parse(JSON.stringify(repositories)),
  );

  const STAR_REPOSITORY = gql`
    mutation ($repositoryId: String!) {
      addStar(input: { starrableId: $repositoryId }) {
        clientMutationId
      }
    }
  `;

  const UNSTAR_REPOSITORY = gql`
    mutation ($repositoryId: String!) {
      removeStar(input: { starrableId: $repositoryId }) {
        clientMutationId
      }
    }
  `;

  const [starRepository] = useMutation(STAR_REPOSITORY);
  const [unstarRepository] = useMutation(UNSTAR_REPOSITORY);

  const handleScroll = useCallback(
    e => {
      const height = e.target.scrollHeight - e.target.clientHeight;
      const bottom = Math.round((e.target.scrollTop / height) * 100);

      if (bottom === 100) {
        handleUpdateResults();
      }
    },
    [handleUpdateResults],
  );

  const handleStarRepository = useCallback(
    (repositoryId: string) => {
      starRepository({ variables: { repositoryId } });

      const findRepo = stateRepositories.find(
        repository => repository.id === repositoryId,
      );

      if (findRepo) {
        findRepo.viewerHasStarred = true;
      }
    },
    [stateRepositories, starRepository],
  );

  const handleUnstarRepository = useCallback(
    (repositoryId: string) => {
      unstarRepository({ variables: { repositoryId } });

      const findRepo = stateRepositories.find(
        repository => repository.id === repositoryId,
      );

      if (findRepo) {
        findRepo.viewerHasStarred = false;
      }
    },
    [stateRepositories, unstarRepository],
  );

  return (
    <Container onScroll={handleScroll}>
      <Repositories>
        {stateRepositories.map(repository => (
          <div key={repository.id}>
            <img src={repository.owner.avatarUrl} alt={repository.name} />
            <div>
              <strong>{repository.name}</strong>
              <p>{repository.description}</p>
            </div>
            {repository.viewerHasStarred ? (
              <StarButton
                type="button"
                onClick={() => handleUnstarRepository(repository.id)}
              >
                <MdStar size={16} style={{ margin: '0' }} />
                <span>Unstar</span>
              </StarButton>
            ) : (
              <StarButton
                type="button"
                onClick={() => handleStarRepository(repository.id)}
              >
                <MdStarBorder size={16} style={{ margin: '0' }} />
                <span>Star</span>
              </StarButton>
            )}
          </div>
        ))}
      </Repositories>
    </Container>
  );
};

export default RepositoryList;

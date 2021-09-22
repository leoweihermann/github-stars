import React from 'react';

import { Link } from 'react-router-dom';

import { FiChevronRight } from 'react-icons/fi';

import { Container, Repositories } from './styles';

interface IRepository {
  id: string;
  name: string;
  description: string;
  url: string;
  owner: {
    avatarUrl: string;
  };
}

interface IRepositoryListProps {
  repositories: Array<IRepository>;
}

const RepositoryList: React.FC<IRepositoryListProps> = ({ repositories }) => {
  return (
    <Container>
      <Repositories>
        {repositories.map(repository => (
          <Link
            key={repository.name}
            to={{ pathname: repository.url }}
            target="_blank"
          >
            <img src={repository.owner.avatarUrl} alt={repository.name} />
            <div>
              <strong>{repository.name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </Container>
  );
};

export default RepositoryList;

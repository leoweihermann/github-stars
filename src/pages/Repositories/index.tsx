import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';

import { Link, useParams } from 'react-router-dom';

import Header from '../../Components/Header';
import UserResults from '../../Components/UserResults';

import { Container } from './styles';

interface IRepositoriesParams {
  userName: string;
}

const Repositories: React.FC = () => {
  const { userName } = useParams<IRepositoriesParams>();

  return (
    <Container>
      <Header>
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>

      <UserResults userName={userName} />
    </Container>
  );
};

export default Repositories;

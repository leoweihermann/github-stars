import React from 'react';

import { FiGithub } from 'react-icons/fi';

import { Container, Logo } from './styles';

const Component: React.FC = ({ children }) => {
  return (
    <Container>
      <Logo>
        <FiGithub size={24} />
        <h1>GitHub Stars</h1>
      </Logo>
      {children}
    </Container>
  );
};

export default Component;

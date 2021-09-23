import React from 'react';

import { FiGithub, FiLogIn, FiLogOut, FiUser } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

import { Container, Logo, LoginButton, User, LogoutButton } from './styles';

const Component: React.FC = ({ children }) => {
  const { signIn, authData, signOut } = useAuth();

  return (
    <Container>
      <Logo>
        <FiGithub size={24} />
        <h1>GitHub Stars</h1>
      </Logo>

      {!authData.token ? (
        <LoginButton type="button" onClick={signIn}>
          <FiLogIn />
          Login
        </LoginButton>
      ) : (
        <User>
          <FiUser color="#87ff8b" />
          <span>{authData.username}</span>
          <LogoutButton title="Sair" onClick={signOut}>
            <FiLogOut color="#fff" />
          </LogoutButton>
        </User>
      )}

      {children}
    </Container>
  );
};

export default Component;

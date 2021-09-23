import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background: #0d1117;
  color: #fff;
  height: 70px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;

  align-items: center;

  padding: 1rem;

  h1 {
    font-size: 20px;
  }
`;

export const Logo = styled.div`
  display: flex;

  gap: 8px;
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 5px;
  padding: 8px;
  border: none;
  background-color: #87ff8b;

  transition: background-color 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const LogoutButton = styled.button`
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;
`;

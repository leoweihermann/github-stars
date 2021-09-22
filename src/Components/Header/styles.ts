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

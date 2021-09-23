import styled from 'styled-components';

export const Container = styled.div`
  header {
    a {
      color: #fff;
      text-decoration: none;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3px;

      margin-right: 1rem;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

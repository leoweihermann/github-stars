import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;
  padding: 2rem;

  width: 350px;

  h1 {
    font-size: 26px;
  }

  h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 300;

    opacity: 0.5;
  }

  h3 {
    display: flex;
    align-items: center;

    gap: 4px;

    font-size: 14px;
    font-style: normal;
    font-weight: 300;

    & + h3 {
      margin-top: 3px;
    }
  }

  p {
    margin-bottom: 1rem;
  }
`;

export const Avatar = styled.img`
  width: 90%;

  align-self: center;
  margin-bottom: 1rem;

  border-radius: 50%;
`;

export const UrlLink = styled.a`
  margin: 1rem 0;

  width: 100%;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;

  text-decoration: none;
  font-size: 12px;

  color: #fff;
  background-color: #21262d;

  transition: all 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

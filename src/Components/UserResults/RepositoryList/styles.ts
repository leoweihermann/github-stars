import styled from 'styled-components';

export const Container = styled.div`
  height: 85vh;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #e6e6e6;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Repositories = styled.div`
  max-width: 700px;

  margin: 2rem;

  div {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + div {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      display: flex;
      flex-direction: column;
      align-items: flex-start;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const StarButton = styled.button`
  display: flex;
  gap: 4px;

  font-size: 12px;
  width: 85px;

  align-items: center;
  justify-content: center;

  border-radius: 6px;
  border: 0;
  color: #fff;
  font-weight: bold;
  transition: background-color 0.2s;

  background-color: #0d1117;
  padding: 8px;

  &:hover {
    filter: brightness(0.9);
  }
`;

import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

export const Container = styled.div`
  position: relative;
  background-color: #0000000f;
  overflow: hidden;

  &::after {
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(transparent),
      color-stop(rgba(255, 255, 255, 0.3)),
      to(transparent)
    );

    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );

    animation: ${loading} 0.8s infinite;
  }
`;

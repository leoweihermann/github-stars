import React from 'react';

import Skeleton from '../../Skeleton';

import { Container, LoadingUserInfo, LoadingRepositoriesList } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <LoadingUserInfo>
        <Skeleton
          width="250px"
          height="250px"
          borderRadius="50%"
          marginTop="4rem"
        />
        <Skeleton width="80%" height="32px" marginTop="1rem" />
        <Skeleton width="50%" height="24px" marginTop="8px" />
        <Skeleton width="80%" height="32px" marginTop="1rem" />

        <Skeleton width="80%" height="60px" marginTop="1rem" />
      </LoadingUserInfo>

      <LoadingRepositoriesList>
        <Skeleton width="90%" height="112px" marginTop="2rem" />
        <Skeleton width="90%" height="112px" marginTop="2rem" />
        <Skeleton width="90%" height="112px" marginTop="2rem" />
      </LoadingRepositoriesList>
    </Container>
  );
};

export default Loading;

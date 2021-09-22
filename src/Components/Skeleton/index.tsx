import React, { CSSProperties } from 'react';

import { Container } from './styles';

type ISkeletonProps = CSSProperties & {
  width: number | string;
  height: number | string;
};

const Skeleton: React.FC<ISkeletonProps> = ({ height, width, ...res }) => {
  return <Container style={{ height, width, ...res }} />;
};

export default Skeleton;

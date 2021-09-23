import React from 'react';

import { FiMail, FiMapPin } from 'react-icons/fi';

import { Container, Avatar, UrlLink } from './styles';

interface IUserInfo {
  avatarUrl: string;
  name: string;
  login: string;
  bio: string;
  location: string;
  email: string;
  url: string;
}

interface IUserInfoProps {
  userInfo: IUserInfo;
}

const UserInfo: React.FC<IUserInfoProps> = ({ userInfo }) => {
  return (
    <Container>
      <Avatar src={userInfo.avatarUrl} alt="avatar" />
      <h1>{userInfo.name}</h1>
      <h2>{userInfo.login}</h2>

      <UrlLink href={userInfo.url}>{userInfo.url}</UrlLink>

      {userInfo.bio && <p>{userInfo.bio}</p>}

      {userInfo.location && (
        <h3>
          <FiMapPin color="#21262d" />
          {userInfo.location}
        </h3>
      )}

      {userInfo.email && (
        <h3>
          <FiMail color="#21262d" /> {userInfo.email}
        </h3>
      )}
    </Container>
  );
};

export default UserInfo;

import React, { createContext, useCallback, useState, useContext } from 'react';

import { githubProvider } from '../config/authMethods';

import socialMediaAuth from '../services/auth';

interface IAuthState {
  token: string;
  username: string;
}

interface IAuthContextData {
  signIn(): Promise<void>;
  signOut(): void;
  authData: IAuthState;
}

export const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@GitHubStars:token');
    const username = localStorage.getItem('@GitHubStars:username');
    if (token && username) return { token, username };
    return {} as IAuthState;
  });

  const signIn = useCallback(async () => {
    const response = await socialMediaAuth(githubProvider);
    const auth = JSON.parse(JSON.stringify(response));

    const token = auth.credential.oauthAccessToken;

    const { username } = auth.userInfo;

    setAuthData({ token, username });
    localStorage.setItem('@GitHubStars:token', token);
    localStorage.setItem('@GitHubStars:username', username);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@GitHubStars:token');
    localStorage.removeItem('@GitHubStars:username');
    setAuthData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, authData }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

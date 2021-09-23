import firebase from './firebase-config';

export const githubProvider = new firebase.auth.GithubAuthProvider();

githubProvider.addScope('public_repo');
githubProvider.addScope('gist');

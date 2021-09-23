import firebase from '../config/firebase-config';

// eslint-disable-next-line
const socialMediaAuth = (provider: any) => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(res => {
      return { credential: res.credential, userInfo: res.additionalUserInfo };
    })
    .catch(err => {
      return err;
    });
};

export default socialMediaAuth;

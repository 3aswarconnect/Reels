import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: process.env.COGNITO_USER_POOL_ID,
  ClientId: process.env.COGNITO_CLIENT_ID,
};

const UserPool = new CognitoUserPool(poolData);

export const signUp = (email, username, password) => {
  return new Promise((resolve, reject) => {
    UserPool.signUp(username, password, [{ Name: 'email', Value: email }], null, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

export const signIn = (username, password) => {
  return new Promise((resolve, reject) => {
    const user = new CognitoUser({ Username: username, Pool: UserPool });
    const authDetails = new AuthenticationDetails({ Username: username, Password: password });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => resolve(data),
      onFailure: (err) => reject(err),
    });
  });
};

export const resetPassword = (username) => {
  return new Promise((resolve, reject) => {
    const user = new CognitoUser({ Username: username, Pool: UserPool });
    user.forgotPassword({
      onSuccess: () => resolve("Password reset code sent"),
      onFailure: (err) => reject(err),
    });
  });
};

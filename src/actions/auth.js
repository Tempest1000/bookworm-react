import { USER_LOGGED_IN } from '../types';
import api from '../api';

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
})

// api.user.login is a request that returns a promise
// then an action is fired that changes the redux store
export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    //localStorage.bookwormJWT = user.token;
    //setAuthorizationHeader(user.token);
    dispatch(userLoggedIn(user));
  });

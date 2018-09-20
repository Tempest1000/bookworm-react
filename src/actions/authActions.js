import { USER_LOGGED_IN } from '../types';
import api from '../api';
import setAuthorizationHeader from "../utils/setAuthorizationHeader";

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
})

// api.user.login is a request that returns a promise
// then an action is fired that changes the redux store
export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    //console.log(JSON.stringify(user));
    localStorage.bookwormJWT = user.id_token;
    setAuthorizationHeader(user.id_token);
    dispatch(userLoggedIn(user));
  });
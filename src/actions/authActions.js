import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types';
import api from '../api';
import setAuthorizationHeader from "../utils/setAuthorizationHeader";

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
})

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
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

  export const logout = () => dispatch => {
      // clear the JWT from local storage
    localStorage.removeItem("bookwormJWT");
    // remove the user id_token from the authorization header
    setAuthorizationHeader();
    // fire the action to remove the user from the store
    dispatch(userLoggedOut());
  };
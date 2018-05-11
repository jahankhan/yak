import * as SessionAPIUtil from '../util/session_api_util';
import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = payload => {
  // debugger
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: payload.users,
    channels: payload.channels
  };
};

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

// export const signup = user => dispatch => (
//   UserAPIUtil.signup(user).then(user => (
//     dispatch(receiveCurrentUser(user))
//   ), err => (
//     dispatch(receiveErrors(err.responseJSON))
//   ))
// );

export const signup = user => dispatch => {
  // debugger
  return UserAPIUtil.signup(user).then(userData => {
    // debugger
    return dispatch(receiveCurrentUser(userData));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};

// export const login = user => dispatch => (
//   SessionAPIUtil.login(user).then(user => (
//     dispatch(receiveCurrentUser(user))
//   ), err => (
//     dispatch(receiveErrors(err.responseJSON))
//   ))
// );

export const login = user => dispatch => {
  return SessionAPIUtil.login(user).then(userData => {
    return dispatch(receiveCurrentUser(userData));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout().then(user => {
    return dispatch(logoutCurrentUser());
  });
};

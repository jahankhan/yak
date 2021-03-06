import merge from 'lodash/merge';
import { RECEIVE_CURRENT_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_CURRENT_USER, RECEIVE_USERS } from '../actions/session_actions';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_CHANNEL:
      return merge({}, state, action.users);
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_USERS:
      return action.users;
    default:
      return state;
  }
};

export default usersReducer;

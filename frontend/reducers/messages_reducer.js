import merge from 'lodash/merge';

import {
  RECEIVE_MESSAGE,
  RECEIVE_MESSAGES
} from '../actions/message_actions';


const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  // debugger
  switch(action.type) {
    case RECEIVE_MESSAGE:
      return merge({}, state, { [action.message.id]: action.message });
    case RECEIVE_MESSAGES:
      // debugger
      return action.messages;
    default:
      return state;
  }
};

export default messagesReducer;

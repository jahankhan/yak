import { RECEIVE_MESSAGE_ERRORS, RECEIVE_MESSAGE, RECEIVE_MESSAGES } from '../actions/message_actions';

export default (state = [], action) => {
  Object.freeze(state);
  let newState = [];
  switch (action.type) {
    case RECEIVE_MESSAGE_ERRORS:
      return action.errors;
    case RECEIVE_MESSAGES:
    case RECEIVE_MESSAGE:
      return [];
    default:
      return state;
  }
};

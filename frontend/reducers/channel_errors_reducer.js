import { RECEIVE_CHANNEL_ERRORS, RECEIVE_CURRENT_CHANNEL } from '../actions/channel_actions';

export default (state = [], action) => {
  Object.freeze(state);
  let newState = [];
  switch (action.type) {
    case RECEIVE_CHANNEL_ERRORS:
      debugger
      return action.errors;
    case RECEIVE_CURRENT_CHANNEL:
      return [];
    default:
      return state;
  }
};

import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {
  RECEIVE_CURRENT_CHANNEL,
  RECEIVE_CHANNELS
} from '../actions/channel_actions';


const channelsReducer = (state = {}, action) => {
  Object.freeze(state);
  // debugger
  // debugger
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.channels);
    case RECEIVE_CURRENT_CHANNEL:
      // return merge({}, state, { [action.currentChannel.id]: action.currentChannel });
      // debugger
      return merge({}, state, action.currentChannel);
    case RECEIVE_CHANNELS:
      // debugger
      return action.channels;
    default:
      return state;
  }
};

export default channelsReducer;

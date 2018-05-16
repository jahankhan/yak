import * as ChannelAPIUtil from '../util/channel_api_util';
import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_CURRENT_CHANNEL = 'RECEIVE_CURRENT_CHANNEL';
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';

export const receiveCurrentChannel = payload => {
  return {
    type: RECEIVE_CURRENT_CHANNEL,
    currentChannel: payload.channels,
    users: payload.users
  };
};

export const receiveChannels = channels => {
  return {
    type: RECEIVE_CHANNELS,
    channels
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_CHANNEL_ERRORS,
    errors
  };
};

export const createChannel = channel => dispatch => {
  // debugger
  return ChannelAPIUtil.createChannel(channel).then(channelData => {
    return dispatch(receiveCurrentChannel(channelData));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};

export const getAllChannels = () => dispatch => {
  return ChannelAPIUtil.getAllChannels().then(channelsData => {
    return dispatch(receiveChannels(channelsData));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};

export const getChannel = (channelId) => dispatch => {
  // debugger
  return ChannelAPIUtil.getChannel(channelId).then(channelData => {
    return dispatch(receiveCurrentChannel(channelData));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};

export const addUserToChannel = channelId => dispatch => {
  // debugger
  return ChannelAPIUtil.addUserToChannel(channelId).then((channelData) => {
    // debugger
    // return dispatch(getChannel(channelData.channel_id));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};

export const addOtherUserToChannel = (username, channelId) => dispatch => {
  // debugger
  return ChannelAPIUtil.addOtherUserToChannel(username, channelId).then((channelData) => {
    // debugger
    // return dispatch(getChannel(channelData.channel_id));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};

export const setActiveChannel = (userId, channelId) => dispatch => {
  // debugger
  return UserAPIUtil.setActiveChannel(userId, channelId).then((userData) => {

    return dispatch(getChannel(userData.users.active_channel));
  }, err => {
    // return dispatch(receiveErrors(err.responseJSON));
  });
};

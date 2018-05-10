import * as ChannelAPIUtil from '../util/channel_api_util';

export const RECEIVE_CURRENT_CHANNEL = 'RECEIVE_CURRENT_CHANNEL';
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';

export const receiveCurrentChannel = currentChannel => {
  return {
    type: RECEIVE_CURRENT_CHANNEL,
    currentChannel
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
  return ChannelAPIUtil.createChannel(channel).then(channelData => {
    return dispatch(receiveCurrentChannel(channelData));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};

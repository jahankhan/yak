import * as MessageAPIUtil from '../util/message_api_util';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE_ERRORS = 'RECEIVE_MESSAGE_ERRORS';

export const receiveMessage = message => {

  return {
    type: RECEIVE_MESSAGE,
    message
  };
};

export const receiveMessages = messages => {
  return {
    type: RECEIVE_MESSAGES,
    messages
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_MESSAGE_ERRORS,
    errors
  };
};

export const createMessage = message => dispatch => {
  return MessageAPIUtil.createMessage(message).then(messageData => {
    return ;
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};

export const getAllMessages = channelId => dispatch => {
  return MessageAPIUtil.getAllMessages(channelId).then(messages => {
    return dispatch(receiveMessages(messages));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};

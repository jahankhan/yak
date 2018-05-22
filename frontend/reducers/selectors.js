import values from 'lodash/values';

export const selectAllChannels = state => values(state.entities.channels);

export const selectUserChannels = (state, user) => {

  if (Object.keys(state.entities.channels).length === 0 || typeof user.channelIds === 'undefined') {
    return [];
  }
  return user ? user.channelIds.map(channelId => state.entities.channels[channelId]) : [];
};

export const selectChannelUsers = (state, channel) => {
  return channel ? channel.userIds.map(userId => state.entities.users[userId]) : [];
};

export const selectUserDMs = (state, user) => {

  if (Object.keys(state.entities.channels).length === 0 || typeof user.dmIds === 'undefined') {
    return [];
  }
  return user ? user.dmIds.map(dmId => state.entities.channels[dmId]) : [];
};

export const selectChannelMessages = (state, channelId) => {
  if (Object.keys(state.entities.messages).length === 0 || typeof channelId === 'undefined') {
    return {};
  }

  return channelId ? Object.values(state.entities.messages).filter(message => message.channel_id === parseInt(channelId)) : {};
};

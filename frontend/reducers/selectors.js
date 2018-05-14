import values from 'lodash/values';

export const selectAllChannels = state => values(state.entities.channels);

export const selectUserChannels = (state, user) => {
  // debugger
  return user ? user.channelIds.map(channelId => state.entities.channels[channelId]) : [];
};

export const selectChannelUsers = (state, channel) => {
  return channel ? channel.userIds.map(userId => state.entities.users[userId]) : [];
};

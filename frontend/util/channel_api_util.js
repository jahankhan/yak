export const getAllChannels = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/channels'
  });
};

export const getChannel = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels/${id}`
  });
};

export const createChannel = (channel) => {
  return $.ajax({
    method: 'POST',
    url: `/api/channels`,
    data: { channel }
  });
};

export const addOtherUserToChannel = (username, channelId) => {
  return $.ajax({
    method: 'POST',
    url: 'api/channel_users',
    data: {channel_user: { channel_id: channelId, username: username}}
  });
};

export const addUserToChannel = (channelId) => {
  return $.ajax({
    method: 'POST',
    url: 'api/channel_users',
    data: {channel_user: { channel_id: channelId }}
  });
};

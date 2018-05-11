export const createMessage = message => {
  return $.ajax({
    method: 'POST',
    url: `/api/channels/${message.channel_id}/messages`,
    data: { message }
  });
};

export const getAllMessages = (channelId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels/${channelId}/messages`
  });
};

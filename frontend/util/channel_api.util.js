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

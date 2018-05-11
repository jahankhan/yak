export const signup = user => {
  // debugger
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  });
};

export const setActiveChannel = (userId, channelId) => {
  return $.ajax({
    method:'PATCH',
    url: `api/users/${userId}`,
    data: {
            user_id: userId,
            channel_id: channelId
           }
  });
};

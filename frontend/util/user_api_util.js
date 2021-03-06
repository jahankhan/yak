export const signup = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  });
};

export const getUser = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
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

export const setAvatar = (formData, userId) => {
  return $.ajax({
    method:'PATCH',
    url: `api/users/${userId}`,
    contentType: false,
    processData: false,
    data: formData
  });
};

export const getAllUsers = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/users'
  });
};

export const signup = user => {
  // debugger
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  });
};

export const addUser = payload => ({
  type: 'ADD_USER',
  payload,
});

export const updateUser = payload => ({
  type: 'UPDATE_USER',
  payload,
});

export const deleteUser = payload => ({
  type: 'DELETE_USER',
  payload,
});

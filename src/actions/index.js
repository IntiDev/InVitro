export const addUser = payload => ({
  type: 'ADD_USER',
  payload,
});

export const updateUser = payload => ({
  type: 'UPDATE_USER',
  payload,
});

export const desactiveUser = payload => ({
  type: 'DESACTIVE_USER',
  payload,
});

export const getListUsers = payload => ({
  type: 'LIST_USERS',
  payload,
});

export const fetchAPI = () => {
  return dispatch => {
    fetch('http://localhost:3000/user')
      .then(response => response.json())
      .then(data => dispatch(getListUsers(data.Users)))
      .then(() => console.log('Fetch'))
      .catch(err => console.log(`Error en Actions ${err}`));
  };
};

export const registerUser = payload => {
  return dispatch => {
    fetch('http://localhost:3000/user', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(console.log(payload))
      .then(() => dispatch(addUser(payload)))
      .catch(err => console.log(`Error en Actions ${err}`));
  };
};

export const editUser = payload => {
  return dispatch => {
    fetch(`http://localhost:3000/user/${payload.id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => dispatch(updateUser(payload)))
      .catch(err => console.log(`Error en Actions ${err}`));
  };
};

export const deleteUser = payload => {
  return dispatch => {
    fetch(`http://localhost:3000/user/${payload.id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => console.log(`this is the payload ${payload.rol}`))
      .then(() => dispatch(desactiveUser(payload)))
      .catch(err => console.log(`Error en Actions ${err}`));
  };
};

/*  const handleActiveIcon = (user) => {
    const activeUser = {
      id: user.id,
      idUser: user.idUser,
      state: 'Active',
    }
    props.deleteUser(activeUser)
  } */

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

export const changeExam = payload => ({
  type: 'CHANGE_EXAM',
  payload,
});

export const fetchAPI = () => {
  return dispatch => {
    fetch('https://invitro-api.herokuapp.com/user')
      .then(response => response.json())
      .then(data => dispatch(getListUsers(data.Users)))
      .catch(err => console.log(`Error en Actions ${err}`));
  };
};

export const searchUser = payload => {
  return dispatch => {
    fetch(`https://invitro-api.herokuapp.com/user/${payload}`)
      .then(response => response.json())
      .then(data => dispatch(getListUsers(data.User[0])))
      .catch(err => console.log(`Error en Actions ${err}`));
  };
};

export const registerUser = payload => {
  return dispatch => {
    fetch('https://invitro-api.herokuapp.com/user', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => dispatch(addUser(payload)))
      .catch(err => console.log(`Error en Actions ${err}`));
  };
};

/* export const addMassiveUsers = payload => {
  const formData = new FormData();
  formData.append('usersCSV', payload);
  return dispatch => {
    fetch('https://invitro-api.herokuapp.com/uploadCSV', {
      method: 'POST',
      body: formData,
      
    })
      .then(console.log(payload))
      .catch(err => console.log(`Error en Actions ${err}`));
  };
}; */

export const editUser = payload => {
  return dispatch => {
    fetch(`https://invitro-api.herokuapp.com/user/${payload.id}`, {
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
    fetch(`https://invitro-api.herokuapp.com/user/${payload.id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
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

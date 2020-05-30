const reducer = (state, actions) => {
  switch (actions.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, actions.payload],
      };

    case 'UPDATE_USER': {
      return {
        ...state,
        users: state.users.map(item =>
          item.idUser === actions.payload.idUser ? { ...actions.payload } : item
        ),
      };
    }

    case 'DELETE_USER': {
      return {
        ...state,
        users: state.users.map(item =>
          item.idUser === actions.payload.idUser ? { ...actions.payload } : item
        ),
      };
    }

    default:
      return state;
  }
};

export default reducer;

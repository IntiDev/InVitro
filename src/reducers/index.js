const reducer = (state, actions) => {
  switch (actions.type) {
    case 'LIST_USERS': {
      console.log(actions.payload);
      return {
        ...state,
        users: actions.payload,
      };
    }
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

    case 'DESACTIVE_USER': {
      return {
        ...state,
        users: state.users.map(item =>
          item.idUser === actions.payload.idUser
            ? { ...item, state: actions.payload.state /* state: 'Desactive' */ }
            : item
        ),
      };
    }

    default:
      return state;
  }
};

export default reducer;

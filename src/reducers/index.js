const reducer = (state, actions) => {
  switch (actions.type) {
    case 'LIST_USERS': {
      console.log(actions.payload.data);
      return {
        ...state,
        users: actions.payload.data,
      };
    }
    case 'ADD_USER':
      return {
        ...state,
        users: [
          ...state.users,
          { id: actions.payload.identityCard, data: actions.payload },
        ],
      };

    case 'UPDATE_USER': {
      return {
        ...state,
        users: state.users.map(item =>
          item.id === actions.payload.identityCard
            ? { ...item, data: actions.payload }
            : item
        ),
      };
    }

    case 'DESACTIVE_USER': {
      console.log(actions.payload);
      return {
        ...state,
        users: state.users.map(item =>
          item.id === actions.payload.id
            ? {
                ...item,
                data: {
                  ...item.data,
                  userStatus: actions.payload.userStatus,
                } /* state: 'Desactive' */,
              }
            : item
        ),
      };
    }

    default:
      return state;
  }
};

export default reducer;

const reducer = (state, actions) => {
  switch (actions.type) {
    case 'LIST_USERS': {
      console.log(actions.payload);
      return {
        ...state,
        users: actions.payload,
        showComponent: true,
      };
    }
    case 'ADD_USER':
      return {
        ...state,
        users: [
          ...state.users,
          { id: actions.payload.identityNumber, UserData: actions.payload },
        ],
      };

    case 'UPDATE_USER': {
      return {
        ...state,
        users: state.users.map(item =>
          item.id === actions.payload.identityNumber
            ? { ...item, UserData: actions.payload }
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
                UserData: {
                  ...item.UserData,
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

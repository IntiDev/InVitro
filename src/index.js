import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
  users: [
    {
      idUser: '1233690048',
      cedulaId: '19142879',
      name: 'Fulanito Gonzalez',
      email: 'fulanito@fulanito.com',
      phone: '2706020',
      state: 'Active',
      rol: {
        idRol: 'ABC1235POI',
        'nameRol/typeRol': 'ADMIN',
        status: 'Activate/Inactive',
      },
    },
    {
      idUser: '1233690048',
      cedulaId: '5654610',
      name: 'Pepe Perez',
      email: 'pepe@perez.com',
      phone: '2706020',
      state: 'Desactive',
      rol: {
        idRol: 'ABC1235POI',
        'nameRol/typeRol': 'ADMIN',
        status: 'Activate/Inactive',
      },
    },
    {
      idUser: '1233690048',
      cedulaId: '19142879',
      name: 'Fulanito Gonzalez',
      email: 'fulanito@fulanito.com',
      phone: '2706020',
      state: 'Active',
      rol: {
        idRol: 'ABC1235POI',
        'nameRol/typeRol': 'ADMIN',
        status: 'Activate/Inactive',
      },
    },
  ],
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

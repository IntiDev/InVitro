import React from 'react';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
  users: [
    {
      idUser: '1',
      cedulaId: '19142879',
      name: 'Fulanito Gonzalez',
      email: 'fulanito@fulanito.com',
      phone: '2706020',
      state: 'Active',
      rol: 'Administrador',
    },
    {
      idUser: '2',
      cedulaId: '5654610',
      name: 'Pepe Perez',
      email: 'pepe@perez.com',
      phone: '2706020',
      state: 'Desactive',
      rol: 'Pacientes',
    },
    {
      idUser: '3',
      cedulaId: '19142879',
      name: 'Fulanito Gonzalez',
      email: 'fulanito@fulanito.com',
      phone: '2706020',
      state: 'Active',
      rol: 'Medicos',
    },
    {
      idUser: '1',
      cedulaId: '19142879',
      name: 'Fulanito Gonzalez',
      email: 'fulanito@fulanito.com',
      phone: '2706020',
      state: 'Active',
      rol: 'Administrador',
    },
    {
      idUser: '2',
      cedulaId: '5654610',
      name: 'Pepe Perez',
      email: 'pepe@perez.com',
      phone: '2706020',
      state: 'Desactive',
      rol: 'Pacientes',
    },
    {
      idUser: '3',
      cedulaId: '19142879',
      name: 'Fulanito Gonzalez',
      email: 'fulanito@fulanito.com',
      phone: '2706020',
      state: 'Active',
      rol: 'Medicos',
    },
    {
      idUser: '1',
      cedulaId: '19142879',
      name: 'Fulanito Gonzalez',
      email: 'fulanito@fulanito.com',
      phone: '2706020',
      state: 'Active',
      rol: 'Administrador',
    },
    {
      idUser: '2',
      cedulaId: '5654610',
      name: 'Pepe Perez',
      email: 'pepe@perez.com',
      phone: '2706020',
      state: 'Desactive',
      rol: 'Pacientes',
    },
    {
      idUser: '3',
      cedulaId: '19142879',
      name: 'Fulanito Gonzalez',
      email: 'fulanito@fulanito.com',
      phone: '2706020',
      state: 'Active',
      rol: 'Medicos',
    },
    {
      idUser: '1',
      cedulaId: '19142879',
      name: 'Fulanito Gonzalez',
      email: 'fulanito@fulanito.com',
      phone: '2706020',
      state: 'Active',
      rol: 'Administrador',
    },
    {
      idUser: '2',
      cedulaId: '5654610',
      name: 'Pepe Perez',
      email: 'pepe@perez.com',
      phone: '2706020',
      state: 'Desactive',
      rol: 'Pacientes',
    },
    {
      idUser: '3',
      cedulaId: '19142879',
      name: 'Fulanito Gonzalez',
      email: 'fulanito@fulanito.com',
      phone: '2706020',
      state: 'Active',
      rol: 'Medicos',
    },
  ],
};

const store = createStore(reducer, initialState);
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);

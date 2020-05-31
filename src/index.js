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
      documentType: 'Cedula',
      cedulaId: '19142879',
      name: 'Fulanito Gonzalez',
      lastname: '',
      email: 'fulanito@fulanito.com',
      phone: '2706020',
      state: 'Active',
      rol: 'Administrador',
    },
    {
      idUser: '2',
      documentType: 'Cedula',
      cedulaId: '5654610',
      name: 'Pepe Perez',
      lastname: '',
      email: 'pepe@perez.com',
      phone: '2706020',
      state: 'Desactive',
      rol: 'Pacientes',
    },
    {
      idUser: '3',
      cedulaId: '19142879',
      documentType: 'Cedula',
      name: 'Fulanito Gonzalez',
      lastname: '',
      email: 'fulanito@fulanito.com',
      phone: '2706020',
      state: 'Active',
      rol: 'Medicos',
    },
    {
      idUser: '4',
      documentType: 'Cedula',
      cedulaId: '19142879',
      name: 'Fulanito Gonzalez',
      lastname: '',
      email: 'fulanito@fulanito.com',
      phone: '2706020',
      state: 'Active',
      rol: 'Administrador',
    },
    {
      idUser: '5',
      documentType: 'Cedula',
      cedulaId: '5654610',
      name: 'Pepe Perez',
      lastname: '',
      email: 'pepe@perez.com',
      phone: '2706020',
      state: 'Desactive',
      rol: 'Pacientes',
    },
    {
      idUser: '6',
      cedulaId: '19142879',
      documentType: 'Cedula',
      name: 'Fulanito Gonzalez',
      lastname: '',
      email: 'fulanito@fulanito.com',
      phone: '2706020',
      state: 'Active',
      rol: 'Medicos',
    },
    {
      idUser: '7',
      documentType: 'Cedula',
      cedulaId: '19142879',
      name: 'Fulanito Gonzalez',
      lastname: '',
      email: 'fulanito@fulanito.com',
      phone: '2706020',
      state: 'Active',
      rol: 'Administrador',
    },
    {
      idUser: '8',
      documentType: 'Cedula',
      cedulaId: '5654610',
      name: 'Pepe Perez',
      lastname: '',
      email: 'pepe@perez.com',
      phone: '2706020',
      state: 'Desactive',
      rol: 'Pacientes',
    },
    {
      idUser: '9',
      cedulaId: '19142879',
      documentType: 'Cedula',
      name: 'Fulanito Gonzalez',
      lastname: '',
      email: 'fulanito@fulanito.com',
      phone: '2706020',
      state: 'Active',
      rol: 'Medicos',
    },
    {
      idUser: '10',
      documentType: 'Cedula',
      cedulaId: '19142879',
      name: 'Fulanito Gonzalez',
      lastname: '',
      email: 'fulanito@fulanito.com',
      phone: '2706020',
      state: 'Active',
      rol: 'Administrador',
    },
    {
      idUser: '11',
      documentType: 'Cedula',
      cedulaId: '5654610',
      name: 'Pepe Perez',
      lastname: '',
      email: 'pepe@perez.com',
      phone: '2706020',
      state: 'Desactive',
      rol: 'Pacientes',
    },
    {
      idUser: '12',
      cedulaId: '19142879',
      documentType: 'Cedula',
      name: 'Fulanito Gonzalez',
      lastname: '',
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

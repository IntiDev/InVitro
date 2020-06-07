import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions';
import Button from './Button';
import '../styles/components/RegisterForm.styl';

const RegisterForm = props => {
  const [user, setUser] = useState({
    documentType: '',
    cedulaId: '',
    name: '',
    lastname: '',
    email: '',
    phone: '',
    cellphone: '',
    role: '',
    state: 'Active',
  });

  const handleAddUser = () => {
    props.registerUser(user);
    props.history.push('/adminUser');
  };

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="registerCard">
      <span
        className="registerCard__title__icon material-icons "
        style={{ fontSize: 60 }}
      >
        account_circle
      </span>
      <h1 className="registerCard__title">Datos del usuario</h1>
      <form className="registerCard__form" action="">
        <div className="registerCard__form__section">
          <label htmlFor="documentType">
            Tipo de Documento
            <input
              type="text"
              name="documentType"
              id="name"
              onChange={handleChange}
            />
          </label>

          <label htmlFor="cedulaId">
            Documento
            <input
              type="text"
              name="cedulaId"
              id="cedulaId"
              onChange={handleChange}
            />
          </label>

          <label htmlFor="name">
            Nombre
            <input type="text" name="name" id="name" onChange={handleChange} />
          </label>

          <label htmlFor="lastname">
            Apellido
            <input
              type="text"
              name="lastname"
              id="lastname"
              onChange={handleChange}
            />
          </label>

          <label htmlFor="cellphone">
            Celular
            <input
              type="text"
              name="cellphone"
              id="cellphone"
              onChange={handleChange}
            />
          </label>

          <label htmlFor="phone">
            Tlf Fijo
            <input
              type="text"
              name="phone"
              id="phone"
              onChange={handleChange}
            />
          </label>
        </div>

        <label htmlFor="email">
          Correo
          <input type="mail" name="email" id="email" onChange={handleChange} />
        </label>

        <label htmlFor="role">
          {' '}
          Tipo de Usuario
          <select id="role" name="role" onChange={handleChange}>
            <option value="Paciente">Paciente</option>
            <option value="Medico">Médico</option>
            <option value="Admintrador">Administrador</option>
          </select>
        </label>

        <div>
          <Button onClick={handleAddUser} text="Crear" />
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  registerUser,
};

export default connect(null, mapDispatchToProps)(RegisterForm);

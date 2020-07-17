import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions';
import Button from './Button';
import '../styles/components/RegisterForm.styl';

const RegisterForm = props => {
  const [user, setUser] = useState({
    documentType: '',
    identityNumber: '',
    name: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    numberContact: '',
    rol: '',
    userStatus: true,
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
      <form className="registerCard__form" onSubmit={handleAddUser}>
        <div className="registerCard__form__section">
          {/* <label htmlFor="documentType">
            Tipo de Documento
            <input
              type="text"
              name="documentType"
              id="name"
              onChange={handleChange}
            />
          </label>
 */}
          <label htmlFor="documentType">
            {' '}
            Tipo de Documento
            <select
              id="documentType"
              name="documentType"
              onChange={handleChange}
              required
            >
              <option value="none" selected disable="true" hidden>
                {' '}
                Selecciona un documento
              </option>
              <option value="Cedula de Ciudadania">Cedula de Ciudadania</option>
              <option value="Cedula de Extranjeria">
                Cedula de Extranjeria
              </option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
          </label>

          <label htmlFor="identityNumber">
            Documento
            <input
              type="number"
              name="identityNumber"
              id="identityNumber"
              onChange={handleChange}
              required
            />
          </label>

          <label htmlFor="name">
            Nombre
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              required
            />
          </label>

          <label htmlFor="lastName">
            Apellido
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={handleChange}
              required
            />
          </label>

          <label htmlFor="numberContact">
            Celular
            <input
              type="number"
              name="numberContact"
              id="numberContact"
              onChange={handleChange}
            />
          </label>

          <label htmlFor="phoneNumber">
            Tlf Fijo
            <input
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              onChange={handleChange}
            />
          </label>
        </div>

        <label htmlFor="email">
          Correo
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="rol">
          Tipo de Usuario
          <select id="rol" name="rol" onChange={handleChange} required>
            <option value="">Selecciona un rol</option>
            <option value="Paciente">Paciente</option>
            <option value="Medico">Médico</option>
            <option value="Administrador">Administrador</option>
          </select>
        </label>

        <div>
          <Button /* onClick={handleAddUser} */ inputButton text="Crear" />
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  registerUser,
};

export default connect(null, mapDispatchToProps)(RegisterForm);

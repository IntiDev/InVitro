import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions';
import Button from './Button';
import '../styles/components/RegisterForm.styl';

const RegisterForm = props => {
  const [user, setUser] = useState({
    cedulaId: '',
    name: '',
    email: '',
    phone: '',
  });

  const handleAddUser = () => {
    props.addUser(user);
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
      <h1 className="registerCard__title">Datos del usuario</h1>
      <form className="registerCard__form" action="">
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

        <label htmlFor="phone">
          Celular
          <input type="text" name="phone" id="phone" onChange={handleChange} />
        </label>

        <label htmlFor="email">
          Correo
          <input type="mail" name="email" id="email" onChange={handleChange} />
        </label>

        <Button onClick={handleAddUser} text="Crear" />
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  addUser,
};

export default connect(null, mapDispatchToProps)(RegisterForm);

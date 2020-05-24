import React from 'react';
import '../styles/components/RegisterForm.styl';

const RegisterForm = props => {
  const { user } = props;

  return (
    <div className="registerCard">
      <h1 className="registerCard__title">
        Datos del
        {user}
      </h1>
      <form className="registerCard__form" action="">
        <label htmlFor="typeID">
          Tipo de Documento
          <input type="text" name="typeID" id="typeID" />
        </label>

        <label htmlFor="document">
          Documento
          <input type="text" name="document" id="document" />
        </label>

        <label htmlFor="name">
          Nombre
          <input type="text" name="name" id="name" />
        </label>

        <label htmlFor="lastname">
          Apellido
          <input type="text" name="lastname" id="lastname" />
        </label>

        <label htmlFor="celphone">
          Celular
          <input type="text" name="celphone" id="celphone" />
        </label>

        <label htmlFor="phoneNumber">
          Tlf Fijo
          <input type="text" name="phoneNumber" id="phoneNumber" />
        </label>

        <label htmlFor="mail">
          Correo
          <input type="mail" name="mail" id="mail" />
        </label>

        <input type="submit" className="registerCard__submitButtom" />
      </form>
    </div>
  );
};

export default RegisterForm;

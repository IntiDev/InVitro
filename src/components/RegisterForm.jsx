/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import '../styles/components/RegisterForm.styl';

const RegisterForm = () => {
  return (
    <div className="registerCard">
      <h1 className="registerCard__title">Datos del Medico</h1>
      <form className="registerCard__form" action="">
        <label htmlFor="typeID">Tipo de Documento</label>
        <input type="text" name="typeID" id="typeID" />
        <label htmlFor="typeID">Documento</label>
        <input type="text" name="typeID" id="typeID" />
        <label htmlFor="typeID">Nombre</label>
        <input type="text" name="typeID" id="typeID" />
        <label htmlFor="typeID">Apellido</label>
        <input type="text" name="typeID" id="typeID" />
        <label htmlFor="typeID">Celular</label>
        <input type="text" name="typeID" id="typeID" />
        <label htmlFor="typeID">Tlf Fijo</label>
        <input type="text" name="typeID" id="typeID" />
        <label htmlFor="typeID">Correo</label>
        <input type="text" name="typeID" id="typeID" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default RegisterForm;

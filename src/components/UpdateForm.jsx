import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions';
import Button from './Button';
import Modal from './Modal';
import '../styles/components/RegisterForm.styl';

const UpdateForm = props => {
  const { item, isOpen, onCloseModal } = props;

  const [user, setUser] = useState({
    idUser: item.idUser,
    documentType: item.documentType,
    cedulaId: item.cedulaId,
    name: item.name,
    lastname: item.lastname,
    email: item.email,
    phone: item.phone,
    cellphone: item.cellphone,
    state: item.state,
    role: item.role,
  });

  const handleUpdateUser = () => {
    props.updateUser(user);
    console.log(user);
    onCloseModal();
  };

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Modal isOpen={isOpen} onCloseModal={onCloseModal}>
      <div className="registerCard">
        <h1 className="registerCard__title">Modificar Informacion</h1>
        <form className="registerCard__form" action="">
          <div className="registerCard__form__section">
            <label htmlFor="documentType">
              Tipo de Documento
              <input
                type="text"
                name="documentType"
                id="name"
                onChange={handleChange}
                defaultValue={item.documentType}
              />
            </label>

            <label htmlFor="cedulaId">
              Documento
              <input
                type="text"
                name="cedulaId"
                id="cedulaId"
                onChange={handleChange}
                defaultValue={item.cedulaId}
              />
            </label>

            <label htmlFor="name">
              Nombre
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                defaultValue={item.name}
              />
            </label>

            <label htmlFor="lastname">
              Apellido
              <input
                type="text"
                name="lastname"
                id="lastname"
                onChange={handleChange}
                defaultValue={item.lastname}
              />
            </label>

            <label htmlFor="cellphone">
              Celular
              <input
                type="text"
                name="cellphone"
                id="cellphone"
                onChange={handleChange}
                defaultValue={item.cellphone}
              />
            </label>

            <label htmlFor="phone">
              Tlf Fijo
              <input
                type="text"
                name="phone"
                id="phone"
                onChange={handleChange}
                defaultValue={item.phone}
              />
            </label>
          </div>

          <label htmlFor="email">
            Correo
            <input
              type="mail"
              name="email"
              id="email"
              onChange={handleChange}
              defaultValue={item.email}
            />
          </label>

          <label htmlFor="role">
            Tipo de Usuario
            <select id="role" name="role" onChange={handleChange}>
              <option value="none" selected disable hidden>
                {' '}
                Selecciona un rol
              </option>
              <option value="Paciente">Paciente</option>
              <option value="Medico">Médico</option>
              <option value="Administrador">Administrador</option>
            </select>
          </label>

          <Button text="Actualizar" onClick={handleUpdateUser} />
        </form>
      </div>
    </Modal>
  );
};

const mapDispatchToProps = {
  updateUser,
};

export default connect(null, mapDispatchToProps)(UpdateForm);

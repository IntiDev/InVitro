import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editUser } from '../actions';
import Button from './Button';
import Modal from './Modal';
import '../styles/components/UpdateForm.styl';

const UpdateForm = props => {
  const { item, isOpen, onCloseModal } = props;

  const [user, setUser] = useState({
    /* id: item.UserData.id, */
    id: item.id,
    documentType: item.UserData.documentType,
    identityNumber: item.UserData.identityNumber,
    name: item.UserData.name,
    lastName: item.UserData.lastName,
    email: item.UserData.email,
    phoneNumber: item.UserData.phoneNumber,
    numberContact: item.UserData.numberContact,
    userStatus: item.UserData.userStatus,
    rol: item.UserData.rol,
  });

  const handleUpdateUser = () => {
    props.editUser(user);
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
      <div className="updateCard">
        <h1 className="updateCard__title">Modificar Informacion</h1>
        <form className="updateCard__form" action="">
          <div className="updateCard__form__section">
            <label htmlFor="documentType">
              Tipo de Documento
              <input
                type="text"
                name="documentType"
                id="documentType"
                onChange={handleChange}
                defaultValue={item.UserData.documentType}
              />
            </label>

            <label htmlFor="identityNumber">
              Documento
              <input
                type="text"
                name="identityNumber"
                id="identityNumber"
                onChange={handleChange}
                defaultValue={item.UserData.identityNumber}
              />
            </label>

            <label htmlFor="name">
              Nombre
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                defaultValue={item.UserData.name}
              />
            </label>

            <label htmlFor="lastName">
              Apellido
              <input
                type="text"
                name="lastName"
                id="lastName"
                onChange={handleChange}
                defaultValue={item.UserData.lastName}
              />
            </label>

            <label htmlFor="numberContact">
              Celular
              <input
                type="text"
                name="numberContact"
                id="numberContact"
                onChange={handleChange}
                defaultValue={item.UserData.numberContact}
              />
            </label>

            <label htmlFor="phoneNumber">
              Tlf Fijo
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                onChange={handleChange}
                defaultValue={item.UserData.phoneNumber}
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
              defaultValue={item.UserData.email}
            />
          </label>

          <label htmlFor="rol">
            Tipo de Usuario
            <select id="rol" name="rol" onChange={handleChange}>
              <option value="none" selected disable="true" hidden>
                {' '}
                Selecciona un rol
              </option>
              <option value="Paciente">Paciente</option>
              <option value="Medico">Médico</option>
              <option value="Administrador">Administrador</option>
            </select>
          </label>
        </form>
        <Button text="Actualizar" onClick={handleUpdateUser} />
      </div>
    </Modal>
  );
};

const mapDispatchToProps = {
  editUser,
};

export default connect(null, mapDispatchToProps)(UpdateForm);

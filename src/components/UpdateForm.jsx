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
    cedulaId: item.cedulaId,
    name: item.name,
    email: item.email,
    phone: item.phone,
    state: item.state,
  });

  const handleUpdateUser = () => {
    props.updateUser(user);
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
          <label htmlFor="document">
            Documento
            <input
              type="text"
              name="cedulaId"
              id="cedulaId"
              defaultValue={item.cedulaId}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="name">
            Nombre
            <input
              type="text"
              name="name"
              id="name"
              defaultValue={item.name}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="celphone">
            Celular
            <input
              type="text"
              name="phone"
              id="phone"
              defaultValue={item.phone}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="mail">
            Correo
            <input
              type="mail"
              name="email"
              id="email"
              defaultValue={item.email}
              onChange={handleChange}
            />
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

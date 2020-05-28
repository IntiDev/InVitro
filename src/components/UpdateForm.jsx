import React from 'react';
import Button from './Button';
import Modal from './Modal';
import '../styles/components/RegisterForm.styl';

const UpdateForm = ({ item, isOpen, onCloseModal }) => {
  return (
    <Modal isOpen={isOpen} onCloseModal={onCloseModal}>
      <div className="registerCard">
        <h1 className="registerCard__title">Modificar Informacion</h1>
        <form className="registerCard__form" action="">
          <label htmlFor="document">
            Documento
            <input
              type="text"
              name="document"
              id="document"
              defaultValue={item.cedulaId}
            />
          </label>

          <label htmlFor="name">
            Nombre
            <input type="text" name="name" id="name" defaultValue={item.name} />
          </label>

          <label htmlFor="celphone">
            Celular
            <input
              type="text"
              name="celphone"
              id="celphone"
              defaultValue={item.phone}
            />
          </label>

          <label htmlFor="mail">
            Correo
            <input
              type="mail"
              name="mail"
              id="mail"
              defaultValue={item.email}
            />
          </label>

          <Button text="Actualizar" />
        </form>
      </div>
    </Modal>
  );
};

export default UpdateForm;

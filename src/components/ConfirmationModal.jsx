import React from 'react';
import { connect } from 'react-redux';
import { deleteUser } from '../actions';
import Modal from './Modal';
import Button from './Button';
import '../styles/components/ConfirmationModal.styl';

const ConfirmationModal = props => {
  const { item, isOpen, onCloseModal } = props;

  return (
    <Modal isOpen={isOpen} onCloseModal={onCloseModal}>
      <div className="confirmationModal">
        <span className="material-icons confirmationModal__warningIcon">
          error_outline
        </span>
        <p>¿Esta seguro que desea deshabilitar al usuario {item.name} ?</p>
        <div className="confirmationModal__btn">
          <Button text="Borrar" warningBtn></Button>
          <Button text="Cancelar" cancelBtn></Button>
        </div>
      </div>
    </Modal>
  );
};

const mapDispatchToProps = {
  deleteUser,
};

export default connect(null, mapDispatchToProps)(ConfirmationModal);

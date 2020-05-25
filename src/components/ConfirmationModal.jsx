import React from 'react';
import '../styles/components/ConfirmationModal.styl';

const ConfirmationModal = props => {
  const { name } = props;
  return (
    <div className="confirmationModal">
      <span className="material-icons confirmationModal__closeIcon">clear</span>
      <span className="material-icons confirmationModal__warningIcon">
        error_outline
      </span>
      <p>
        ¿Esta seguro que desea deshabilitar al usuario
        {name}
        {' '}
        ?
      </p>
      <div className="confirmationModal__btn">
        <button className="confirmationModal__btn--warning" type="button">
          Borrar
        </button>
        <button className="confirmationModal__btn--cancel" type="button">
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;

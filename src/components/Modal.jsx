import React from 'react';
/* import ReactDOM from 'react-dom'; */

import '../styles/components/Modal.styl';

const Modal = ({ children, isOpen, onCloseModal }) => {
  if (isOpen === 'false') {
    return null;
  }
  return (
    <div className="Modal">
      <div className="Modal__container">
        <button
          type="button"
          onClick={onCloseModal}
          className="Modal__close-button"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

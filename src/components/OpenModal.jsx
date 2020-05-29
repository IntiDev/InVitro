/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';
import UpdateForm from './UpdateForm';

const OpenModal = ({ type, item, history }) => {
  const [modal, setModal] = useState('false');

  const handleOpenModal = () => {
    setModal('true');
  };

  const handleCloseModal = () => {
    setModal('false');
  };

  if (type === 'edit') {
    return (
      <>
        <span
          className="material-icons"
          onClick={() => handleOpenModal()}
          role="button"
        >
          edit
        </span>

        <UpdateForm
          item={item}
          isOpen={modal}
          onCloseModal={handleCloseModal}
          history={history}
        />
      </>
    );
  }

  return (
    <>
      <span
        className="material-icons"
        onClick={() => handleOpenModal()}
        role="button"
      >
        delete
      </span>

      <ConfirmationModal
        item={item}
        isOpen={modal}
        onCloseModal={handleCloseModal}
        history={history}
      />
    </>
  );
};

export default OpenModal;

/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';
import UpdateForm from './UpdateForm';
import ExamModal from './ExamModal';
import Button from './Button';
import '../styles/components/OpenModal.styl';

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
          className={`material-icons ${
            item.state === 'Desactive' ? 'disableIcon' : ''
          }`}
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

  if (type === 'select') {
    return (
      <>
        <Button text="Agregar exámen" onClick={handleOpenModal} />
        <ExamModal item={item} isOpen={modal} onCloseModal={handleCloseModal} />
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
        {item.state === 'Desactive' ? 'check_circle' : 'delete'}
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

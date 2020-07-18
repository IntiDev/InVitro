import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';
import Modal from './Modal';
import Button from './Button';

const UploadCsvModal = props => {
  const { isOpen, onCloseModal } = props;
  const [file, setFile] = useState('');
  const [display, setDisplay] = useState(false);

  const handleChange = e => {
    setFile(e.target.files[0]);
  };

  const addUsers = async event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('usersCSV', file);
    try {
      await fetch('http://localhost:3000/uploadCSV', {
        method: 'POST',
        body: formData,
      });
      setDisplay(true);
    } catch (error) {
      console.log(error);
    }
  };

  const reload = () => {
    props.fetchAPI();
    onCloseModal();
  };

  return (
    <Modal isOpen={isOpen} onCloseModal={onCloseModal}>
      {display === false ? (
        <form onSubmit={addUsers}>
          <h1>Introduce el archivo CSV aqui:</h1>
          <input
            type="file"
            name="csvFile"
            id="csvFile"
            onChange={handleChange}
            required
          />
          <Button inputButton text="Crear Usuarios" />
        </form>
      ) : (
        <div>
          No aparece nada
          <Button inputButton text="Probando" onClick={reload} />
        </div>
      )}
    </Modal>
  );
};

const mapDispatchToProps = {
  fetchAPI,
};

export default connect(null, mapDispatchToProps)(UploadCsvModal);

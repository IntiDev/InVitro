import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';
import Modal from './Modal';
import Button from './Button';
import '../styles/components/UploadCsvModal.styl';

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
      await fetch('https://invitro-api.herokuapp.com/uploadCSV', {
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
    setDisplay(false);
  };

  return (
    <Modal isOpen={isOpen} onCloseModal={onCloseModal}>
      {display === false ? (
        <div className="csvUpload__container">
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
        </div>
      ) : (
        <div className="infoModal__container">
          <span className="material-icons">check_circle</span>
          <p>Los usuarios fueron cargados exitosamente</p>
          <Button inputButton text="Aceptar" onClick={reload} />
        </div>
      )}
    </Modal>
  );
};

const mapDispatchToProps = {
  fetchAPI,
};

export default connect(null, mapDispatchToProps)(UploadCsvModal);

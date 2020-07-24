import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changeExam } from '../actions';
import Modal from './Modal';
import Button from './Button';
import '../styles/components/UploadCsvModal.styl';

const UploadCsvModal = props => {
  const { isOpen, onCloseModal, exam, user } = props;
  const [file, setFile] = useState('');
  const [display, setDisplay] = useState(false);

  const handleChange = e => {
    setFile(e.target.files[0]);
  };

  const uploadResults = async event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('results', file);
    formData.append('examId', exam);
    try {
      await fetch(`https://invitro-api.herokuapp.com/result/${user.id}`, {
        method: 'POST',
        body: formData,
      });

      setDisplay(true);
    } catch (error) {
      console.log(error);
    }
  };

  const reload = () => {
    setDisplay(false);
    onCloseModal();
    props.changeExam(exam);
  };

  return (
    <Modal isOpen={isOpen} onCloseModal={onCloseModal}>
      {display === false ? (
        <div className="csvUpload__container">
          <form onSubmit={uploadResults}>
            <h1>Introduce el archivo CSV aqui:</h1>
            <input
              type="file"
              name="resultsPdf"
              id="resultsPdf"
              onChange={handleChange}
              required
            />
            <Button inputButton text="Cargar Resultados" />
          </form>
        </div>
      ) : (
        <div className="infoModal__container">
          <span className="material-icons">check_circle</span>
          <p>Los resultados fueron cargados exitosamente</p>
          <Button inputButton text="Aceptar" onClick={reload} />
        </div>
      )}
    </Modal>
  );
};

const mapDispatchToProps = {
  changeExam,
};

export default connect(null, mapDispatchToProps)(UploadCsvModal);

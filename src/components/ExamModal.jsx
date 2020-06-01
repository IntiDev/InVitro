/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import Modal from './Modal';
import '../styles/components/ExamModal.styl';

const ExamsModal = props => {
  const { /* exams, */ isOpen, onCloseModal } = props;

  return (
    <Modal isOpen={isOpen} onCloseModal={onCloseModal}>
      <div className="examsModal">
        <h1 className="examsModal__title"> Selecciona un Examen </h1>

        <form className="examsModal__form" action="">
          <div className="examsModal__formItem">
            <label htmlFor="exams"> Nombre del Examen </label>
            <select id="exams" name="exams">
              {/* {exams.map(item => (
                <option value={item.name} key={item.id}>
                  {item.name}
                </option>
              ))} */}
              <option value="Examen1" key="1">
                Examen1
              </option>
              <option value="Examen2" key="2">
                Examen2
              </option>
            </select>
          </div>

          <div className="examsModal__formItem">
            <label htmlFor="instructions"> Indicaciones </label>
            <textarea
              name="instructions"
              id="instructions"
              rows="4"
              maxLength="200"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qui
              laborum totam officia facere tenetur quos perferendis. Dolorum
              ipsam
            </textarea>
          </div>

          <div className="examsModal__formItem">
            <label htmlFor="notes"> Notas </label>
            <textarea name="notes" id="notes" rows="4" maxLength="200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum qui
              laborum totam officia facere tenetur quos perferendis. Dolorum
              ipsam
            </textarea>
          </div>

          <input className="examsModal__formSubmit" type="submit" />
        </form>
      </div>
    </Modal>
  );
};

export default ExamsModal;

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import UploadResultsModal from './UploadResultsModal';
import '../styles/components/ExamsTable.styl';

const ExamsTable = ({ user, show }) => {
  const headerTable = ['Fecha', 'Tipo de Examen', 'Estado', 'Acción'];
  const initialState = {
    examIdSelected: '',
    isOpen: 'false',
  };
  const [modal, setModal] = useState(initialState);

  const onOpenModal = e => {
    if (modal.isOpen === 'false') {
      setModal({
        examIdSelected: e.target.id,
        isOpen: 'true',
      });
    }
  };

  const onCloseModal = () => {
    setModal({
      ...modal,
      isOpen: 'false',
    });
  };

  if (show === true) {
    return (
      <div className="tableContainer">
        <div className="tableContainer__title">
          <h3>
            {user.userData.name} {user.userData.lastName}
          </h3>
          <span>{user.userData.identityNumber}</span>
        </div>
        <table className="examsTable">
          <thead>
            <tr className="examsTable__header">
              {headerTable.map(item => (
                <th key={item}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {user.Exams.map(item => (
              <tr
                key={item.examId}
                /* className={
            item.state === 'Desactive'
              ? 'Table__desactiveRow'
              : 'Table__row'
          } */
              >
                <td className="examsTable__cell cell__date">
                  {item.exam.date}
                </td>
                <td className="examsTable__cell cell__type">
                  {' '}
                  {item.exam.type}
                </td>
                <td className="examsTable__cell cell__status">
                  {item.exam.status ? 'Cargado' : 'Pendiente'}
                </td>
                <td
                  className="examsTable__cell cell__action"
                  id={item.examId}
                  onClick={onOpenModal}
                >
                  Cargar
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <UploadResultsModal
          user={user}
          exam={modal.examIdSelected}
          isOpen={modal.isOpen}
          onCloseModal={onCloseModal}
        />
      </div>
    );
  }
  return '';
};

export default ExamsTable;

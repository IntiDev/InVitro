import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import '../styles/components/ExamsTable.styl';

const ExamsTable = ({ user, show }) => {
  const headerTable = ['Fecha', 'Tipo de Examen', 'Estado', 'Acción'];
  if (show === true) {
    return (
      <div className="tableContainer">
        <div className="tableContainer__title">
          <h3>
            {user.name} {user.lastname}
          </h3>
          <span>{user.cedulaId}</span>
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
            {user.exams.map(item => (
              <tr
                key={item.idExam}
                /* className={
              item.state === 'Desactive'
                ? 'Table__desactiveRow'
                : 'Table__row'
            } */
              >
                <td className="examsTable__cell cell__date">{item.date}</td>
                <td className="examsTable__cell cell__type">
                  {' '}
                  {item.examType}
                </td>
                <td className="examsTable__cell cell__status">{item.state}</td>
                <td className="examsTable__cell cell__action">Cargar</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/uploadExams">
          <Button text="Agregar Examenes" />
        </Link>
      </div>
    );
  }
  return '';
};

export default ExamsTable;

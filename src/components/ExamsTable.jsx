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
        <table className="Table">
          <thead>
            <tr className="Table__header">
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
                <td className="Table__cell">{item.date}</td>
                <td className="Table__cell"> {item.examType}</td>
                <td className="Table__cell">{item.state}</td>
                <td className="Table__cell">Cargar</td>
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

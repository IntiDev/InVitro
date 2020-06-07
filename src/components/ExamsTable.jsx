import React from 'react';
import Button from './Button';
import '../styles/components/ExamsTable.styl';

const ExamsTable = ({ exams }) => {
  const headerTable = ['Fecha', 'Tipo de Examen', 'Estado', 'Acción'];
  return (
    <div className="tableContainer">
      <div className="tableContainer__title">
        <h3>Usuario Fulano</h3>
        <span>19142879</span>
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
          {exams.map(item => (
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
      <Button text="Agregar Examenes" />
    </div>
  );
};

export default ExamsTable;

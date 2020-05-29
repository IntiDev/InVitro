import React from 'react';
import OpenModal from './OpenModal';
import '../styles/components/Table.styl';

const Table = ({ users }) => {
  const data = {
    tableViewData: ['Cedula', 'Nombre', 'Celular', 'Correo', 'Estado'],
    userInformation: users,
  };

  return (
    <table className="Table">
      <thead>
        <tr className="Table__header">
          {data.tableViewData.map(item => (
            <th key={item}>{item}</th>
          ))}
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.userInformation.map(item => (
          <tr key={item.idUser} className="Table__row">
            <td className="Table__cell">{item.cedulaId}</td>
            <td className="Table__cell">{item.name}</td>
            <td className="Table__cell">{item.phone}</td>
            <td className="Table__cell">{item.email}</td>
            <td className="Table__cell">{item.state}</td>
            <td className="Table__actions">
              <OpenModal type="edit" item={item} />
              <OpenModal type="delete" item={item} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

import React from 'react';
import '../styles/components/Table.styl';

const Table = () => {
  const data = {
    tableViewData: ['Cedula', 'Nombre', 'Celular', 'Correo', 'Estado'],
    userInformation: [
      {
        cedulaId: '12345678',
        name: 'Fulanito González',
        phone: '0123456789',
        email: 'user@dominio.com',
        state: 'Activo',
      },
      {
        cedulaId: '87654321',
        name: 'Susana Hernández',
        phone: '9876543210',
        email: 'user@dominio.com',
        state: 'Inactivo',
      },
    ],
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
          <tr key={item.cedulaId} className="Table__row">
            <td className="Table__cell">{item.cedulaId}</td>
            <td className="Table__cell">{item.name}</td>
            <td className="Table__cell">{item.phone}</td>
            <td className="Table__cell">{item.email}</td>
            <td className="Table__cell">{item.state}</td>
            <td className="Table__actions">
              <span className="Table__actionButton material-icons">edit</span>
              <span className="Table__actionButton material-icons">delete</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

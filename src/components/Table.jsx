/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import OpenModal from './OpenModal';
import '../styles/components/Table.styl';

const Table = ({ users, history }) => {
  const data = {
    tableViewData: ['Cedula', 'Nombre', 'Celular', 'Correo', 'Rol', 'Estado'],
    userInformation: users,
  };

  return (
    <div className="container">
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
            <tr
              key={item.idUser}
              className={
                item.state === 'Desactive'
                  ? 'Table__desactiveRow'
                  : 'Table__row'
              }
            >
              <td className="Table__cell">{item.cedulaId}</td>
              <td className="Table__cell">{`${item.name} ${item.lastname}`}</td>
              <td className="Table__cell">{item.phone}</td>
              <td className="Table__cell">{item.email}</td>
              <td className="Table__cell">{item.role}</td>
              <td className="Table__cell">{item.state}</td>
              <td className="Table__actions">
                <OpenModal
                  type="edit"
                  item={item}
                  disable={item.state === 'Desactive' ? true : null}
                  history={history}
                />
                {item.state === 'Active' ? (
                  <OpenModal type="delete" item={item} />
                ) : (
                  <span className="material-icons" role="button">
                    check_circle
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

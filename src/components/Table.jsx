/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import { deleteUser } from '../actions';
import OpenModal from './OpenModal';
import '../styles/components/Table.styl';

const Table = props => {
  const { users, history } = props;
  const data = {
    tableViewData: ['Cedula', 'Nombre', 'Celular', 'Correo', 'Rol', 'Estado'],
    userInformation: users,
  };

  const handleActiveIcon = user => {
    const activeUser = {
      id: user.id,
      idUser: user.idUser,
      state: 'Active',
    };
    props.deleteUser(activeUser);
  };
  return (
    <div className="container">
      <table className="Table">
        <thead>
          <tr className="Table__header">
            {data.tableViewData.map(item => (
              <th className={`Table__header__${item}`} key={item}>
                {item}
              </th>
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
              <td className="Table__cell cell_cedula">{item.cedulaId}</td>
              <td className="Table__cell cell_name">{`${item.name} ${item.lastname}`}</td>
              <td className="Table__cell cell_phone">{item.phone}</td>
              <td className="Table__cell cell_email">{item.email}</td>
              <td className="Table__cell cell_role">{item.role}</td>
              <td className="Table__cell cell_state">{item.state}</td>
              <td className="Table__actions cell_actions">
                <OpenModal
                  type="edit"
                  item={item}
                  disable={item.state === 'Desactive' ? true : null}
                  history={history}
                />
                {item.state === 'Active' ? (
                  <OpenModal type="delete" item={item} />
                ) : (
                  <span
                    className="material-icons"
                    role="button"
                    onClick={() => handleActiveIcon(item)}
                  >
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

const mapDispatchToProps = {
  deleteUser,
};

export default connect(null, mapDispatchToProps)(Table);

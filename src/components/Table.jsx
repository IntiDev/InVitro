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
      userStatus: true,
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
              key={item.id}
              className={
                item.data.userStatus === false
                  ? 'Table__desactiveRow'
                  : 'Table__row'
              }
            >
              <td className="Table__cell cell_cedula">
                {item.data.identityCard}
              </td>
              <td className="Table__cell cell_name">{`${item.data.name} ${item.data.lastName}`}</td>
              <td className="Table__cell cell_phone">
                {item.data.phoneNumber}
              </td>
              <td className="Table__cell cell_email">{item.data.email}</td>
              <td className="Table__cell cell_role">{item.data.rol}</td>
              <td className="Table__cell cell_state">
                {item.data.userStatus === true ? 'Activo' : 'Inactivo'}
              </td>
              <td className="Table__actions cell_actions">
                <OpenModal
                  type="edit"
                  item={item}
                  disable={item.data.userStatus === false ? true : null}
                  history={history}
                />
                {item.data.userStatus === true ? (
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

import React, { useState } from 'react';
import UpdateForm from './UpdateForm';
import ConfirmationModal from './ConfirmationModal';
import '../styles/components/Table.styl';

const Table = ({ users }) => {
  const data = {
    tableViewData: ['Cedula', 'Nombre', 'Celular', 'Correo', 'Estado'],
    userInformation: users,
  };
  const [modal, setModal] = useState({
    editModal: 'false',
    warningModal: 'false',
  });

  const handleOpenModal = item => {
    if (item === 'editModal') setModal({ ...modal, editModal: 'true' });
    else setModal({ ...modal, warningModal: 'true' });
  };

  const handleCloseModal = () => {
    setModal({ editModal: 'false', warningModal: 'false' });
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
              <button
                type="button"
                onClick={() => handleOpenModal('editModal')}
                className="Table__actionButton material-icons"
              >
                edit
              </button>
              <UpdateForm
                item={item}
                isOpen={modal.editModal}
                onCloseModal={handleCloseModal}
              />
              <button
                type="button"
                onClick={() => handleOpenModal('warningModal')}
                className="Table__actionButton material-icons"
              >
                delete
              </button>
              <ConfirmationModal
                name={item.name}
                isOpen={modal.warningModal}
                onCloseModal={handleCloseModal}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

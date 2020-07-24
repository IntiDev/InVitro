import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SideMenu from '../components/SideMenu';
import Table from '../components/Table';
import '../styles/pages/AdminUserHome.styl';
import Button from '../components/Button';
import { fetchAPI } from '../actions';
import UploadCsvModal from '../components/UploadCsvModal';

const AdminUserHome = props => {
  const { users, history } = props;

  useEffect(() => {
    props.fetchAPI();
  }, []);

  const [filterBy, setFilter] = useState('Usuarios');
  const [modal, setModal] = useState('false');

  const filteredUsers = useFilter => {
    if (
      useFilter === 'Medico' ||
      useFilter === 'Paciente' ||
      useFilter === 'Administrador'
    ) {
      return users.filter(user => user.UserData.rol === useFilter);
    }
    if (useFilter === 'Usuarios') {
      return users;
    }
    return users.filter(
      user =>
        user.UserData.name.toLowerCase().includes(useFilter.toLowerCase()) ||
        user.UserData.lastName
          .toLowerCase()
          .includes(useFilter.toLowerCase()) ||
        user.id.includes(useFilter)
    );
  };

  const filterSelected = menuFilter => {
    setFilter(menuFilter);
  };

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const handleModal = () => {
    if (modal === 'false') setModal('true');
    else setModal('false');
  };

  return (
    <div className="userHome">
      <SideMenu useFilter={filterSelected} />
      <div className="userHome__table">
        <div className="userHome__tableActions">
          <div className="userHome__tableActions__filter">
            <h2> Usuarios </h2>
            <input type="text" placeholder="Filter" onChange={handleChange} />
          </div>
          <div>
            <Link className="Boton" to="/register">
              <Button className="button" text="Nuevo Usuario" />
            </Link>

            <Button text="Cargar CSV " onClick={handleModal} />
          </div>
        </div>

        <Table users={filteredUsers(filterBy)} history={history} />
      </div>
      <div>
        <Link to="/register">
          <span className="material-icons addUser">add_circle</span>
        </Link>
      </div>
      <UploadCsvModal
        isOpen={modal}
        onCloseModal={handleModal}
        history={history}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = {
  fetchAPI,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminUserHome);

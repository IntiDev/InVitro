import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SideMenu from '../components/SideMenu';
import Table from '../components/Table';
import '../styles/pages/AdminUserHome.styl';
import Button from '../components/Button';

const AdminUserHome = ({ users, history }) => {
  return (
    <div className="userHome__container">
      <SideMenu />
      <div className="userHome__table">
        <div className="userHome__tableActions">
          <div className="userHome__tableActions__filter">
            <h2> Titulo Tabla</h2>
            <input type="text" placeholder="Filter" />
          </div>
          <div>
            <Link to="/register">
              <Button text="Nuevo Usuario" />
            </Link>
            <Button text="Cargar CSV " />
          </div>
        </div>
        <Table users={users} history={history} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, null)(AdminUserHome);

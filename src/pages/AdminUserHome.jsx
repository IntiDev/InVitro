import React from 'react';
import SideMenu from '../components/SideMenu';
import Table from '../components/Table';
import '../styles/pages/AdminUserHome.styl';
import Button from '../components/Button';

const AdminUserHome = () => {
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
            <Button text="Nuevo Usuario" />
            <Button text="Cargar CSV " />
          </div>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default AdminUserHome;

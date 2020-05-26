import React from 'react';
import SideMenu from '../components/SideMenu';
import Table from '../components/Table';
import '../styles/pages/AdminUserHome.styl';

const AdminUserHome = () => {
  return (
    <div className="userHome__container">
      <SideMenu />
      <Table />
    </div>
  );
};

export default AdminUserHome;

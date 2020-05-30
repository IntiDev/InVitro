/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import '../styles/components/SideMenu.styl';

const SideMenu = ({ useFilter }) => {
  const menuInfo = [
    {
      linkName: 'Administrador',
      icon: 'clear',
    },
    {
      linkName: 'Pacientes',
      icon: 'clear',
    },
    {
      linkName: 'Medicos',
      icon: 'clear',
    },
    {
      linkName: 'Todos',
      icon: 'clear',
    },
  ];
  return (
    <div className="sideMenu">
      <h2 className="sideMenu__title">Filtros</h2>
      {menuInfo.map(item => (
        <div className="sideMenu__link" key={item.linkName}>
          <span className="material-icons">{item.icon}</span>
          <span onClick={() => useFilter(item.linkName)}>{item.linkName}</span>
        </div>
      ))}
    </div>
  );
};

export default SideMenu;

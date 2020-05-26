import React from 'react';
import '../styles/components/SideMenu.styl';

const SideMenu = () => {
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
  ];
  return (
    <div className="sideMenu">
      <h2 className="sideMenu__title">Filtros</h2>
      {menuInfo.map(item => (
        <div className="sideMenu__link">
          <span className="material-icons">{item.icon}</span>
          <span>{item.linkName}</span>
        </div>
      ))}
    </div>
  );
};

export default SideMenu;

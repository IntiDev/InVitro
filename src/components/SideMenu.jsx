/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import '../styles/components/SideMenu.styl';

const SideMenu = ({ useFilter }) => {
  const menuInfo = ['Administrador', 'Paciente', 'Medico', 'Usuarios'];
  return (
    <div className="sideMenu">
      <h2 className="sideMenu__title">Filtros</h2>
      {menuInfo.map(item => (
        <div className="sideMenu__link" key={item}>
          <span className="material-icons">filter_alt</span>
          <span onClick={() => useFilter(item)}>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default SideMenu;

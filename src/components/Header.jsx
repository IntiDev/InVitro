import React from 'react';
import '../styles/components/Header.styl';

const Header = props => {
  const { user, userName } = props;
  return (
    <div className="Header">
      <img
        src="http://resource.intidev.info/InVitro/logo.png"
        alt="Logo"
        className="Header__logo"
      />
      <h2 className="Header__title">
        Portal de
        {user}
      </h2>
      <div className="Header__userInformation">
        <p>
          Bienvenido <br />
          {userName}
        </p>
        <span
          className="Header__userIcon material-icons "
          style={{ fontSize: 60 }}
        >
          account_circle
        </span>
      </div>
    </div>
  );
};

export default Header;

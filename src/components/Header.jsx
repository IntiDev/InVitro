import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.styl';

const Header = () => {
  return (
    <div className="Header">
      <img
        src="http://intidev.videliapps.com/resource.intidev.info/InVitro/logo.png"
        alt="Logo"
        className="Header__logo"
      />
      <div className="Header__userInformation">
        <p>Bienvenido {/* <br />
          {userName} */}</p>
        <span
          className="Header__userIcon material-icons "
          style={{ fontSize: 40 }}
        >
          account_circle
        </span>
        <Link to="/">
          <span
            className="Header__userIcon material-icons "
            style={{ fontSize: 40 }}
          >
            exit_to_app
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;

import React from 'react';
import '../styles/components/Login.styl';

const Login = props => {
  const { title } = props;
  return (
    <div className="Login">
      <p className="Login__title"> 
        {' '}
        {title}
        {' '}
      </p>
      <input
        type="email"
        className="Login__input"
        placeholder="usuario@correo.com"
      />
      <input type="password" className="Login__input" placeholder="********" />
      <button type="button" className="Login__button">
        {' '}
        LOGIN
        {' '}
      </button>
      {' '}
      {/* This element will be replaced by the button component */}
    </div>
  );
};

export default Login;

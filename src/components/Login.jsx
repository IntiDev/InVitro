import React from 'react';
import Button from './Button';
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
      <Button text="Login" />
    </div>
  );
};

export default Login;

import React from 'react';
import Button from './Button';
import '../styles/components/LoginForm.styl';

const LoginForm = props => {
  const { title } = props;
  const clickMe = () => {
    console.log('Click!');
  };

  return (
    <div className="LoginForm">
      <p className="LoginForm__title">{title}</p>
      <input
        type="email"
        className="LoginForm__input"
        placeholder="usuario@correo.com"
      />
      <input
        type="password"
        className="LoginForm__input"
        placeholder="********"
      />
      <Button text="Login" onClick={clickMe} />
    </div>
  );
};

export default LoginForm;

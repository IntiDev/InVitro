import React, { useState } from 'react';
import Button from './Button';
import '../styles/components/LoginForm.styl';

const LoginForm = props => {
  const { title } = props;

  const initialState = {
    email: '',
    password: '',
  };

  const [{ email, password }, setState] = useState(initialState);

  const API_URL = 'API_URL_HERE';

  const clearState = () => {
    setState({ ...initialState });
  };

  const sendUserInformation = async (url, method, data) => {
    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return response;
    } catch (e) {
      return e;
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleClick = () => {
    sendUserInformation(`${API_URL}/login`, 'POST', { email, password })
      .then(() => {
        clearState();
        // console.log('Usuario válido'); // Manda a vista correspondiente
      })
      .catch(() => {
        // console.error('Error');
      });
  };

  return (
    <div className="LoginForm">
      <p className="LoginForm__title">{title}</p>
      <input
        type="email"
        name="email"
        value={email}
        className="LoginForm__input"
        placeholder="usuario@correo.com"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={password}
        className="LoginForm__input"
        placeholder="********"
        onChange={handleChange}
      />
      <Button text="Login" onClick={handleClick} />
    </div>
  );
};

export default LoginForm;

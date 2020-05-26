/* eslint-disable react/destructuring-assignment */
import React from 'react';
import RegisterForm from '../components/RegisterForm';
import '../styles/pages/Register.styl';

const Register = props => {
  const { id } = props.match.params;
  return (
    <div className="registerContainer">
      <div className="registerContainer__goBack">
        <span className="material-icons">arrow_back</span>
        <a href="/">Atras</a>
      </div>
      <div className="registerContainer__form">
        {id ? <RegisterForm /> : <RegisterForm isNew="true" />}
      </div>
    </div>
  );
};

export default Register;

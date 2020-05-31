/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import '../styles/pages/Register.styl';

const Register = props => {
  return (
    <div className="registerContainer">
      <Link to="/adminUser">
        <div className="registerContainer__goBack">
          <span className="material-icons">arrow_back</span>
          <span>Atras</span>
        </div>
      </Link>
      <div className="registerContainer__form">
        <RegisterForm history={props.history} />
      </div>
    </div>
  );
};

export default Register;

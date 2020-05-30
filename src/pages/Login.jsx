import React from 'react';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';
import '../styles/pages/Login.styl';

const Login = () => {
  return (
    <>
      <div className="Login">
        <section className="Login__info">
          <img
            className="Login__logo"
            src="http://resource.intidev.info/InVitro/logo.png"
            alt="Logo"
          />
          <div className="Login__text">
            <p>
              &quot;La salud es el regalo más grande, cuídala y protégete&quot;
            </p>
            <p>
              Comprometidos con
              <br /> <strong> tus estudios</strong>
            </p>
          </div>
        </section>
        <section className="Login__form">
          <LoginForm title="Bienvenido" />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Login;

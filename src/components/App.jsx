import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';

const App = () => {
  return (
    <>
      <Header user="Administrador" userName="Fulanito González" />
      <Login title="Bienvenido" />
      <Footer clinicalName="In Vitro" />
    </>
  );
};

export default App;

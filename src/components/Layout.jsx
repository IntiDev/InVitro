import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/components/Layout.styl';

const Layout = ({ children }) => (
  <div className="App">
    <Header className="Prueba" />
    {children}
    <img
      className="background"
      src="/src/assets/images/personMockup.png"
      alt=""
    />
    <Footer clinicalName=" In Vitro" />
  </div>
);

export default Layout;

import React from 'react';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header user="Administrador" userName="Fulanito González" />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae placeat
      fuga, velit, numquam, praesentium consequuntur quos magnam non aliquam rem
      quisquam enim aliquid autem corrupti porro ipsam exercitationem pariatur
      tenetur!
      <Footer clinicalName="In Vitro" />
    </div>
  );
};

export default App;

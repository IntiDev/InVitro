import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ExamsModal from './ExamModal';
import '../styles/components/App.styl';

const App = () => {
   const info = {
    exams: [
      {
        id: 1,
        name: 'Examen de Sangre',
      },
      {
        id: 2,
        name: 'Examen de Orina',
      },
      {
        id: 3,
        name: 'Examen de Otra cosa',
      },
    ],
  };
  return (
    <div>
      <Header user="Administrador" userName="Fulanito González" />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae placeat
      fuga, velit, numquam, praesentium consequuntur quos magnam non aliquam rem
      quisquam enim aliquid autem corrupti porro ipsam exercitationem pariatur
      tenetur!
      <ExamsModal exams={info.exams} />
      <Footer clinicalName="In Vitro" />
    </div>
  );
};

export default App;

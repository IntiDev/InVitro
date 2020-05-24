import React from 'react';
import '../styles/components/App.styl';
import ExamsModal from './ExamModal';

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
    <div className="App">
      <ExamsModal exams={info.exams} />
    </div>
  );
};

export default App;

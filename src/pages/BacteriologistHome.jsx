import React from 'react';
import SearchBox from '../components/SearchBox';
import ExamsTable from '../components/ExamsTable';
import '../styles/pages/BacteriologistHome.styl';

const BacteriologistHome = () => {
  const exams = [
    {
      idExam: '1',
      date: '10/12/2020',
      examType: 'Examen de sangre 1',
      state: 'Completado',
    },
    {
      idExam: '2',
      date: '10/12/2020',
      examType: 'Examen de sangre 1',
      state: 'Completado',
    },
    {
      idExam: '3',
      date: '10/12/2020',
      examType: 'Examen de sangre 1',
      state: 'Completado',
    },
  ];
  return (
    <div className="bactContainer">
      <div className="bactCardContainer">
        <SearchBox></SearchBox>
        <hr />
        <ExamsTable exams={exams}></ExamsTable>
      </div>
    </div>
  );
};

export default BacteriologistHome;

import React from 'react';
import Button from './Button';
import '../styles/components/ResultsForm.styl';

const ResultsForm = () => {
  /* const { user, id, exam, typeId, examResult } = props; */
  const examResult = {
    name: 'Examen de Sangre 1',
    results: {
      Globulos: 'Globulitos',
      Plaquetas: 'Plaquetotas',
      Leucocitos: 'Plaquetotas',
      Insulina: 'Plaquetotas',
      Glucosa: 'Plaquetotas',
      Otro: 'Plaquetotas',
    },
  };
  return (
    <div className="resultsCard">
      <div className="resultsCard__userInfo">
        <h1> Fulanito Gonzalez</h1>
        <h3>C.C : 19.142.879</h3>
        <h2>{examResult.name}</h2>
      </div>
      <form action="" className="resultsCard__form">
        {Object.keys(examResult.results).map(result => (
          <label htmlFor={result} key={result}>
            {result}
            <input type="text" />
          </label>
        ))}
      </form>
      <Button text="Cargar Resultados" />
    </div>
  );
};

export default ResultsForm;

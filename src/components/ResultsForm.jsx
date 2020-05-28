import React from 'react';
import '../styles/components/ResultsForm.styl';

const ResultsForm = props => {
  const { user, id, exam, typeId, examResult } = props;
  return (
    <div className="resultsCard">
      <div className="resultsCard__userInfo">
        <h1>{user}</h1>
        <h2>
          {typeId}
          {id}
        </h2>
        <h2>{exam}</h2>
      </div>
      <form action="" className="resultsCard__form">
        {examResult.map(result => (
          <label htmlFor={result.name} key={result.name}>
            {result.name}
            <input type="text" />
          </label>
        ))}
      </form>
      <button className="resultsCard__submitBtn" type="button">
        {' '}
        Cargar Resultados
      </button>
    </div>
  );
};

export default ResultsForm;

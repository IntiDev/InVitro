import React from 'react';
import Button from './Button';
import '../styles/components/SearchBox.styl';

const SearchBox = props => {
  const { userCc, handleChange, handleClick } = props;
  return (
    <div className="Search__container">
      <h2> Buscar Paciente</h2>
      <p>
        Digite el número de identificación del Paciente para cargar resultados
      </p>
      <div className="Search__form">
        <input
          type="text"
          name="userCc"
          value={userCc}
          className="Search__input"
          placeholder="12345"
          onChange={handleChange}
        />
        <div className="Search__form__button">
          <Button text="Buscar" onClick={handleClick} />
        </div>
      </div>
      <p className="Text__error">Lo sentimos el número es incorrecto</p>
    </div>
  );
};

export default SearchBox;

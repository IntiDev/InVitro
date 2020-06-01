import React, { useState } from 'react';
import Button from '../components/Button';
import '../styles/pages/MedicalSearchView.styl';

const MedicalSearchView = () => {
  const initialState = {
    userId: '',
  };

  const [{ userId }, setState] = useState(initialState);

  const API_URL = 'https://servicios-invitro.intidev.info/public/';

  const clearState = () => {
    setState({ ...initialState });
  };

  const sendUserId = async (url, method, data) => {
    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (e) {
      // console.log(e);
      return e;
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleClick = () => {
    sendUserId(`${API_URL}buscar-Paciente`, 'POST', { filtro: userId })
      .then(() => {
        // console.log(response);
        clearState();
      })
      .catch(() => {
        // console.error('Error:'+ error);
      });
  };

  return (
    <div className="cardSearchContainer">
      <div className="Search__container">
        <h2> Buscar Paciente</h2>
        <p>
          Digite el número de identificación del Paciente para cargar resultados
        </p>
        <div className="Search__form">
          <input
            type="text"
            name="userId"
            value={userId}
            className="Search__input"
            placeholder="1234456"
            onChange={handleChange}
          />

          <Button text="Buscar" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default MedicalSearchView;

import React, { useState } from 'react';
import SearchBox from '../components/SearchBox';
import ExamsTable from '../components/ExamsTable';
import '../styles/pages/BacteriologistHome.styl';

const BacteriologistHome = () => {
  const initialState = {
    userCc: '',
    showComponent: false,
    activeText: false,
  };

  const [state, setState] = useState(initialState);

  const user = {
    idUser: 1,
    documentType: 'Cedula de Extranjeria',
    cedulaId: '101010',
    name: 'Ibrahim',
    lastname: 'Criple',
    email: 'icriple0@devhub.com',
    phone: '850-991-2535',
    cellphone: '253-834-9133',
    state: 'Active',
    role: 'Medico',
    exams: [
      {
        idExam: '1',
        date: '10/12/2020',
        examType: 'Examen de sangre 1',
        state: 'Completado',
        results: {
          Globulos: 'Globulitos',
          Plaquetas: 'Plaquetotas',
          Leucocitos: 'Plaquetotas',
          Insulina: 'Plaquetotas',
          Glucosa: 'Plaquetotas',
          Otro: 'Plaquetotas',
        },
      },
      {
        idExam: '2',
        date: '10/12/2020',
        examType: 'Examen de sangre 1',
        state: 'Completado',
      },
    ],
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleClick = () => {
    if (state.userCc === user.cedulaId)
      setState({ ...state, showComponent: true });
    else {
      setState({ ...state, showComponent: false });
      window.alert('No hay tal usuario');
    }
  };

  return (
    <div className="bactContainer">
      <div className="bactCardContainer">
        <SearchBox
          userCc={state.userCc.userCc}
          handleChange={handleChange}
          handleClick={handleClick}
        ></SearchBox>
        <hr />
        <ExamsTable user={user} show={state.showComponent}></ExamsTable>
      </div>
    </div>
  );
};

export default BacteriologistHome;

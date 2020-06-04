/* eslint-disable no-undef */
import React, { useState } from 'react';
import '../styles/pages/MedicalSearchView.styl';
import SearchBox from '../components/SearchBox';

const MedicalSearchView = () => {
  const initialState = {
    userCc: '',
    activeText: false,
  };

  const [{ userCc }, setState] = useState(initialState);

  // const API_URL = 'API_URL_HERE';

  const patientsData = [
    {
      id: 1,
      typeDoc: 'Cedula',
      cc: '12345',
      email: 'david@dominio.com',
      name: 'David',
      lastName: 'Ruiz',
      mobile: '12-34-56-78',
      phone: '90-67-45-23',
      userType: 'patient',
      history: [
        {
          date: '15/12/19',
          notes:
            'El paciente presenta dolor abdominal y sufre de estreñimiento desde varios días atrás. Se receta paracetamol 10mg y dieta alta en fibra',
        },
      ],
    },
    {
      id: 2,
      typeDoc: 'Cedula',
      cc: '11111',
      email: 'sofia@dominio.com',
      name: 'Sofia',
      lastName: 'Ramirez',
      mobile: '56-45-34-45',
      phone: '88-44-66-33',
      userType: 'patient',
      history: [
        {
          date: '07/03/20',
          notes:
            'La paciente presenta migrañas constantes e insominio.  Se receta acido acetil salisilico 2 veces al día por 1 semana',
        },
      ],
    },
  ];

  const clearState = () => {
    setState({ ...initialState });
  };

  // const sendUserId = async (url, method, data) => {
  //   try {
  //     const response = await fetch(url, {
  //       method,
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(data),
  //     });
  //     return response.json();
  //   } catch (e) {
  //     // console.log(e);
  //     return e;
  //   }
  // };

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleClick = () => {
    // API IMPLEMENTATION
    // sendUserId(`${API_URL}buscar-pacientes`, 'POST', { filtro: userCc })
    //   .then(() => {
    //     // console.log(response);
    //     clearState();
    //   })
    //   .catch(() => {
    //     // console.error('Error:'+ error);
    //   });

    // MOCK DATA
    const infoPatient = patientsData.find(item => {
      return item.cc === userCc;
    });
    clearState();
    if (infoPatient) {
      localStorage.setItem('patientInfo', infoPatient);
      // eslint-disable-next-line no-restricted-globals
      location.href = '/medicalUserInfo';
    }
  };

  return (
    <div className="cardSearchContainer">
      <SearchBox
        userCc={userCc}
        handleChange={handleChange}
        handleClick={handleClick}
      ></SearchBox>
    </div>
  );
};

export default MedicalSearchView;

import React from 'react';
import { Link } from 'react-router-dom';
import MedicalHistoryForm from '../components/MedicalHistoryForm';
import '../styles/pages/MedicalViewUSerInfo.styl';

const MedicalViewUSerInfo = () => {
  // let patientData = localStorage.getItem("infoPatient");
  // console.log(patientData);

  return (
    <>
      <div className="cardInfoContainer">
        <Link to="/medical">
          <div className="Info__buttonAction">
            <span className="material-icons">arrow_back</span>
            <span>Atrás</span>
          </div>
        </Link>
        <aside className="Info__aside">
          <h2 className="Info__asideTitle">Opciones</h2>
          <div className="Info__asideOption active">
            <span className="material-icons">face</span>
            <span>Información personal</span>
          </div>
          <Link to="/medicalUserExams">
            <div className="Info__asideOption Add">
              <span className="material-icons">note_add</span>
              <span>Solicitar exámenes</span>
            </div>
          </Link>
        </aside>
        <main className="Info__mainContainer">
          <MedicalHistoryForm />
        </main>
      </div>
    </>
  );
};

export default MedicalViewUSerInfo;

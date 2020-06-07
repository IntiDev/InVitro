import React from 'react';
import { Link } from 'react-router-dom';
import MedicalHistoryForm from '../components/MedicalHistoryForm';
import '../styles/pages/PatientInfo.styl';

const PatientInfo = () => {
  return (
    <>
      <div className="Container">
        <Link to="/medicalUserInfo">
          <div className="Container__buttonAction">
            <span className="material-icons">arrow_back</span>
            <span>Atrás</span>
          </div>
        </Link>
        <aside>
          <h2 className="Info__asideTitle">Opciones</h2>
          <div className="Info__asideOption active">
            <span className="material-icons">face</span>
            <span>Información personal</span>
          </div>
          <div className="Info__asideOption">
            <span className="material-icons">note_add</span>
            <span>Consultar exámenes</span>
          </div>
        </aside>
        <main>
          <MedicalHistoryForm />
        </main>
      </div>
    </>
  );
};

export default PatientInfo;

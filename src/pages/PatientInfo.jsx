import React from 'react';
import { Link } from 'react-router-dom';
import MedicalHistoryForm from '../components/MedicalHistoryForm';
import '../styles/pages/PatientInfo.styl';

const PatientInfo = () => {
  return (
    <>
      <div className="Container">
        <aside>
          <h2 className="Info__asideTitle">Opciones</h2>
          <Link to="/patientInfo">
            <div className="Info__asideOption active">
              <span className="material-icons">face</span>
              <span>Información personal</span>
            </div>
          </Link>
          <Link to="/patientExams">
            <div className="Info__asideOption">
              <span className="material-icons">note_add</span>
              <span>Consultar exámenes</span>
            </div>
          </Link>
        </aside>
        <main>
          <MedicalHistoryForm
            name="Hugo"
            lastname="Lopez"
            celphone="12-34-56-78"
            phone="90-45-67-88"
            userId="12345XDENE"
            typeId="INE"
            date="25/02/2020"
            description="El paciente presenta dolor abdominal, se realizan estudios de orina con resultados normales, se descarta infección."
          />
        </main>
      </div>
    </>
  );
};

export default PatientInfo;

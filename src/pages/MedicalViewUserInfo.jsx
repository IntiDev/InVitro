import React from 'react';
import MedicalHistoryForm from '../components/MedicalHistoryForm';
import '../styles/pages/MedicalViewUSerInfo.styl';

const MedicalViewUSerInfo = () => {
  return (
    <>
      <div className="cardInfoContainer">
        <div className="Info__buttonAction">
          <span className="material-icons">arrow_back</span>
          <span>Atras</span>
        </div>
        <aside className="Info__aside">
          <h2 className="Info__asideTitle">Opciones</h2>
          <div className="Info__asideOption active">
            <span className="material-icons">face</span>
            <span>Información personal</span>
          </div>
          <div className="Info__asideOption">
            <span className="material-icons">note_add</span>
            <span>Solicitar exámenes</span>
          </div>
        </aside>
        <main className="Info__mainContainer">
          <MedicalHistoryForm />
        </main>
      </div>
    </>
  );
};

export default MedicalViewUSerInfo;

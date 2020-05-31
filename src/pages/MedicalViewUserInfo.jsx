import React from 'react';
import Button from '../components/Button';
import MedicalHistoryForm from '../components/MedicalHistoryForm';
import '../styles/pages/MedicalViewUSerInfo.styl';

const MedicalViewUSerInfo = () => {
  const backButton = () => {
    // console.log('back');
  };

  // const exitButton = () => {
  //   console.log('exit');
  // };

  return (
    <>
      <div className="Info__buttonAction">
        <Button text="&#x02190;" onClick={backButton} />
        <span className="material-icons Button">
          exit_to_app
          {/* onClick={exitButton} */}
        </span>
      </div>
      <aside className="Info__aside">
        <h3 className="Info__asideTitle">Opciones</h3>
        <div className="Info__asideOption active">
          <span className="material-icons">face</span>
          <p>Información personal</p>
        </div>
        <div className="Info__asideOption">
          <span className="material-icons">note_add</span>
          <p>Solicitar exámenes</p>
        </div>
      </aside>
      <main className="Info__mainContainer">
        <span
          className="material-icons Info__userIcon"
          style={{ fontSize: 50 }}
        >
          account_circle
        </span>
        <p> Nombre Apellido</p>
        <span> 123456</span>
        <MedicalHistoryForm />
      </main>
    </>
  );
};

export default MedicalViewUSerInfo;

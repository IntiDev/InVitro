import React from 'react';
import Button from '../components/Button';
import '../styles/pages/MedicalUserExams.styl';

const MedicalUserExams = () => {
  const backButton = () => {
    console.log('back');
  };

  return (
    <>
      <div className="Container">
        <aside>
          <Button text="&#x02190;" onClick={backButton} />
          <h3 className="Info__asideTitle">Opciones</h3>
          <div className="Info__asideOption">
            <span className="material-icons">face</span>
            <p>Información personal</p>
          </div>
          <div className="Info__asideOption active">
            <span className="material-icons">note_add</span>
            <p>Solicitar exámenes</p>
          </div>
        </aside>
        <main>
          <h2>Exámenes a solicitar</h2>
          <p> Nombre Apellido</p>
          <span> 123456</span>
          <table>
            <tr>
              <td>20/12/19</td>
              <td>Exámen de sangre</td>
              <td className="Actions_button">
                <span className="material-icons">edit</span>
                <span className="material-icons">delete</span>
              </td>
            </tr>
            <tr>
              <td>07/03/20</td>
              <td>Exámen de orina</td>
              <td className="Actions_button">
                <span className="material-icons">edit</span>
                <span className="material-icons">delete</span>
              </td>
            </tr>
          </table>
          <Button text="Agregar exámen" />
        </main>
      </div>
    </>
  );
};

export default MedicalUserExams;

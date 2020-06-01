import React from 'react';
import { Link } from 'react-router-dom';
import OpenModal from '../components/OpenModal';
import '../styles/pages/MedicalUserExams.styl';

const MedicalUserExams = () => {
  return (
    <>
      <div className="Container">
        <Link to="/medicalUserInfo">
          <div className="Container__buttonAction">
            <span className="material-icons">arrow_back</span>
            <span>Atras</span>
          </div>
        </Link>
        <aside>
          <h2 className="Info__asideTitle">Opciones</h2>
          <div className="Info__asideOption">
            <span className="material-icons">face</span>
            <span>Información personal</span>
          </div>
          <div className="Info__asideOption active">
            <span className="material-icons">note_add</span>
            <span>Solicitar exámenes</span>
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
          <OpenModal type="select" />
        </main>
      </div>
    </>
  );
};

export default MedicalUserExams;

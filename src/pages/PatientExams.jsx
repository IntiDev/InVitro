import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/PatientExams.styl';

const PatientExams = () => {
  return (
    <>
      <div className="Container">
        <aside>
          <h2 className="Info__asideTitle">Opciones</h2>
          <Link to="/patientInfo">
            <div className="Info__asideOption">
              <span className="material-icons">face</span>
              <span>Información personal</span>
            </div>
          </Link>
          <Link to="/patientExams">
            <div className="Info__asideOption active">
              <span className="material-icons">note_add</span>
              <span>Consultar exámenes</span>
            </div>
          </Link>
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
        </main>
      </div>
    </>
  );
};

export default PatientExams;

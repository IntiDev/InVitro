import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import '../styles/pages/PatientExams.styl';

const PatientExams = props => {
  const { name = 'Hugo', lastname = 'Lopez', cc = '9192807' } = props;

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
          <div className="Patient-info">
            <h2>{`${name}${lastname}`}</h2>
            <span> C.C. {cc}</span>
          </div>
          <hr />
          <table>
            <thead>
              <td></td>
              <td>Fecha</td>
              <td>Tipo de exámen</td>
              <td>Indicaciones</td>
              <td>Estado</td>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>20/12/19</td>
                <td>Exámen de sangre</td>
                <td> Presentarse a su cita en ayuno de 8 horas</td>
                <td className="Actions_button">
                  <span
                    className="material-icons activeIcon"
                    style={{ fontSize: 20 }}
                  >
                    check
                  </span>
                </td>
              </tr>
              <tr className="pending-exam">
                <td>
                  <input type="checkbox" name="" id="" disabled />
                </td>
                <td>07/03/20</td>
                <td>Exámen de orina</td>
                <td>Primera orina del día</td>
                <td className="Actions_button">
                  <span className="material-icons" style={{ fontSize: 20 }}>
                    timer
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <Button text="Descargar" />
          {/* <span className="material-icons" style={{ fontSize: 20 }}>get_app</span> */}
        </main>
      </div>
    </>
  );
};

export default PatientExams;

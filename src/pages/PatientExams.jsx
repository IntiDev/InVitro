import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import '../styles/pages/PatientExams.styl';

const PatientExams = props => {
  const {
    name = 'Hugo',
    lastname = 'Lopez',
    cc = '9192807',
    examsData = [
      {
        examId: '345',
        date: '05/06/2020',
        typeExam: 'Exámen de orina',
        instructions: 'Presentar primera muestra del día',
        state: false,
      },
      {
        examId: '234',
        date: '15/03/2020',
        typeExam: 'Exámen de sangre',
        instructions: 'Presentarse a su cita en ayuno de 8 horas',
        state: true,
      },
      {
        examId: '240',
        date: '15/03/2020',
        typeExam: 'Exámen de glucosa',
        instructions: 'Presentarse a su cita en ayuno de 8 horas',
        state: true,
      },
    ],
  } = props;

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
            <h2>{`${name} ${lastname}`}</h2>
            <span> C.C. {cc}</span>
          </div>
          <hr />
          <table className="Patient-table_info">
            <thead>
              <tr>
                <td></td>
                <td>Fecha</td>
                <td>Tipo de exámen</td>
                <td>Indicaciones</td>
                <td>Estado</td>
              </tr>
            </thead>
            <tbody>
              {examsData.map(item => (
                <tr
                  key={item.examId}
                  className={item.state ? '' : 'pending-exam'}
                >
                  <td>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      disabled={item.state ? '' : 'disabled'}
                    />
                  </td>
                  <td>{item.date}</td>
                  <td>{item.typeExam}</td>
                  <td>{item.instructions}</td>
                  <td className="Actions_button">
                    <span
                      className={
                        item.state
                          ? 'material-icons activeIcon'
                          : 'material-icons'
                      }
                      style={{ fontSize: 20 }}
                    >
                      {item.state ? 'check' : 'timer'}
                    </span>
                  </td>
                </tr>
              ))}
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

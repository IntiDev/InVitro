import React from 'react';
import MedicalHistoryItem from './MedicalHistoryItem';
import Button from './Button';
import '../styles/components/MedicalHistoryForm.styl';

const MedicalHistoryForm = () => {
  // const { name, lastname, celphone, phone, userId, typeId } = props;
  const name = 'Sofia';
  const lastname = 'Ramirez';
  const celphone = '12-34-56-78';
  const phone = '90-67-45-23';
  const userId = '11111';
  const typeId = 'Cédula';

  return (
    <div className="medicalHistoryForm">
      <div className="medicalHistoryForm__title">
        <span
          className="medicalHistoryForm__icon material-icons "
          style={{ fontSize: 60 }}
        >
          account_circle
        </span>
        <h1>Datos del Paciente</h1>
      </div>
      <form className="medicalHistoryForm__form" action="">
        <label htmlFor="typeID">
          Tipo de Documento
          <input type="text" name="typeID" id="typeID" value={typeId} />
        </label>

        <label htmlFor="document">
          Documento
          <input type="text" name="document" id="document" value={userId} />
        </label>

        <label htmlFor="name">
          Nombre
          <input type="text" name="name" id="name" value={name} />
        </label>

        <label htmlFor="lastname">
          Apellido
          <input type="text" name="lastname" id="lastname" value={lastname} />
        </label>

        <label htmlFor="celphone">
          Celular
          <input type="text" name="celphone" id="celphone" value={celphone} />
        </label>

        <label htmlFor="phoneNumber">
          Tlf Fijo
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={phone}
          />
        </label>
      </form>
      <div className="medicalHistoryForm__previousVisit">
        <div className="medicalHistoryForm__previousVisits__title">
          <h2>Historia clinica</h2>
          <div>
            {/* <a href="/">Agregar</a>
            <a href="/">Ver más +</a> */}
          </div>
        </div>
        <div className="medicalHistoryForm__previousVisits_description">
          <MedicalHistoryItem
            date="17/12/2019"
            description="La paciente presenta migrañas constantes e insominio.  Se receta acido acetil salisilico 2 veces al día por 1 semana"
          />
        </div>
      </div>
      {/* <button className="medicalHistoryForm__submitBtn Button" type="submit">
        Actualizar Datos
      </button> */}
      <Button text="Actualizar datos" disabled />
    </div>
  );
};

export default MedicalHistoryForm;

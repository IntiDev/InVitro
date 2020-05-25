import React from 'react';
import MedicalHistoryItem from './MedicalHistoryItem';
import '../styles/components/MedicalHistoryForm.styl';

const MedicalHistoryForm = props => {
  const { name, lastname, celphone, phone, userId, typeId } = props;
  return (
    <div className="medicalHistoryForm">
      <div className="medicalHistoryForm__title">
        <h1>
          {name} {lastname}
        </h1>
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
          <h1>Historia clinica</h1>
          <div>
            <a href="/">Agregar</a>
            <a href="/">Ver mas +</a>
          </div>
        </div>
        <div className="medicalHistoryForm__previousVisits_description">
          <MedicalHistoryItem
            date="17/12/1988"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque magnam modi deleniti commodi dolores. Aspernatur eaque itaque repudiandae dignissimos voluptatum harum placeat, commodi"
          />
        </div>
      </div>
      <button className="medicalHistoryForm__submitBtn" type="submit">
        Actualizar Datos
      </button>
    </div>
  );
};

export default MedicalHistoryForm;

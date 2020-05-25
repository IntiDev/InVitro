import React from 'react';
import '../styles/components/MedicalHistoryItem.styl';

const MedicalHistoryItem = props => {
  const { date, description } = props;
  return (
    <div className="MedicalHistoryItem">
      <p>{date}</p>
      <div className="MedicalHistoryItem__description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MedicalHistoryItem;

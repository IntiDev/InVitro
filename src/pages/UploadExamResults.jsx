import React from 'react';
import { Link } from 'react-router-dom';
import ResultsForm from '../components/ResultsForm';
import '../styles/pages/UploadExamResults.styl';

const UploadExamResults = () => {
  return (
    <div className="resultsContainer">
      <Link to="/bacteriologist">
        <div className="resultsContainer__goBack">
          <span className="material-icons">arrow_back</span>
          <span>Atras</span>
        </div>
      </Link>
      <ResultsForm></ResultsForm>
    </div>
  );
};

export default UploadExamResults;

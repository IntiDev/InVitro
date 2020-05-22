import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';
import '../styles/components/App.styl';
import ExamsModal from './ExamModal';

const App = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/exams')
      .then(response => response.json())
      .then(data => setInfo(data));
  }, []);

  return (
    <div className="App">
      <ExamsModal exams={info} />
    </div>
  );
};

export default App;

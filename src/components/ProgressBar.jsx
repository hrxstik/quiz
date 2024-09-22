import React from 'react';
import questions from '../data/questions';

const ProgressBar = ({ currentQuestion }) => {
  const progress = Math.round((currentQuestion / questions.length) * 100);
  return (
    <div className="progress-bar">
      <div style={{ width: `${progress}%` }} className="progress"></div>
    </div>
  );
};

export default ProgressBar;

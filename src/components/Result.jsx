import React from 'react';
import questions from '../data/questions';
import SubmitButton from './SubmitButton';

const Result = ({ result, setCurrentQuestion, setResult }) => {
  const onSubmitButtonClick = () => {
    setCurrentQuestion(0);
    setResult(0);
  };

  return (
    <div className="result-card">
      <h1>
        Верных ответов: {result} из {questions.length}
      </h1>
      <h2>Начать заново?</h2>
      <SubmitButton onClick={() => onSubmitButtonClick()} />
    </div>
  );
};

export default Result;

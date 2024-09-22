import React from 'react';
import questions from '../data/questions';
import ProgressBar from './ProgressBar';

const QuestionCard = ({ currentQuestion, setCurrentQuestion, setResult }) => {
  const q = questions.at(currentQuestion);

  const onClickOption = ({ index }) => {
    setCurrentQuestion((prev) => prev + 1);
    if (index === q.answer) {
      setResult((prev) => prev + 1);
    }
  };

  return (
    <div className="question-card">
      <ProgressBar currentQuestion={currentQuestion} />
      <h1>{q.question}</h1>
      <ul>
        {q.options.map((option, index) => (
          <li className="option" key={index} onClick={() => onClickOption({ index })}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;

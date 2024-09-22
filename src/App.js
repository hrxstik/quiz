import React from 'react';
import QuestionCard from './components/QuestionCard';
import questions from './data/questions';
import Result from './components/Result';

function App() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [result, setResult] = React.useState(0);
  return (
    <div className="App">
      {currentQuestion !== questions.length ? (
        <QuestionCard
          setResult={setResult}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
        />
      ) : (
        <Result result={result} setCurrentQuestion={setCurrentQuestion} setResult={setResult} />
      )}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { questions } from './questions';
import './index.css';

const App = () => {
  return (
    <div className="container">
      <h1>React Quiz</h1>
      {questions.map((q, index) => (
        <QuestionCard key={index} question={q} index={index} />
      ))}
    </div>
  );
};

const QuestionCard = ({ question, index }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = i => {
    setSelected(i);
  };

  return (
    <div className="card">
      <h3>
        {index + 1}. {question.question}
      </h3>
      <ul>
        {question.options.map((opt, i) => (
          <li
            key={i}
            className={
              selected === i
                ? i === question.correctIndex
                  ? 'correct'
                  : 'incorrect'
                : ''
            }
            onClick={() => handleClick(i)}
          >
            {opt}
          </li>
        ))}
      </ul>
      {selected !== null && (
        <p className="result">
          {selected === question.correctIndex ? '✔️ Tačno!' : '❌ Pogrešno!'}
        </p>
      )}
    </div>
  );
};

export default App;

// src/components/QuestionList.jsx
import React, { useState, useEffect } from 'react';
import '../CategorySection.css';

function QuestionList({ questions }) {
  const [solved, setSolved] = useState({});

  // Load solved state from LocalStorage
  useEffect(() => {
    const store = JSON.parse(localStorage.getItem('solvedQuestions') || '{}');
    setSolved(store);
  }, []);

  // Toggle solved state
  const toggleSolved = (link) => {
    const updated = { ...solved, [link]: !solved[link] };
    setSolved(updated);
    localStorage.setItem('solvedQuestions', JSON.stringify(updated));
  };

  return (
    <div className="question-list">
      <ul>
        {questions.map((q, i) => (
          <li key={i} className="question-item">
  <div className="question-title">
    <a href={q.link} target="_blank" rel="noopener noreferrer">
      {q.title}
    </a>
  </div>
  <div className="meta">
    <span className="difficulty">{q.difficulty}</span>
    <span className="topic">{q.topic}</span>
  </div>
  <div className="toggle">
    <label className="switch">
      <input
        type="checkbox"
        checked={!!solved[q.link]}
        onChange={() => toggleSolved(q.link)}
      />
      <span className="slider"></span>
    </label>
  </div>
</li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;

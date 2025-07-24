import React from 'react';
import { questions } from '../data/quickpractice'; // Import quickpractice data from quickpractice.js

function QuickPractice() {
  return (
    <div>
      <h1>Quick Practice Questions</h1>
      {Object.keys(questions).map((category) => (
        <div key={category}>
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <ul>
            {questions[category].map((question, index) => (
              <li key={index}>
                <a href={question.link} target="_blank" rel="noopener noreferrer">
                  {question.title}
                </a>
                <span> - Difficulty: {question.difficulty}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default QuickPractice;

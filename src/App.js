// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import QuestionList from './components/QuestionList';
import Footer from './components/Footer';
import { questions } from './data/questions';
import './style.css';

const categories = [
  { name: 'All', id: 'all' },
  ...[
    'arrays',
    'strings',
    'linkedlists',
    'trees',
    'graphs',
    'dp',
    'stacks',
  ].map((id) => ({ name: id.replace(/dp/, 'Dynamic Programming').replace(/linkedlists/, 'Linked Lists').replace(/stacks/, 'Stacks & Queues'), id })),
];

function App() {
  const [active, setActive] = useState('all');

  // Flatten questions into one list with topic metadata
  const allQuestions = Object.entries(questions).flatMap(([topic, arr]) =>
    arr.map((q) => ({ ...q, topic }))
  );

  const displayed =
    active === 'all'
      ? allQuestions
      : allQuestions.filter((q) => q.topic === active);

  return (
    <div className="app">
      <Header />
      <Navbar
        categories={categories}
        active={active}
        onChange={(id) => setActive(id)}
      />
      <main className="main-content">
        <QuestionList questions={displayed} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

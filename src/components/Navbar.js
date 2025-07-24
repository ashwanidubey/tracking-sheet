// src/components/Navbar.jsx
import React from 'react';
import '../Navbar.css';

export default function Navbar({ categories, active, onChange }) {
  return (
    <nav className="navbar">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={active === cat.id ? 'nav-item active' : 'nav-item'}
          onClick={() => onChange(cat.id)}
        >
          {cat.name}
        </button>
      ))}
    </nav>
  );
}

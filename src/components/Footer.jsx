import React from 'react';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#f8f9fa',
        padding: '24px 0',
        marginTop: '60px',
        textAlign: 'center',
        borderTop: '1px solid #eaeaea',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '6px' }}>
        © 2025 Ashwani Edge
      </div>

      <p style={{ fontSize: '14px', color: '#555', marginBottom: '16px' }}>
        Empowering developers with curated coding practice and interview prep.
      </p>

      <nav
        aria-label="Footer navigation"
        style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}
      >
        <a
          href="https://www.linkedin.com/in/ashwani-dubey-5a8490196/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#0077b5', textDecoration: 'none', fontSize: '14px' }}
        >
          LinkedIn
        </a>
        <a
          href="mailto:ashwani786dubey@gmail.com"
          style={{ color: '#333', textDecoration: 'none', fontSize: '14px' }}
        >
          Email
        </a>
        <a
          href="https://www.instagram.com/suny_dubey"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#C13584', textDecoration: 'none', fontSize: '14px' }}
        >
          Instagram
        </a>
      </nav>
    </footer>
  );
}

export default Footer;

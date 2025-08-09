import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/notfount.css' // ✅ Fixed typo

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="laptop-container">
        <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
          {/* Laptop Body */}
          <rect x="40" y="20" width="220" height="140" rx="10" ry="10" fill="#222" stroke="#00d4ff" strokeWidth="2" />
          
          {/* Screen Area */}
          <rect x="50" y="30" width="200" height="100" rx="4" ry="4" fill="#0a0a0a" stroke="#00d4ff" strokeWidth="1.5" />
          
          {/* 404 Text */}
          <text x="150" y="80" textAnchor="middle" fill="#00ff7f" fontSize="32" fontWeight="bold" fontFamily="Arial">404</text>
          
          {/* Animated Code Lines */}
          <line x1="60" y1="95" x2="230" y2="95" stroke="#1e90ff" strokeWidth="2" className="code-line" />
          <line 
            x1="60" 
            y1="110" 
            x2="210" 
            y2="110" 
            stroke="#ff69b4" 
            strokeWidth="2" 
            className="code-line" 
            style={{ animationDelay: '0.3s' }}
          />
          
          {/* Keyboard Base */}
          <rect x="20" y="160" width="260" height="15" rx="3" ry="3" fill="#111" stroke="#00d4ff" strokeWidth="1.5" />
        </svg>
      </div>

      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default NotFound;

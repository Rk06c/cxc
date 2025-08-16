import React from 'react';

const LoadingMon = () => {
  return (
    <div>
      <style>
        {`
          body {
            background: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }

          svg {
            width: 350px;
            height: auto;
          }

          .console-text {
            font-family: 'Courier New', monospace;
            font-size: 10px;
            fill: #61dafb; /* React logo color for consistency */
            opacity: 0; /* Initially hidden for animation */
          }

          /* Sequential fade-in for each text line */
          .line1 { animation: fadeIn 0.5s ease-in 0.5s forwards; }
          .line2 { animation: fadeIn 0.5s ease-in 1.0s forwards; }
          .line3 { animation: fadeIn 0.5s ease-in 1.5s forwards; }
          .line4 { animation: fadeIn 0.5s ease-in 2.0s forwards; }
          .line5 { animation: fadeIn 0.5s ease-in 3.3s forwards, pulse 1.5s ease-in-out 4s infinite; }

          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
         
          @keyframes pulse {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 1; }
          }

          /* Blinking cursor */
          .cursor {
            fill: #00d4ff;
            animation: blink 1s step-end infinite;
          }

          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        {/* Monitor Frame */}
        <rect x="50" y="40" width="300" height="180" rx="12" fill="#1a1a1a" stroke="#00d4ff" strokeWidth="3" />

        {/* Screen Background */}
        <rect x="60" y="50" width="280" height="160" rx="8" fill="#000" stroke="#00d4ff" strokeWidth="1.5" />

        {/* npm Install Text Lines (centered vertically) */}
        <text x="70" y="90" className="console-text line1">&gt; npm install</text>
        <text x="70" y="110" className="console-text line2">Installing dependencies...</text>
        <text x="70" y="130" className="console-text line3">Fetching packages...</text>
        <text x="70" y="150" className="console-text line4">Installation complete!</text>
        <text x="70" y="170" className="console-text line5">loading...</text>

        {/* Blinking Cursor (positioned after the last line) */}
        <rect x="210" y="163" width="8" height="12" className="cursor" />

        {/* Monitor Stand */}
        <rect x="180" y="230" width="40" height="30" rx="4" fill="#1a1a1a" stroke="#00d4ff" strokeWidth="2" />
        <rect x="150" y="260" width="100" height="12" rx="4" fill="#1a1a1a" stroke="#00d4ff" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default LoadingMon;
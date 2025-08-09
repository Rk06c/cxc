import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
//import '../styles/Header.css'

const Hero = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const roles = [
      'Full stack developer',
      'UI/UX designer',
      'Backend engineer',
      'AI enthusiast',
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;

    const typeRoles = () => {
      const currentRole = roles[roleIndex];
      if (!typingRef.current) return;

      if (isDeleting) {
        typingRef.current.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typingRef.current.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = charIndex % 3 === 0 ? 100 : 150;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500;
      }

      setTimeout(typeRoles, typingSpeed);
    };

    const timer = setTimeout(typeRoles, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="text-content">
          <h1>Hi, I'm <span>[🗡️rk🗡️]</span></h1>
          <div className="typing-text">
            <h2 ref={typingRef}></h2>
            <span className="typing-cursor" aria-hidden="true"></span>
          </div>
          <p>
            I build exceptional digital experiences with clean code and innovative solutions.
            Specializing in modern web technologies and scalable architectures.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">
              <FontAwesomeIcon icon={faEye} /> View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              <FontAwesomeIcon icon={faPaperPlane} /> Contact Me
            </a>
          </div>
        </div>

        <div className="svg-content">
          <svg className="hero-svg" viewBox="0 0 360 280" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="30" y="30" width="300" height="180" rx="12" ry="12" fill="#1c1c1c" stroke="#00ffe0" strokeWidth="2" />
            <rect x="40" y="40" width="280" height="160" rx="8" ry="8" fill="#0d0d0d" />
            <text x="50" y="65" fontFamily="monospace" fontSize="13" fill="#00ff9d">&gt; npm install</text>
            <text x="50" y="85" fontFamily="monospace" fontSize="13" fill="#00ff9d">&gt; Starting dev server...</text>
            <text x="50" y="105" fontFamily="monospace" fontSize="13" fill="#00ff9d">✔ Compiled successfully</text>
            <text x="50" y="125" fontFamily="monospace" fontSize="13" fill="#00ff9d">✔ Listening http://localhost:3000</text>
            <text x="50" y="145" fontFamily="monospace" fontSize="13" fill="#00ff9d">✔ Watching for file changes</text>
            <rect x="270" y="147" width="10" height="14" fill="#00ffe0">
              <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
            </rect>
            <rect x="150" y="215" width="60" height="15" rx="3" fill="#00ffe0" />
            <rect x="130" y="230" width="100" height="8" rx="3" fill="#00ffe0" />
          </svg>
        </div>
      </div>

      <div className="hero-social">
        <a href="#" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
    </section>
    
  );
};

export default Hero;

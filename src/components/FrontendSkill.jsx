import React, { useEffect } from 'react';
import { 
  faLaptopCode,
  faWind,
  faLayerGroup,
  faToolbox,
  faBolt,
  faDatabase,
  faPlus,
  faLeaf
} from '@fortawesome/free-solid-svg-icons';
import { 
  faCuttlefish,
  faHtml5,
  faCss3Alt,
  faReact,
  faJava,
  faPython,
  faPhp,
  faLaravel,
  faBootstrap
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/frontendskill.css'
const FrontendSkill = () => {
  useEffect(() => {
    // Infinite scroll functionality for tech cards
    const scrollers = document.querySelectorAll('.scroller');
    
    scrollers.forEach(scroller => {
      // Clone all children
      const children = Array.from(scroller.children);
      children.forEach(child => {
        const clone = child.cloneNode(true);
        scroller.appendChild(clone);
      });
    });

    // Pause animation on hover
    document.querySelectorAll('.infinite-scroll-container').forEach(container => {
      container.addEventListener('mouseenter', () => {
        container.querySelector('.scroller').style.animationPlayState = 'paused';
      });
      
      container.addEventListener('mouseleave', () => {
        container.querySelector('.scroller').style.animationPlayState = 'running';
      });
    });

    return () => {
      // Cleanup event listeners
      document.querySelectorAll('.infinite-scroll-container').forEach(container => {
        container.removeEventListener('mouseenter', () => {});
        container.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  const techCards = [
    { icon: faCuttlefish, name: 'C Programming' },
    { icon: faHtml5, name: 'HTML' },
    { icon: faCss3Alt, name: 'CSS' },
    { icon: faWind, name: 'Tailwind CSS' },
    { icon: faReact, name: 'React' },
    { icon: faReact, name: 'Next.js' },
    { icon: faLayerGroup, name: 'TanStack' },
    { icon: faToolbox, name: 'Redux Toolkit' },
    { icon: faBolt, name: 'Recoil' },
    { icon: faDatabase, name: 'RxDB' },
    // { icon: [faPlus, faCuttlefish], name: 'C++' },
    // { icon: faJava, name: 'Java' },
    // { icon: faPython, name: 'Python' },
    { icon: faHtml5, name: 'HTML5' },
    { icon: faCss3Alt, name: 'CSS3' },
    { icon: faBootstrap, name: 'Bootstrap' },
    { icon: faReact, name: 'React JS' },
    // { icon: faPhp, name: 'PHP' },
    // { icon: faLaravel, name: 'Laravel' },
    // { icon: faPython, name: 'Django' },
    // { icon: faLeaf, name: 'Spring Boot' }
  ];

  return (
    <>
      {/* Frontend Skills Section */}
      <section className="tech-section2" id="skills">
        <div className="section-header2">
          <h2><FontAwesomeIcon icon={faLaptopCode} /> Technical Skills - Frontend</h2>
          <p>Proficient in a wide range of programming languages and frameworks to build robust applications</p>
        </div>
        
        <div className="tech-content2">
          <div className="tech-description2">
            <p>With expertise spanning from low-level programming to modern web development frameworks, I create efficient and scalable solutions tailored to project requirements.</p>
            <p>My skills cover the full stack - from system programming in C/C++ to dynamic frontend interfaces with React and backend services with Spring Boot and Django.</p>
          </div>
          
          <div className="infinite-scroll-container2">
            <div className="scroller2">
              {techCards.map((tech, index) => (
                <div className="tech-card" key={index}>
                  <div className="tech-icon">
                    {Array.isArray(tech.icon) ? (
                      tech.icon.map((icon, i) => (
                        <FontAwesomeIcon icon={icon} key={i} />
                      ))
                    ) : (
                      <FontAwesomeIcon icon={tech.icon} />
                    )}
                  </div>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Frontend -> Backend Flow Section */}
      <section className="front-back-flow-wrapper">
        <h2 className="front-back-flow-title">Frontend & Backend Flow</h2>

        <div className="front-back-flow-panel">
          <svg
            className="front-back-flow-svg"
            viewBox="0 0 800 320"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="fbfTitle fbfDesc"
          >
            <title id="fbfTitle">Frontend to Backend Data Flow</title>
            <desc id="fbfDesc">A browser/React frontend sending API requests to a backend database and servers.</desc>

            {/* ========= DEFINITIONS ========= */}
            <defs>
              {/* Arrowheads */}
              <marker id="fbf-arrow-req" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 Z" fill="var(--fbf-accent-req)"/>
              </marker>
              <marker id="fbf-arrow-res" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 Z" fill="var(--fbf-accent-res)"/>
              </marker>

              {/* Glow filters */}
              <filter id="fbf-glow-req" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="var(--fbf-accent-req)" floodOpacity="0.9"/>
              </filter>
              <filter id="fbf-glow-res" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="var(--fbf-accent-res)" floodOpacity="0.9"/>
              </filter>
            </defs>

            {/* ========= FRONTEND: Browser Window + React ========= */}
            <g className="fbf-frontend" transform="translate(40,40)">
              {/* Browser frame */}
              <rect width="240" height="160" rx="12" className="fbf-browser-frame"/>
              {/* Browser top bar */}
              <rect width="240" height="26" rx="12" className="fbf-browser-top"/>
              {/* traffic dots */}
              <circle cx="16" cy="13" r="4" className="fbf-dot red"/>
              <circle cx="32" cy="13" r="4" className="fbf-dot yellow"/>
              <circle cx="48" cy="13" r="4" className="fbf-dot green"/>

              {/* React atom */}
              <g transform="translate(120,110) scale(1.1)" className="fbf-react-atom">
                <circle r="10" className="fbf-react-core"/>
                <ellipse rx="28" ry="10" className="fbf-react-orbit orbit1"/>
                <ellipse rx="28" ry="10" className="fbf-react-orbit orbit2" transform="rotate(60)"/>
                <ellipse rx="28" ry="10" className="fbf-react-orbit orbit3" transform="rotate(120)"/>
              </g>

              {/* Label */}
              <text x="120" y="200" className="fbf-label">Frontend (React)</text>
            </g>

            {/* ========= FLOW LINES ========= */}
            {/* Request (Frontend -> Backend) */}
            <path
              d="M 300 120 C 420 120 420 60 540 60"
              className="fbf-flow-line fbf-req-line"
              markerEnd="url(#fbf-arrow-req)"
            />
            <text x="420" y="50" className="fbf-flow-label req">API Request (JSON)</text>

            {/* Response (Backend -> Frontend) */}
            <path
              d="M 540 260 C 420 260 420 200 300 200"
              className="fbf-flow-line fbf-res-line"
              markerEnd="url(#fbf-arrow-res)"
            />
            <text x="420" y="270" className="fbf-flow-label res">Response (Data)</text>

            {/* ========= BACKEND GROUP ========= */}
            <g className="fbf-backend" transform="translate(540,10) scale(1.05)">
              {/* Database (cylinder) */}
              <ellipse cx="100" cy="50" rx="40" ry="10" fill="#00e5ff" opacity="0.7"/>
              <rect x="60" y="50" width="80" height="40" fill="#00e5ff" opacity="0.7"/>
              <ellipse cx="100" cy="90" rx="40" ry="10" fill="#00e5ff"/>

              {/* Server Racks */}
              <rect x="40" y="110" width="120" height="25" rx="4" fill="#1c1c1c" stroke="#00e5ff" strokeWidth="2"/>
              <rect x="40" y="140" width="120" height="25" rx="4" fill="#1c1c1c" stroke="#00e5ff" strokeWidth="2"/>
              <rect x="40" y="170" width="120" height="25" rx="4" fill="#1c1c1c" stroke="#00e5ff" strokeWidth="2"/>

              {/* Server Lights */}
              <circle className="server-light" cx="50" cy="122" r="3"/>
              <circle className="server-light" cx="50" cy="152" r="3" style={{animationDelay:'.5s'}}/>
              <circle className="server-light" cx="50" cy="182" r="3" style={{animationDelay:'1s'}}/>

              {/* Connecting Lines */}
              <line x1="100" y1="90" x2="100" y2="110" stroke="#00e5ff" strokeWidth="2" className="flow-line"/>
              
              {/* Label */}
              <text x="100" y="215" className="fbf-label backend">Backend / DB</text>
            </g>
          </svg>
        </div>
      </section>
    </>
  );
};

export default FrontendSkill;
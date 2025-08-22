import React, { useEffect } from 'react';
import { 
  faLaptopCode,
  faWind,
  faLayerGroup,
  faToolbox,
  faBolt,
  faDatabase,
  faServer,
  faTable,
  faCodeBranch,
  faMemory,
  faSitemap,
  faPlug,
  faProjectDiagram,
  faExchangeAlt,
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
  faBootstrap,
  faNodeJs,
  faJsSquare
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/bothskill.css';

const FrontendSkill1 = () => {
  useEffect(() => {
    // Infinite scroll functionality for tech cards
    const scrollers = document.querySelectorAll('.scroller');
    
    scrollers.forEach(scroller => {
      // Check if already cloned to avoid duplication
      if (scroller.getAttribute('data-cloned') !== 'true') {
        const children = Array.from(scroller.children);
        children.forEach(child => {
          const clone = child.cloneNode(true);
          scroller.appendChild(clone);
        });
        scroller.setAttribute('data-cloned', 'true');
      }
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

  const frontendTechCards = [
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
    { icon: faHtml5, name: 'HTML5' },
    { icon: faCss3Alt, name: 'CSS3' },
    { icon: faBootstrap, name: 'Bootstrap' },
    { icon: faReact, name: 'React JS' },
  ];

  return (
    <>
      {/* Frontend Skills Section */}
      <section className="tech-section" id="skills">
        <div className="section-header">
          <h2><FontAwesomeIcon icon={faLaptopCode} /> Technical Skills - Frontend</h2>
          <p>Proficient in a wide range of programming languages and frameworks to build robust applications</p>
        </div>
        
        <div className="tech-content">
          <div className="tech-description">
            <p>With expertise spanning from low-level programming to modern web development frameworks, I create efficient and scalable solutions tailored to project requirements.</p>
            <p>My skills cover the full stack - from system programming in C/C++ to dynamic frontend interfaces with React and backend services with Spring Boot and Django.</p>
          </div>
          
          <div className="infinite-scroll-container">
            <div className="scroller">
              {frontendTechCards.map((tech, index) => (
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

const BackendSkill1 = () => {
  useEffect(() => {
    // Infinite scroll functionality for tech cards
    const scrollers = document.querySelectorAll('.scroller');
    
    scrollers.forEach(scroller => {
      // Check if already cloned to avoid duplication
      if (scroller.getAttribute('data-cloned') !== 'true') {
        const children = Array.from(scroller.children);
        children.forEach(child => {
          const clone = child.cloneNode(true);
          scroller.appendChild(clone);
        });
        scroller.setAttribute('data-cloned', 'true');
      }
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

  const backendTechCards = [
    { icon: faCuttlefish, name: 'C Programming' },
    { icon: faNodeJs, name: 'Node.js' },
    { icon: faServer, name: 'Express.js' },
    { icon: faDatabase, name: 'MongoDB' },
    { icon: faTable, name: 'SQL' },
    { icon: faCodeBranch, name: 'CI/CD' },
    { icon: faMemory, name: 'Redis' },
    { icon: faSitemap, name: 'DSA' },
    { icon: faJsSquare, name: 'JavaScript' },
    { icon: faPython, name: 'Python' },
    { icon: faPlug, name: 'API' },
    { icon: faProjectDiagram, name: 'GraphQL' },
    { icon: faExchangeAlt, name: 'WebSocket' },
    { icon: [faPlus, faCuttlefish], name: 'C++' },
    { icon: faPython, name: 'Python' },
    { icon: faHtml5, name: 'HTML5' },
    { icon: faCss3Alt, name: 'CSS3' },
    { icon: faBootstrap, name: 'Bootstrap' },
    { icon: faReact, name: 'React JS' },
    { icon: faPhp, name: 'PHP' },
    { icon: faLaravel, name: 'Laravel' },
    { icon: faPython, name: 'Django' },
    { icon: faLeaf, name: 'Spring Boot' }
  ];

  return (
    <>
      {/* Backend Skills Section */}
      <section className="tech-section backend">
        <div className="section-header">
          <h2><FontAwesomeIcon icon={faServer} /> Technical Skills - Backend</h2>
          <p>Proficient in server-side technologies and database management systems</p>
        </div>
        
        <div className="tech-content backend">
          <div className="tech-description">
            <p>With expertise in backend development, I build scalable and efficient server-side applications that power modern web experiences.</p>
            <p>My skills include API development, database design, authentication systems, and deployment pipelines to deliver robust backend solutions.</p>
          </div>
          
          <div className="infinite-scroll-container backend">
            <div className="scroller backend">
              {backendTechCards.map((tech, index) => (
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
      
      {/* MERN Backend Flow Section */}
      <section className="mern-backend-section">
        <h2 className="mern-backend-title">MERN Backend Flow</h2>

        <div className="mern-backend-diagram">
          <svg
            className="mern-backend-svg"
            viewBox="0 0 900 340"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="mernBackendTitle mernBackendDesc"
          >
            <title id="mernBackendTitle">MERN Backend Flow Diagram</title>
            <desc id="mernBackendDesc">
              Data flows from React client to Node.js/Express API routes then to MongoDB, and responses flow back.
            </desc>

            {/* ======= Defs ======= */}
            <defs>
              {/* Arrowhead */}
              <marker id="arrow-head" viewBox="0 0 10 10" refX="8" refY="5"
                      markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--mern-accent)"></path>
              </marker>

              {/* Arrowhead (response) */}
              <marker id="arrow-head-out" viewBox="0 0 10 10" refX="8" refY="5"
                      markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--mern-success)"></path>
              </marker>

              {/* Glow filter */}
              <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="var(--mern-accent)" floodOpacity="0.8"/>
              </filter>
              <filter id="neon-glow-success" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="var(--mern-success)" floodOpacity="0.8"/>
              </filter>
            </defs>

            {/* ======= Client (React) ======= */}
            <g className="mern-node client" transform="translate(40,90)">
              <rect width="160" height="100" rx="10" className="mern-box client-box"/>
              <text x="80" y="42" className="mern-label">React</text>
              <text x="80" y="70" className="mern-sub">Client</text>
            </g>

            {/* ======= Express Route Group ======= */}
            {/* Container */}
            <g className="mern-node express" transform="translate(330,40)">
              <rect width="240" height="260" rx="16" className="mern-box express-box"/>
              <text x="120" y="32" className="mern-label">Node.js + Express</text>
              <text x="120" y="54" className="mern-sub">API Layer</text>

              {/* Route blocks */}
              <g className="mern-route" transform="translate(30,80)">
                <rect width="180" height="42" rx="8" className="mern-route-box"></rect>
                <text x="90" y="26" className="mern-route-text">/api/users</text>
              </g>
              <g className="mern-route" transform="translate(30,138)">
                <rect width="180" height="42" rx="8" className="mern-route-box"></rect>
                <text x="90" y="26" className="mern-route-text">/api/products</text>
              </g>
              <g className="mern-route" transform="translate(30,196)">
                <rect width="180" height="42" rx="8" className="mern-route-box"></rect>
                <text x="90" y="26" className="mern-route-text">/api/orders</text>
              </g>
            </g>

            {/* ======= MongoDB ======= */}
            <g className="mern-node mongo" transform="translate(710,96)">
              {/* Top ellipse */}
              <ellipse cx="70" cy="0" rx="70" ry="20" className="mongo-top"/>
              {/* Body */}
              <rect x="0" y="0" width="140" height="100" className="mongo-body"/>
              {/* Bottom ellipse */}
              <ellipse cx="70" cy="100" rx="70" ry="20" className="mongo-bottom"/>
              <text x="70" y="58" className="mern-label mongo-text">MongoDB</text>
            </g>

            {/* ======= Flow Lines (Request) ======= */}
            {/* Client -> Express */}
            <path id="req-client-express"
                  d="M 200 140 C 260 140 260 170 330 170"
                  className="mern-flow-line req-line"
                  markerEnd="url(#arrow-head)"/>

            {/* Express -> Mongo */}
            <path id="req-express-mongo"
                  d="M 570 170 C 640 170 640 146 710 116"
                  className="mern-flow-line req-line"
                  markerEnd="url(#arrow-head)"/>

            {/* ======= Flow Lines (Response) ======= */}
            {/* Mongo -> Express */}
            <path id="res-mongo-express"
                  d="M 710 176 C 640 206 640 230 570 230"
                  className="mern-flow-line res-line"
                  markerEnd="url(#arrow-head-out)"/>

            {/* Express -> Client */}
            <path id="res-express-client"
                  d="M 330 230 C 260 230 260 200 200 200"
                  className="mern-flow-line res-line"
                  markerEnd="url(#arrow-head-out)"/>
          </svg>
        </div>
      </section>
    </>
  );
};

export { FrontendSkill1, BackendSkill1 };
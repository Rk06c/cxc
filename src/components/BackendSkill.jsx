import React, { useEffect } from 'react';
import { 
  faServer,
  faDatabase,
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
  faNodeJs,
  faJsSquare,
  faPython,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faReact,
  faPhp,
  faLaravel
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/backendskill.css'
const BackendSkill = () => {
  useEffect(() => {
    // Infinite scroll functionality for tech cards
    const scrollers = document.querySelectorAll('.scroller1');
    
    scrollers.forEach(scroller => {
      // Clone all children
      const children = Array.from(scroller.children);
      children.forEach(child => {
        const clone = child.cloneNode(true);
        scroller.appendChild(clone);
      });
    });

    // Pause animation on hover
    document.querySelectorAll('.infinite-scroll-container1').forEach(container => {
      container.addEventListener('mouseenter', () => {
        container.querySelector('.scroller1').style.animationPlayState = 'paused';
      });
      
      container.addEventListener('mouseleave', () => {
        container.querySelector('.scroller1').style.animationPlayState = 'running';
      });
    });

    return () => {
      // Cleanup event listeners
      document.querySelectorAll('.infinite-scroll-container1').forEach(container => {
        container.removeEventListener('mouseenter', () => {});
        container.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  const techCards = [
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
    // { icon: faJava, name: 'Java' },
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
      <section className="tech-section1">
        <div className="section-header1">
          <h2><FontAwesomeIcon icon={faServer} /> Technical Skills - Backend</h2>
          <p>Proficient in server-side technologies and database management systems</p>
        </div>
        
        <div className="tech-content1">
          <div className="tech-description1">
            <p>With expertise in backend development, I build scalable and efficient server-side applications that power modern web experiences.</p>
            <p>My skills include API development, database design, authentication systems, and deployment pipelines to deliver robust backend solutions.</p>
          </div>
          
          <div className="infinite-scroll-container1">
            <div className="scroller1">
              {techCards.map((tech, index) => (
                <div className="tech-card1" key={index}>
                  <div className="tech-icon1">
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

export default BackendSkill;
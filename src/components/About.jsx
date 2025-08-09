import React from 'react';
import { 
  faLaptopCode,
  faUserTie,
  faCogs,
  faShieldAlt,
  faBolt,
  faProjectDiagram,
  faRocket,
  faTools,
  faGraduationCap,
  faBriefcase
} from '@fortawesome/free-solid-svg-icons';
import { 
  faReact,
  faNodeJs,
  faJs,
  faGitAlt,
  faDocker,
  faJenkins
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
// At the top of About.jsx
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const About = () => {
  return (
    <>
      <style jsx>{`
        body {
          background: #000000;
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 20px;
          color: white;
          line-height: 1.6;
        }

        /* GitHub README Container */
        .readme-container {
          max-width: 900px;
          margin: 40px auto;
          background: rgba(13, 17, 23, 0.8);
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Header with GitHub-like styling */
        .readme-header {
          display: flex;
          align-items: center;
          margin-bottom: 30px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .readme-title {
          font-size: 2em;
          margin: 0;
          color: #00d4ff;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* Badge styling */
        .badge {
          display: inline-block;
          padding: 3px 8px;
          font-size: 0.8em;
          font-weight: bold;
          border-radius: 20px;
          margin-left: 10px;
          vertical-align: middle;
        }

        .badge-primary {
          background: linear-gradient(90deg, #00d4ff, #0066ff);
          color: white;
        }

        .badge-secondary {
          background: rgba(0, 212, 255, 0.2);
          color: #00d4ff;
          border: 1px solid #00d4ff;
        }

        /* Section styling */
        .readme-section {
          margin-bottom: 30px;
        }

        .section-title {
          font-size: 1.5em;
          margin: 25px 0 15px;
          color: #00d4ff;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* Tech Stack Grid */
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 15px;
          margin: 20px 0;
        }

        .tech-item {
          background: rgba(0, 0, 0, 0.4);
          border-radius: 8px;
          padding: 12px 15px;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          border-left: 3px solid #00d4ff;
        }

        .tech-item:hover {
          background: rgba(0, 212, 255, 0.1);
          transform: translateX(5px);
        }

        .tech-icon {
          font-size: 1.2em;
          color: #00d4ff;
          width: 25px;
          text-align: center;
        }

        /* Feature List */
        .feature-list {
          list-style-type: none;
          padding-left: 0;
        }

        .feature-item {
          margin-bottom: 12px;
          padding-left: 25px;
          position: relative;
        }

        .feature-item::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #00d4ff;
        }

        /* Code block styling */
        .code-block {
          background: rgba(0, 0, 0, 0.5);
          border-radius: 6px;
          padding: 15px;
          font-family: 'Courier New', monospace;
          font-size: 0.9em;
          margin: 20px 0;
          border-left: 3px solid #0066ff;
          overflow-x: auto;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .readme-container {
            padding: 15px;
            margin: 20px 10px;
          }
        
          .readme-title {
            font-size: 1.4em;
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;
          }
        
          .badge {
            font-size: 0.7em;
            padding: 2px 6px;
            margin-left: 0;
          }
        
          .section-title {
            font-size: 1.2em;
            flex-direction: row;
            align-items: center;
            gap: 8px;
          }
        
          .tech-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
        
          .tech-item {
            font-size: 0.9em;
            padding: 10px;
          }
        
          .tech-icon {
            font-size: 1em;
            width: 22px;
          }
        
          .code-block {
            font-size: 0.8em;
            padding: 10px;
            word-break: break-word;
          }
        
          .feature-item {
            font-size: 0.95em;
          }
        }
      `}</style>

      <div className="readme-container" id='about'>
        <div className="readme-header">
          <h1 className="readme-title">
            <FontAwesomeIcon icon={faLaptopCode} /> Advanced MERN Stack Developer
            <span className="badge badge-primary">PRO</span>
            <span className="badge badge-secondary">DSA Expert</span>
          </h1>
        </div>

        <div className="readme-section">
          <h2 className="section-title"><FontAwesomeIcon icon={faUserTie} /> About Me</h2>
          <p>
            Full-stack developer specializing in advanced MERN (MongoDB, Express, React, Node.js) stack development 
            with strong expertise in Data Structures and Algorithms. I build scalable, performant web applications 
            with clean architecture and optimized algorithms.
          </p>
        </div>

        <div className="readme-section">
          <h2 className="section-title"><FontAwesomeIcon icon={faCogs} /> Technical Skills</h2>
          
          <div className="tech-grid">
            <div className="tech-item">
              <div className="tech-icon"><FontAwesomeIcon icon={faReact} /></div>
              <div>React.js (Advanced)</div>
            </div>
            <div className="tech-item">
              <div className="tech-icon"><FontAwesomeIcon icon={faNodeJs} /></div>
              <div>Node.js</div>
            </div>
            <div className="tech-item">
              <div className="tech-icon"><FontAwesomeIcon icon={faDatabase} /></div>
              <div>MongoDB</div>
            </div>
            <div className="tech-item">
              <div className="tech-icon"><FontAwesomeIcon icon={faServer} /></div>
              <div>Express.js</div>
            </div>
            <div className="tech-item">
              <div className="tech-icon"><FontAwesomeIcon icon={faJs} /></div>
              <div>TypeScript</div>
            </div>
            <div className="tech-item">
              <div className="tech-icon"><FontAwesomeIcon icon={faProjectDiagram} /></div>
              <div>GraphQL</div>
            </div>
            <div className="tech-item">
              <div className="tech-icon"><FontAwesomeIcon icon={faShieldAlt} /></div>
              <div>JWT Auth</div>
            </div>
            <div className="tech-item">
              <div className="tech-icon"><FontAwesomeIcon icon={faBolt} /></div>
              <div>WebSockets</div>
            </div>
          </div>
        </div>

        <div className="readme-section">
          <h2 className="section-title"><FontAwesomeIcon icon={faLaptopCode} /> DSA Expertise</h2>
          <ul className="feature-list">
            <li className="feature-item">Advanced problem-solving with optimized algorithms</li>
            <li className="feature-item">Competitive programming experience (LeetCode, Codeforces)</li>
            <li className="feature-item">System design and architecture patterns</li>
            <li className="feature-item">Time and space complexity analysis</li>
            <li className="feature-item">Data structure implementation (Trees, Graphs, etc.)</li>
          </ul>
          
          <div className="code-block">
            // Example: Optimized Dijkstra's Algorithm<br />
            function dijkstra(graph, start) {'{'}<br />
            &nbsp;&nbsp;const distances = {'{}'};<br />
            &nbsp;&nbsp;const heap = new PriorityQueue();<br />
            &nbsp;&nbsp;// Implementation continues...<br />
            {'}'}
          </div>
        </div>

        <div className="readme-section">
          <h2 className="section-title"><FontAwesomeIcon icon={faRocket} /> Advanced Features</h2>
          <ul className="feature-list">
            <li className="feature-item">Microservices architecture with Docker</li>
            <li className="feature-item">Serverless functions (AWS Lambda)</li>
            <li className="feature-item">Real-time applications with Socket.io</li>
            <li className="feature-item">Advanced state management (Redux Toolkit)</li>
            <li className="feature-item">Performance optimization techniques</li>
          </ul>
        </div>

        <div className="readme-section">
          <h2 className="section-title"><FontAwesomeIcon icon={faTools} /> Development Tools</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <div className="tech-icon"><FontAwesomeIcon icon={faGitAlt} /></div>
              <div>Git & GitHub</div>
            </div>
            <div className="tech-item">
              <div className="tech-icon"><FontAwesomeIcon icon={faDocker} /></div>
              <div>Docker</div>
            </div>
            <div className="tech-item">
              <div className="tech-icon"><FontAwesomeIcon icon={faJenkins} /></div>
              <div>CI/CD Pipelines</div>
            </div>
            <div className="tech-item">
              <div className="tech-icon"><FontAwesomeIcon icon={faTerminal} /></div>
              <div>Linux Server</div>
            </div>
          </div>
        </div>

        <div className="readme-section">
          <h2 className="section-title"><FontAwesomeIcon icon={faGraduationCap} /> Education</h2>
          <ul className="feature-list">
            <li className="feature-item">
              <strong>BE - COMPUTER SIENCES & ENGINEERING</strong><br />
              KCET (Anna university) -- [2018 - 2022]<br />
              Graduated with Honors -- <span style={{ color: 'red' }}>GPA: 7.5/10</span> <br />
              Relevant Coursework:<span style={{ color: 'red' }}>Data Structures, Algorithms, Web Development, Database Systems</span>
            </li>
            <li className="feature-item">
              <strong>Online Certification in Advanced JavaScript</strong><br />
              CodeAcademy, 2021<br />
              Focused on ES6, Async Programming, and Functional JavaScript
            </li>
            <li className="feature-item">
              <strong>System Design Bootcamp</strong><br />
              TechInstitute, 2022<br />
              Covered Microservices, Scalability, and Distributed Systems
            </li>
          </ul>
        </div>

        <div className="readme-section">
          <h2 className="section-title"><FontAwesomeIcon icon={faBriefcase} /> Work Experience</h2>
          <ul className="feature-list">
            <li className="feature-item">
              <strong>Senior Full Stack Developer</strong><br />
              TechSolutions Inc.,<span style={{ color: 'red' }}> Remote, Jan 2023 - Present</span><br />
              - Led development of a scalable MERN stack application serving 100k+ users<br />
              - Optimized backend APIs, reducing response time by 40% using Node.js and MongoDB<br />
              - Implemented microservices architecture with Docker and Kubernetes
            </li>
            <li className="feature-item">
              <strong>Full Stack Developer</strong><br />
              InnovateTech, San Francisco, CA, Jun 2022 - Dec 2023<br />
              - Developed real-time features using WebSockets and Socket.io<br />
              - Designed and implemented GraphQL APIs for efficient data querying<br />
              - Contributed to CI/CD pipelines, improving deployment frequency by 30%
            </li>
            <li className="feature-item">
              <strong>Junior Developer (Intern)</strong><br />
              StartupX, New York, NY, Summer 2019<br />
              - Built responsive React.js components for a SaaS platform<br />
              - Assisted in database schema design with MongoDB<br />
              - Participated in code reviews and agile development processes
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
import React from 'react';
import '../styles/Reactabout.css'; // We'll create this next

const ReatAbout = () => {
  return (
    <div className="readme-container" id="about">
      {/* Header */}
      <div className="readme-header">
        <h1 className="readme-title">
          <i className="fas fa-laptop-code"></i> Advanced MERN Stack Engineer
          <span className="badge badge-primary badge-shine">React Expert</span>
          <span className="badge badge-secondary">DevOps Ready</span>
        </h1>
      </div>

      {/* About Me */}
      <div className="readme-section">
        <h2 className="section-title">
          <i className="fas fa-user-tie"></i> About Me
        </h2>
        <p>
          Full-stack MERN developer with <strong>deep expertise in React.js</strong>, building{' '}
          <strong>high-performance, scalable, and maintainable</strong> web applications. Passionate
          about modern frontend architecture, state management, and full-cycle DevOps deployment.
        </p>
      </div>

      {/* Advanced React */}
      <div className="readme-section">
        <h2 className="section-title">
          <i className="fab fa-react"></i> Advanced React Expertise
        </h2>

        <div className="tech-grid">
          {[
            { icon: 'fas fa-atom', label: 'React Hooks & Context' },
            { icon: 'fas fa-sync-alt', label: 'React Query / TanStack' },
            { icon: 'fas fa-route', label: 'React Router v6+' },
            { icon: 'fas fa-paint-brush', label: 'Tailwind CSS / Styled' },
            { icon: 'fas fa-vial', label: 'Jest & React Testing' },
            { icon: 'fas fa-cube', label: 'Next.js (App Router)' },
          ].map((tech, i) => (
            <div key={i} className="tech-item">
              <div className="tech-icon">
                <i className={tech.icon}></i>
              </div>
              <div>{tech.label}</div>
            </div>
          ))}
        </div>

        <pre className="code-block">
{`// Custom Hook: useDebounce
import { useState, useEffect } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounced;
};`}
        </pre>
      </div>

      {/* State Management */}
      <div className="readme-section">
        <h2 className="section-title">
          <i className="fas fa-layer-group"></i> State Management Mastery
        </h2>
        <div className="tech-grid">
          {[
            { icon: 'fas fa-toolbox', label: 'Redux Toolkit (RTK)' },
            { icon: 'fas fa-atom', label: 'Recoil' },
            { icon: 'fas fa-wind', label: 'Zustand' },
            { icon: 'fas fa-exchange-alt', label: 'Context + useReducer' },
          ].map((tech, i) => (
            <div key={i} className="tech-item">
              <div className="tech-icon">
                <i className={tech.icon}></i>
              </div>
              <div>{tech.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MERN Backend */}
      <div className="readme-section">
        <h2 className="section-title">
          <i className="fas fa-server"></i> MERN Stack & Backend
        </h2>
        <div className="tech-grid">
          {[
            { icon: 'fab fa-node-js', label: 'Node.js & Express' },
            { icon: 'fas fa-database', label: 'MongoDB & Mongoose' },
            { icon: 'fas fa-shield-alt', label: 'JWT & OAuth' },
            { icon: 'fas fa-bolt', label: 'Socket.io Real-time' },
          ].map((tech, i) => (
            <div key={i} className="tech-item">
              <div className="tech-icon">
                <i className={tech.icon}></i>
              </div>
              <div>{tech.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* API Architecture */}
      <div className="readme-section">
        <h2 className="section-title">
          <i className="fas fa-project-diagram"></i> API Architecture
        </h2>
        <div className="tech-grid">
          {[
            { icon: 'fas fa-exchange-alt', label: 'RESTful APIs' },
            { icon: 'fas fa-sitemap', label: 'GraphQL (Apollo Server)' },
            { icon: 'fas fa-rocket', label: 'Apollo Client' },
            // { icon: 'fas fa-code', label: 'Schema Stitching' },
          ].map((tech, i) => (
            <div key={i} className="tech-item">
              <div className="tech-icon">
                <i className={tech.icon}></i>
              </div>
              <div>{tech.label}</div>
            </div>
          ))}
        </div>

        <pre className="code-block">
{`// GraphQL Query Example
const GET_USER = gql\`
  query GetUser($id: ID!) {
    user(id: $id) {
      name
      email
      posts {
        title
        content
      }
    }
  }\`;

const { data } = useQuery(GET_USER, { variables: { id: "1" } });`}
        </pre>
      </div>

      {/* DevOps */}
      <div className="readme-section">
        <h2 className="section-title">
          <i className="fas fa-tools"></i> DevOps & Deployment
        </h2>
        <ul className="feature-list">
          {[
            'Docker & Docker Compose',
            'CI/CD with GitHub Actions',
            'AWS (EC2, S3, RDS, Lambda)',
            'Nginx Reverse Proxy',
            // 'PM2 Process Manager',
            // 'SSL/TLS with Let\'s Encrypt',
          ].map((item, i) => (
            <li key={i} className="feature-item">
              {item}
            </li>
          ))}
        </ul>

        <pre className="code-block">
{`# docker-compose.yml
services:
  frontend:
    build: ./client
    ports: ["3000:3000"]
  backend:
    build: ./server
    environment:
      - NODE_ENV=production
    depends_on: [mongo]
  mongo:
    image: mongo:latest`}
        </pre>
      </div>

      {/* DSA */}
      <div className="readme-section">
        <h2 className="section-title">
          <i className="fas fa-puzzle-piece"></i> DSA (Core Concepts)
        </h2>
        <ul className="feature-list">
          {[
            'Time/Space Complexity Analysis',
            'Arrays, Linked Lists, Trees, Graphs',
            // 'LeetCode (Top 150 Solved)',
          ].map((item, i) => (
            <li key={i} className="feature-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReatAbout;
import React, { useState } from 'react';
import '../styles/projects.css';
import { 
  faCodeBranch,
  faExternalLinkAlt,
  faLock,
  faUnlock,
  faEye,
  faEyeSlash,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

// Import your project images
import image222 from '../assets/web5.png';

const Projects = () => {
  const navigate = useNavigate(); 
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [pendingLink, setPendingLink] = useState(null);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "programing learning website",
      description: "A full-stack platform for programming learing and course details knows website.",
      image: image222,
      tags: ["React", "Node.js", "MongoDB"],
      demoLink: "https://cs2-full.vercel.app",
      codeLink: "#"
    },
    {
      id: 2,
      title: "member ship website",
      description: "A full-stack platform for generating and managing member content with user dashboards and analytics.",
      image: image222,
      tags: ["React", "Node.js", "MongoDB"],
      demoLink: "https://gym-v2-zeta.vercel.app",
      codeLink: "#"
    },
    {
      id: 3,
      title: "AI object detection",
      description: "A full-stack platform for generating and managing AI-created content with user dashboards and analytics.",
      image:image222,
      tags: ["React", "TensorFlow", 'coco-models'],
      demoLink: "https://anime-online-ecru.vercel.app/",
      codeLink: "#"
    },
  ];

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === '@@2306Password@@') {
      setError('');
      setPassword('');
      setShowPassword(false);
      
      // Open the pending link
      if (pendingLink) {
        window.open(pendingLink, '_blank', 'noopener,noreferrer');
      }
      
      // Close modal after a brief delay
      setTimeout(() => {
        setShowPasswordModal(false);
        setPendingLink(null);
        setCurrentProject(null);
      }, 500);
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  const handleLinkClick = (url, project, linkType, e) => {
    e.preventDefault();
    
    // Don't show modal if link is "#"
    if (url === "#") {
      return;
    }
    
    setPendingLink(url);
    setCurrentProject({...project, linkType});
    setShowPasswordModal(true);
    setError('');
    setPassword('');
  };

  const handleCloseModal = () => {
    setShowPasswordModal(false);
    setPendingLink(null);
    setCurrentProject(null);
    setError('');
    setPassword('');
    setShowPassword(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Close modal when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const renderProjectLink = (project, linkType) => {
    const link = linkType === 'demo' ? project.demoLink : project.codeLink;
    const icon = linkType === 'demo' ? faExternalLinkAlt : faGithub;
    const text = linkType === 'demo' ? 'Live Demo' : 'View Code';
    
    // If link is "#", show disabled state
    if (link === "#") {
      return (
        <span className="project-link disabled-link">
          <FontAwesomeIcon icon={icon} /> {text}
        </span>
      );
    }

    return (
      <a 
        href={link} 
        className={`project-link ${linkType === 'demo' ? 'demo-link' : 'code-link'}`}
        onClick={(e) => handleLinkClick(link, project, linkType, e)}
      >
        <FontAwesomeIcon icon={faLock} style={{ marginRight: '5px', fontSize: '0.8em' }} />
        {text}
      </a>
    );
  };

  return (
    <section className="projects-section" id="projects">
      <h2><FontAwesomeIcon icon={faCodeBranch} /> My Projects</h2>
      
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-image" 
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">
                {project.description}
              </p>
              <div className="project-tech">
                {project.tags.map((tag, index) => (
                  <span className="tech-tag" key={index}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {renderProjectLink(project, 'demo')}
                {renderProjectLink(project, 'code')}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Common Button */}
      <div className="projects-btn-container1">
        <button 
          className="see-all-projects-btn1" 
          onClick={() => navigate("/all-project")}
        >
          See All Projects
        </button>
      </div>

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="password-modal-overlay" onClick={handleBackdropClick}>
          <div className="password-modal">
            <button 
              className="modal-close-btn" 
              onClick={handleCloseModal}
              aria-label="Close password modal"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            
            <div className="modal-header">
              <FontAwesomeIcon icon={faLock} className="lock-icon" />
              <h3>Protected Content</h3>
            </div>
            
            <p className="modal-description">
              Enter password to access project links
            </p>
            
            {currentProject && (
              <div className="project-info">
                <div className="project-info-title">
                  <FontAwesomeIcon icon={faCodeBranch} style={{ marginRight: '8px' }} />
                  {currentProject.title}
                </div>
                <div className="project-info-type">
                  {currentProject.linkType === 'demo' ? 'Live Demo' : 'GitHub Repository'}
                </div>
              </div>
            )}

            <form onSubmit={handlePasswordSubmit} className="password-form">
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="password-input"
                  autoFocus
                />
                <span 
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
              </div>
              <button 
                type="submit" 
                className="password-submit-btn"
                disabled={!password}
              >
                <FontAwesomeIcon icon={faUnlock} style={{ marginRight: '8px' }} />
                Unlock & Open Link
              </button>
            </form>
            
            {error && <div className="error-message">{error}</div>}
            
            <p className="password-hint">
              Password required for each project access
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
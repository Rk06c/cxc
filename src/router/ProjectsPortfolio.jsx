import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faProjectDiagram,
  faShoppingCart,
  faVideo,
  faComments,
  faTasks,
  faRobot,
  faWallet,
  faUtensils,
  faMicroscope,
  faExternalLinkAlt,
  faLock,
  faUnlock,
  faEye,
  faEyeSlash,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styled, { css, keyframes } from 'styled-components';
import { debounce } from 'lodash';

// Styled Components
const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const Body = styled.div`
  background: #000000;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  color: white;
  line-height: 1.6;
`;

const ProjectsContainer = styled.div`
  max-width: 900px;
  margin: 40px auto;
  background: rgba(13, 17, 23, 0.8);
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
    margin: 20px 10px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    margin: 10px 5px;
  }
`;

const ProjectsHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const ProjectsTitle = styled.h1`
  font-size: 2em;
  margin: 0;
  color: #60a5fa;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 1.5em;
    gap: 6px;
  }

  @media (max-width: 400px) {
    font-size: 1.2em;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 8px;
  font-size: 0.8em;
  font-weight: bold;
  border-radius: 20px;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 0.7em;
    padding: 2px 6px;
  }

  @media (max-width: 400px) {
    font-size: 0.65em;
    padding: 2px 5px;
  }

  ${({ type }) =>
    type === 'projects'
      ? css`
          background: linear-gradient(90deg, #60a5fa, #3b82f6);
          color: white;
        `
      : css`
          background: rgba(96, 165, 250, 0.2);
          color: #60a5fa;
          border: 1px solid #60a5fa;
        `}
`;

const ProjectsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;

  @media (max-width: 768px) {
    display: block;
    overflow-x: auto;
  }
`;

const TableHeader = styled.th`
  background: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
  font-weight: bold;
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    font-size: 0.85em;
  }
`;

const TableRow = styled.tr`
  &:hover {
    background: rgba(96, 165, 250, 0.05);
  }
`;

const TableCell = styled.td`
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    font-size: 0.85em;
  }
`;

const ProjectName = styled.div`
  font-weight: bold;
  color: #60a5fa;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

const ProjectLink = styled.a`
  color: #93c5fd;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: color 0.2s, background 0.2s;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    color: #60a5fa;
    text-decoration: underline;
    background: rgba(96, 165, 250, 0.1);
  }

  @media (max-width: 768px) {
    padding: 3px 6px;
  }
`;

const LockedLink = styled.span`
  color: #ef4444;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: rgba(239, 68, 68, 0.1);
  }
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 5px;

  @media (max-width: 768px) {
    gap: 4px;
  }
`;

const TechTag = styled.span`
  background: rgba(96, 165, 250, 0.15);
  color: #a3d1ff;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.75em;

  @media (max-width: 768px) {
    font-size: 0.7em;
    padding: 1px 6px;
  }

  @media (max-width: 480px) {
    font-size: 0.65em;
    padding: 1px 5px;
  }
`;

const Status = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 6px;

  ${({ status }) =>
    status === 'active'
      ? css`
          background: #27f7b5ff;
        `
      : status === 'archived'
      ? css`
          background: #6b7280;
        `
      : css`
          background: #f59e0b;
          animation: ${pulse} 2s infinite;
        `}
`;

const Separator = styled.span`
  color: #4b5563;
`;

const MobileCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  min-height: 200px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 10px;
    min-height: 180px;
  }
`;

const MobileCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const PasswordModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PasswordForm = styled.div`
  background: rgba(13, 17, 23, 0.95);
  padding: 30px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 90%;
  max-width: 400px;
  text-align: center;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  color: #93c5fd;
  font-size: 1.2em;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    color: #ef4444;
    background: rgba(239, 68, 68, 0.1);
  }
`;

const PasswordInputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 15px 0;
`;

const PasswordInput = styled.input`
  width: 100%;
  padding: 12px 45px 12px 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  color: white;
  font-size: 1em;

  &:focus {
    outline: none;
    border-color: #60a5fa;
  }
`;

const EyeIcon = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #93c5fd;
  cursor: pointer;
  padding: 5px;

  &:hover {
    color: #60a5fa;
  }
`;

const PasswordButton = styled.button`
  background: #60a5fa;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.2s;
  width: 100%;
  margin-top: 10px;

  &:hover {
    background: #3b82f6;
  }

  &:disabled {
    background: #6b7280;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  margin-top: 10px;
  font-size: 0.9em;
`;

const ProjectInfo = styled.div`
  margin-top: 15px;
  padding: 10px;
  background: rgba(96, 165, 250, 0.1);
  border-radius: 5px;
  border-left: 3px solid #60a5fa;
`;

// Project Data
const projects = [
  {
    id: 1,
    title: 'Learning App Platform',
    icon: faShoppingCart,
    description: 'Full-featured learning platform',
    technologies: ['React', 'Node.js', 'MongoDB', 'query'],
    githubUrl: 'https://github.com/username/ecommerce-platform',
    liveUrl: 'https://cs2-full.vercel.app',
    status: 'active',
  },
  {
    id: 2,
    title: 'Video Streaming Service',
    icon: faVideo,
    description: 'Netflix-like platform with adaptive streaming, user profiles, and content recommendations',
    technologies: ['Next.js', 'TypeScript', 'FFmpeg', 'WebRTC'],
    githubUrl: 'https://github.com/username/video-streaming',
    liveUrl: 'https://stream-demo.example.com',
    status: 'wip',
  },
  {
    id: 3,
    title: 'Gym Management App',
    icon: faComments,
    description: 'Web-based messaging application with rooms, direct messages, and message history',
    technologies: ['Tan stack', 'React', 'json-server', 'Chakra UI'],
    githubUrl: 'https://github.com/username/chat-app',
    liveUrl: 'https://gym-v2-zeta.vercel.app',
    status: 'active',
  },
  {
    id: 4,
    title: 'Project Management Tool',
    icon: faTasks,
    description: 'Kanban-style task management with Gantt charts, team collaboration, and analytics',
    technologies: ['react', 'Firebase', 'D3.js'],
    githubUrl: 'https://github.com/username/project-management',
    liveUrl: 'https://pm-demo.example.com',
    status: 'archived',
  },
  {
    id: 5,
    title: 'Memory Game',
    icon: faRobot,
    description: 'Memory card game with dynamic content generation',
    technologies: ['react', 'localsession',],
    githubUrl: 'https://github.com/username/memory-game',
    liveUrl: 'https://memory-card-game-xi-three.vercel.app',
    status: 'active',
  },
  {
    id: 6,
    title: 'RGB Color Generator',
    icon: faWallet,
    description: 'Random color generator with RGB sliders, color history, and export options',
    technologies: ['react', 'Chart.js'],
    githubUrl: 'https://github.com/Rk06c/rgb-generator',
    liveUrl: 'https://rgb-generator-two.vercel.app',
    status: 'active',
  },
  {
    id: 7,
    title: 'Tic Tac Toe',
    icon: faUtensils,
    description: 'Interactive Tic Tac Toe game with single and multiplayer modes',
    technologies: ['React ', 'mangoose', 'local-storage'
    ],
    githubUrl: 'https://github.com/username/tic-tac-toe',
    liveUrl: 'https://tic-tac-toe-silk-seven.vercel.app',
    status: 'active',
  },
  {
    id: 8,
    title: 'Health Data Analyzer',
    icon: faMicroscope,
    description: 'Web platform for analyzing and visualizing health metrics from wearable devices',
    technologies: [ 'mysql', 'express', 'React'],
    githubUrl: 'https://github.com/username/health-analyzer',
    liveUrl: 'https://health-demo.example.com',
    status: 'archived',
  },
];

const ProjectsPortfolio = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [pendingLink, setPendingLink] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  // Debounced resize handler
  useEffect(() => {
    const handleResize = debounce(() => {
      setIsMobile(window.innerWidth <= 768);
    }, 200);

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
      handleResize.cancel(); // Cleanup debounce
    };
  }, []);

  const getStatusText = (status) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'archived':
        return 'Archived';
      case 'wip':
        return 'In Development';
      default:
        return status;
    }
  };

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

  const handleLinkClick = (url, project, e) => {
    e.preventDefault();
    
    setPendingLink(url);
    setCurrentProject(project);
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

  const renderLinks = (project) => {
    return (
      <>
        <LockedLink
          onClick={(e) => handleLinkClick(project.githubUrl, project, e)}
          aria-label={`Enter password to view ${project.title} on GitHub`}
        >
          <FontAwesomeIcon icon={faLock} aria-hidden="true" /> GitHub
        </LockedLink>
        <Separator aria-hidden="true"> | </Separator>
        <LockedLink
          onClick={(e) => handleLinkClick(project.liveUrl, project, e)}
          aria-label={`Enter password to view live demo of ${project.title}`}
        >
          <FontAwesomeIcon icon={faLock} aria-hidden="true" />
          {project.liveUrl.includes('apps.apple.com') ? 'App Store' : 'Live Demo'}
        </LockedLink>
      </>
    );
  };

  const renderMobileLinks = (project) => {
    return (
      <>
        <LockedLink
          onClick={(e) => handleLinkClick(project.githubUrl, project, e)}
          aria-label={`Enter password to view ${project.title} on GitHub`}
        >
          <FontAwesomeIcon icon={faLock} aria-hidden="true" /> GitHub
        </LockedLink>
        <LockedLink
          onClick={(e) => handleLinkClick(project.liveUrl, project, e)}
          aria-label={`Enter password to view live demo of ${project.title}`}
        >
          <FontAwesomeIcon icon={faLock} aria-hidden="true" />
          {project.liveUrl.includes('apps.apple.com') ? 'App Store' : 'Live Demo'}
        </LockedLink>
      </>
    );
  };

  return (
    <Body>
      <ProjectsContainer>
        <ProjectsHeader>
          <ProjectsTitle>
            <FontAwesomeIcon icon={faProjectDiagram} aria-hidden="true" />
            <span>Projects Portfolio</span>
            <Badge type="projects">PROTECTED</Badge>
            <Badge type="count">{projects.length} PROJECTS</Badge>
          </ProjectsTitle>
        </ProjectsHeader>

        {isMobile ? (
          <MobileCardContainer>
            {projects.map((project) => (
              <MobileCard key={project.id}>
                <ProjectName>
                  <FontAwesomeIcon icon={project.icon} aria-hidden="true" />
                  {project.title}
                </ProjectName>
                <ProjectTech>
                  {project.technologies.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </ProjectTech>
                <div style={{ margin: '8px 0', fontSize: '0.85em' }}>{project.description}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {renderMobileLinks(project)}
                </div>
                <div style={{ marginTop: '8px' }}>
                  <Status status={project.status} aria-hidden="true" />
                  <span aria-label={`Status: ${getStatusText(project.status)}`}>
                    {getStatusText(project.status)}
                  </span>
                </div>
              </MobileCard>
            ))}
          </MobileCardContainer>
        ) : (
          <ProjectsTable role="grid" aria-label="Projects Portfolio Table">
            <thead>
              <tr>
                <TableHeader scope="col">Project</TableHeader>
                <TableHeader scope="col">Description</TableHeader>
                <TableHeader scope="col">Links</TableHeader>
                <TableHeader scope="col">Status</TableHeader>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell>
                    <ProjectName>
                      <FontAwesomeIcon icon={project.icon} aria-hidden="true" />
                      {project.title}
                    </ProjectName>
                    <ProjectTech>
                      {project.technologies.map((tech) => (
                        <TechTag key={tech}>{tech}</TechTag>
                      ))}
                    </ProjectTech>
                  </TableCell>
                  <TableCell>{project.description}</TableCell>
                  <TableCell>
                    {renderLinks(project)}
                  </TableCell>
                  <TableCell>
                    <Status status={project.status} aria-hidden="true" />
                    <span aria-label={`Status: ${getStatusText(project.status)}`}>
                      {getStatusText(project.status)}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </ProjectsTable>
        )}
      </ProjectsContainer>

      {showPasswordModal && (
        <PasswordModal onClick={handleBackdropClick}>
          <PasswordForm>
            <CloseButton 
              onClick={handleCloseModal}
              aria-label="Close password modal"
            >
              <FontAwesomeIcon icon={faTimes} />
            </CloseButton>
            
            <h3 style={{ color: '#60a5fa', marginBottom: '10px' }}>
              <FontAwesomeIcon icon={faLock} aria-hidden="true" /> Protected Content
            </h3>
            <p style={{ marginBottom: '20px', color: '#93c5fd' }}>
              Enter password to access project links
            </p>
            
            {currentProject && (
              <ProjectInfo>
                <div style={{ fontWeight: 'bold', color: '#60a5fa' }}>
                  <FontAwesomeIcon icon={currentProject.icon} style={{ marginRight: '8px' }} />
                  {currentProject.title}
                </div>
                <div style={{ fontSize: '0.9em', marginTop: '5px' }}>
                  {pendingLink?.includes('github.com') ? 'GitHub Repository' : 'Live Demo'}
                </div>
              </ProjectInfo>
            )}

            <form onSubmit={handlePasswordSubmit}>
              <PasswordInputWrapper>
                <PasswordInput
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoFocus
                />
                <EyeIcon 
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </EyeIcon>
              </PasswordInputWrapper>
              <PasswordButton type="submit" disabled={!password}>
                <FontAwesomeIcon icon={faUnlock} style={{ marginRight: '8px' }} />
                Unlock & Open Link
              </PasswordButton>
            </form>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <p style={{ marginTop: '15px', fontSize: '0.8em', color: '#6b7280' }}>
              Password required for each project access
            </p>
          </PasswordForm>
        </PasswordModal>
      )}
    </Body>
  );
};

export default ProjectsPortfolio;
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

  &:hover {
    color: #60a5fa;
    text-decoration: underline;
    background: rgba(96, 165, 250, 0.1);
  }

  @media (max-width: 768px) {
    padding: 3px 6px;
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

// Project Data
const projects = [
  {
    id: 1,
    title: 'learning app Platform',
    icon: faShoppingCart,
    description:
      'Full-featured learing plotform',
    technologies: ['React', 'Node.js', 'MongoDB', 'query'],
    githubUrl: 'https://github.com/username/ecommerce-platform',
    liveUrl: 'https://cs2-full.vercel.app',
    status: 'active',
  },
  {
    id: 2,
    title: 'Video Streaming Service',
    icon: faVideo,
    description:
      'Netflix-like platform with adaptive streaming, user profiles, and content recommendations',
    technologies: ['Next.js', 'TypeScript', 'FFmpeg', 'WebRTC'],
    githubUrl: 'https://github.com/username/video-streaming',
    liveUrl: 'https://stream-demo.example.com',
    status: 'wip',
  },
  {
    id: 3,
    title: 'Real-Time Chat App',
    icon: faComments,
    description:
      'Web-based messaging application with rooms, direct messages, and message history',
    technologies: ['Socket.io', 'React', 'Express', 'JWT'],
    githubUrl: 'https://github.com/username/chat-app',
    liveUrl: 'https://chat-demo.example.com',
    status: 'active',
  },
  {
    id: 4,
    title: 'Project Management Tool',
    icon: faTasks,
    description:
      'Kanban-style task management with Gantt charts, team collaboration, and analytics',
    technologies: ['Vue.js', 'Firebase', 'D3.js'],
    githubUrl: 'https://github.com/username/project-management',
    liveUrl: 'https://pm-demo.example.com',
    status: 'archived',
  },
  {
    id: 5,
    title: 'Memory Game',
    icon: faRobot,
    description: 'Memory card game with dynamic content generation',
    technologies: ['Python', 'GPT-3', 'FastAPI', 'React'],
    githubUrl: 'https://github.com/username/memory-game',
    liveUrl: 'https://memory-card-game-xi-three.vercel.app',
    status: 'active',
  },
  {
    id: 6,
    title: 'RGB Color Generator',
    icon: faWallet, // Consider a more relevant icon, e.g., faPalette
    description: 'Random color generator with RGB sliders, color history, and export options',
    technologies: ['TypeScript', 'CoinGecko API', 'Chart.js'],
    githubUrl: 'https://github.com/Rk06c/rgb-generator',
    liveUrl: 'https://rgb-generator-two.vercel.app',
    status: 'active',
  },
  {
    id: 7,
    title: 'Tic Tac Toe',
    icon: faUtensils, // Consider a more relevant icon, e.g., faGamepad
    description: 'Interactive Tic Tac Toe game with single and multiplayer modes',
    technologies: ['React Native', 'Google Maps API', 'Yelp API'],
    githubUrl: 'https://github.com/username/tic-tac-toe',
    liveUrl: 'https://tic-tac-toe-silk-seven.vercel.app',
    status: 'active',
  },
  {
    id: 8,
    title: 'Health Data Analyzer',
    icon: faMicroscope,
    description: 'Web platform for analyzing and visualizing health metrics from wearable devices',
    technologies: ['Python', 'Pandas', 'Django', 'React'],
    githubUrl: 'https://github.com/username/health-analyzer',
    liveUrl: 'https://health-demo.example.com',
    status: 'archived',
  },
];

const ProjectsPortfolio = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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

  return (
    <Body>
      <ProjectsContainer>
        <ProjectsHeader>
          <ProjectsTitle>
            <FontAwesomeIcon icon={faProjectDiagram} aria-hidden="true" />
            <span>Projects Portfolio</span>
            <Badge type="projects">SHOWCASE</Badge>
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
                  <ProjectLink
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FontAwesomeIcon icon={faGithub} aria-hidden="true" /> GitHub
                  </ProjectLink>
                  <ProjectLink
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} aria-hidden="true" />
                    {project.liveUrl.includes('apps.apple.com') ? 'App Store' : 'Live Demo'}
                  </ProjectLink>
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
                    <ProjectLink
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FontAwesomeIcon icon={faGithub} aria-hidden="true" /> GitHub
                    </ProjectLink>
                    <Separator aria-hidden="true"> | </Separator>
                    <ProjectLink
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} aria-hidden="true" />
                      {project.liveUrl.includes('apps.apple.com') ? 'App Store' : 'Live Demo'}
                    </ProjectLink>
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
    </Body>
  );
};

export default ProjectsPortfolio;
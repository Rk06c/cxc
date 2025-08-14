import React from 'react';
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
  faDatabase,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';

const ProjectsPortfolio = () => {
  const styles = {
    body: {
      background: '#000000',
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: '20px',
      color: 'white',
      lineHeight: 1.6,
    },
    projectsContainer: {
      maxWidth: '900px',
      margin: '40px auto',
      background: 'rgba(13, 17, 23, 0.8)',
      borderRadius: '10px',
      padding: '30px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    projectsHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '30px',
      paddingBottom: '15px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
    projectsTitle: {
      fontSize: '2em',
      margin: 0,
      color: '#60a5fa',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    badge: {
      display: 'inline-block',
      padding: '3px 8px',
      fontSize: '0.8em',
      fontWeight: 'bold',
      borderRadius: '20px',
      marginLeft: '10px',
      verticalAlign: 'middle',
    },
    badgeProjects: {
      background: 'linear-gradient(90deg, #60a5fa, #3b82f6)',
      color: 'white',
    },
    badgeCount: {
      background: 'rgba(96, 165, 250, 0.2)',
      color: '#60a5fa',
      border: '1px solid #60a5fa',
    },
    projectsTable: {
      width: '100%',
      borderCollapse: 'collapse',
      margin: '20px 0',
    },
    tableCell: {
      padding: '12px 15px',
      textAlign: 'left',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
    tableHeader: {
      background: 'rgba(59, 130, 246, 0.1)',
      color: '#60a5fa',
      fontWeight: 'bold',
    },
    tableRow: {
      ':hover': {
        background: 'rgba(96, 165, 250, 0.05)',
      },
    },
    projectName: {
      fontWeight: 'bold',
      color: '#60a5fa',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    projectLink: {
      color: '#93c5fd',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      transition: 'color 0.2s',
      ':hover': {
        color: '#60a5fa',
        textDecoration: 'underline',
      },
    },
    projectTech: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px',
      marginTop: '5px',
    },
    techTag: {
      background: 'rgba(96, 165, 250, 0.1)',
      color: '#93c5fd',
      padding: '2px 8px',
      borderRadius: '4px',
      fontSize: '0.75em',
    },
    status: {
      display: 'inline-block',
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      marginRight: '6px',
    },
    statusActive: {
      background: '#10b981',
    },
    statusArchived: {
      background: '#6b7280',
    },
    statusWip: {
      background: '#f59e0b',
      animation: 'pulse 2s infinite',
    },
    dataStructureSection: {
      marginTop: '30px',
      background: 'rgba(0, 0, 0, 0.3)',
      padding: '15px',
      borderRadius: '8px',
      borderLeft: '3px solid #3b82f6',
    },
    codeBlock: {
      margin: '10px 0 0',
      background: 'rgba(0, 0, 0, 0.5)',
      padding: '10px',
      borderRadius: '4px',
      fontFamily: 'monospace',
      fontSize: '0.9em',
    },
    comment: {
      color: '#6b7280',
    },
    separator: {
      color: '#4b5563',
    },
  };
   const mobileStyles = {
    projectsContainer: {
      padding: '15px',
      margin: '20px 10px',
    },
    projectsTitle: {
      fontSize: '1em',
    },
    badge: {
      fontSize: '0.7em',
    },
    tableCell: {
      padding: '8px',
      fontSize: '0.9em',
    },
    techTag: {
      fontSize: '0.7em',
      padding: '1px 6px',
    },
    projectsTable: {
      display: 'block',
      overflowX: 'auto',
    },
    projectTech: {
      gap: '4px',
    },
  };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      icon: faShoppingCart,
      description: "Full-featured e-commerce solution with payment processing, inventory management, and admin dashboard",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/username/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.example.com",
      status: "active"
    },
    {
      id: 2,
      title: "Video Streaming Service",
      icon: faVideo,
      description: "Netflix-like platform with adaptive streaming, user profiles, and content recommendations",
      technologies: ["Next.js", "TypeScript", "FFmpeg", "WebRTC"],
      githubUrl: "https://github.com/username/video-streaming",
      liveUrl: "https://stream-demo.example.com",
      status: "wip"
    },
    {
      id: 3,
      title: "Real-Time Chat App",
      icon: faComments,
      description: "Web-based messaging application with rooms, direct messages, and message history",
      technologies: ["Socket.io", "React", "Express", "JWT"],
      githubUrl: "https://github.com/username/chat-app",
      liveUrl: "https://chat-demo.example.com",
      status: "active"
    },
    {
      id: 4,
      title: "Project Management Tool",
      icon: faTasks,
      description: "Kanban-style task management with Gantt charts, team collaboration, and analytics",
      technologies: ["Vue.js", "Firebase", "D3.js"],
      githubUrl: "https://github.com/username/project-management",
      liveUrl: "https://pm-demo.example.com",
      status: "archived"
    },
    {
      id: 5,
      title: "MEMORY GAME",
      icon: faRobot,
      description: " memory card game  dynamic content generation",
      technologies: ["Python", "GPT-3", "FastAPI", "React"],
      githubUrl: "https://github.com/username/",
      liveUrl: "https://memory-card-game-xi-three.vercel.app",
      status: "active"
    },
    {
      id: 6,
      title: "RGB COLOR GENERATOR",
      icon:  faWallet,
      description: " Random color generator with RGB sliders, color history, and export options",
      technologies: ["TypeScript", "CoinGecko API", "Chart.js"],
      githubUrl: "https://github.com/Rk06c/rgb-generator",
      liveUrl: "https://rgb-generator-two.vercel.app",
      status: "active"
    },
    {
      id: 7,
      title: "tic tac toe",
      icon: faUtensils,
      description: "Mobile app for discovering restaurants with filters, reviews, and reservation system",
      technologies: ["React Native", "Google Maps API", "Yelp API"],
      githubUrl: "https://github.com/usernam/",
      liveUrl: "https://tic-tac-toe-silk-seven.vercel.app",
      status: "active"
    },
    {
      id: 8,
      title: "Health Data Analyzer",
      icon: faMicroscope,
      description: "Web platform for analyzing and visualizing health metrics from wearable devices",
      technologies: ["Python", "Pandas", "Django", "React"],
      githubUrl: "https://github.com/username/health-analyzer",
      liveUrl: "https://health-demo.example.com",
      status: "archived"
    }
  ];

    // Combine styles based on screen size
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getStyles = () => {
    const styles = { ...baseStyles };
    if (isMobile) {
      Object.keys(mobileStyles).forEach(key => {
        styles[key] = { ...styles[key], ...mobileStyles[key] };
      });
    }
    return styles;
  };

  

  const getStatusStyle = (status) => {
    switch(status) {
      case 'active':
        return {...styles.status, ...styles.statusActive};
      case 'archived':
        return {...styles.status, ...styles.statusArchived};
      case 'wip':
        return {...styles.status, ...styles.statusWip};
      default:
        return styles.status;
    }
  };

  const getStatusText = (status) => {
    switch(status) {
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
    <div style={styles.body}>
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }
        `}
      </style>
      
      <div style={styles.projectsContainer}>
        <div style={styles.projectsHeader}>
          <h1 style={styles.projectsTitle}>
            <FontAwesomeIcon icon={faProjectDiagram} /> Projects Portfolio
            <span style={{...styles.badge, ...styles.badgeProjects}}>SHOWCASE</span>
            <span style={{...styles.badge, ...styles.badgeCount}}>{projects.length} PROJECTS</span>
          </h1>
        </div>

        <div>
          {isMobile ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {projects.map(project => (
                <div key={project.id} style={{ 
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '8px',
                  padding: '15px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={styles.projectName}>
                    <FontAwesomeIcon icon={project.icon} /> {project.title}
                  </div>
                  <div style={styles.projectTech}>
                    {project.technologies.map(tech => (
                      <span key={tech} style={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                  <div style={{ margin: '10px 0', fontSize: '0.9em' }}>{project.description}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <a href={project.githubUrl} style={styles.projectLink} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>
                    <a href={project.liveUrl} style={styles.projectLink} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faExternalLinkAlt} /> {project.liveUrl.includes('apps.apple.com') ? 'App Store' : 'Live Demo'}
                    </a>
                  </div>
                  <div style={{ marginTop: '10px' }}>
                    <span style={getStatusStyle(project.status)}></span> {getStatusText(project.status)}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <table style={styles.projectsTable}>
              <thead>
                <tr>
                  <th style={{...styles.tableCell, ...styles.tableHeader}}>Project</th>
                  <th style={{...styles.tableCell, ...styles.tableHeader}}>Description</th>
                  <th style={{...styles.tableCell, ...styles.tableHeader}}>Links</th>
                  <th style={{...styles.tableCell, ...styles.tableHeader}}>Status</th>
                </tr>
              </thead>
              <tbody>
                {projects.map(project => (
                  <tr key={project.id} style={styles.tableRow}>
                    <td style={styles.tableCell}>
                      <div style={styles.projectName}>
                        <FontAwesomeIcon icon={project.icon} /> {project.title}
                      </div>
                      <div style={styles.projectTech}>
                        {project.technologies.map(tech => (
                          <span key={tech} style={styles.techTag}>{tech}</span>
                        ))}
                      </div>
                    </td>
                    <td style={styles.tableCell}>{project.description}</td>
                    <td style={styles.tableCell}>
                      <a href={project.githubUrl} style={styles.projectLink} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                      </a>
                      <span style={styles.separator}> | </span>
                      <a href={project.liveUrl} style={styles.projectLink} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faExternalLinkAlt} /> {project.liveUrl.includes('apps.apple.com') ? 'App Store' : 'Live Demo'}
                      </a>
                    </td>
                    <td style={styles.tableCell}>
                      <span style={getStatusStyle(project.status)}></span> {getStatusText(project.status)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div style={styles.dataStructureSection}>
          <h3 style={{color: '#60a5fa', marginTop: 0, display: 'flex', alignItems: 'center', gap: '8px'}}>
            <FontAwesomeIcon icon={faDatabase} /> Projects Data Structure
          </h3>
          <div style={styles.codeBlock}>
            <span style={styles.comment}>// Example projects array (JavaScript)</span><br />
            const projects = [<br />
            &nbsp;&nbsp;{'{'}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;id: 1,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;title: "E-Commerce Platform",<br />
            &nbsp;&nbsp;&nbsp;&nbsp;description: "Full-featured e-commerce solution...",<br />
            &nbsp;&nbsp;&nbsp;&nbsp;technologies: ["React", "Node.js", "MongoDB", "Stripe"],<br />
            &nbsp;&nbsp;&nbsp;&nbsp;githubUrl: "https://github.com/username/ecommerce-platform",<br />
            &nbsp;&nbsp;&nbsp;&nbsp;liveUrl: "https://ecommerce-demo.example.com",<br />
            &nbsp;&nbsp;&nbsp;&nbsp;status: "active",<br />
            &nbsp;&nbsp;&nbsp;&nbsp;icon: "shopping-cart"<br />
            &nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;<span style={styles.comment}>// ... other projects</span><br />
            ];
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPortfolio;
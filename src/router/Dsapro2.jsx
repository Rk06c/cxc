import React from 'react';
// Note: In a real React project, you'd move the CSS to a separate file, but here it's included in the JSX file via a style tag for demonstration.

const projectsData = [
  {
    id: 1,
    title: 'Algorithm Visualizer',
    description: 'Interactive visualization tool for pathfinding and sorting algorithms with step-by-step execution',
    technologies: ['JavaScript', 'D3.js', 'HTML5 Canvas', 'Algorithms'],
    githubUrl: 'https://github.com/username/algo-visualizer',
    liveUrl: 'https://algo-vis.example.com',
    status: 'Active',
    statusClass: 'status-active',
    icon: 'fa-sitemap',
  },
  {
    id: 2,
    title: 'Competitive Programming Solutions',
    description: 'Collection of optimized solutions to competitive programming problems with detailed explanations',
    technologies: ['C++', 'Python', 'LeetCode', 'Codeforces'],
    githubUrl: 'https://github.com/username/cp-solutions',
    liveUrl: 'https://cp-solutions.example.com',
    status: 'In Development',
    statusClass: 'status-wip',
    icon: 'fa-chess-board',
  },
  {
    id: 3,
    title: 'Graph Theory Library',
    description: 'Comprehensive graph algorithms implementation with visualization capabilities',
    technologies: ['Python', 'Graph Theory', 'NumPy', 'Matplotlib'],
    githubUrl: 'https://github.com/username/graph-library',
    liveUrl: 'https://graph-lib.example.com',
    status: 'Active',
    statusClass: 'status-active',
    icon: 'fa-network-wired',
  },
  {
    id: 4,
    title: 'Machine Learning from Scratch',
    description: 'Implementation of core ML algorithms without libraries for educational purposes',
    technologies: ['Python', 'NumPy', 'Algorithms', 'Math'],
    githubUrl: 'https://github.com/username/ml-from-scratch',
    liveUrl: 'https://ml-scratch.example.com',
    status: 'Archived',
    statusClass: 'status-archived',
    icon: 'fa-brain',
  },
  {
    id: 5,
    title: 'Data Structures Library',
    description: 'Comprehensive collection of data structure implementations with performance analysis',
    technologies: ['Java', 'C++', 'Python', 'Algorithms'],
    githubUrl: 'https://github.com/username/ds-library',
    liveUrl: 'https://ds-lib.example.com',
    status: 'Active',
    statusClass: 'status-active',
    icon: 'fa-database',
  },
  {
    id: 6,
    title: 'Algorithmic Trading Bot',
    description: 'Automated trading system implementing various algorithmic strategies with backtesting',
    technologies: ['Python', 'Algorithmic Trading', 'APIs', 'Data Analysis'],
    githubUrl: 'https://github.com/username/trading-bot',
    liveUrl: 'https://trading-bot.example.com',
    status: 'In Development',
    statusClass: 'status-wip',
    icon: 'fa-robot',
  },
  {
    id: 7,
    title: 'Problem Solving Patterns',
    description: 'Collection of common algorithmic patterns with implementations and practice problems',
    technologies: ['JavaScript', 'Algorithms', 'Design Patterns', 'Examples'],
    githubUrl: 'https://github.com/username/ps-patterns',
    liveUrl: 'https://ps-patterns.example.com',
    status: 'Active',
    statusClass: 'status-active',
    icon: 'fa-puzzle-piece',
  },
  {
    id: 8,
    title: 'Cryptography Implementation',
    description: 'Educational implementation of cryptographic algorithms with explanations and examples',
    technologies: ['Python', 'Cryptography', 'Security', 'Algorithms'],
    githubUrl: 'https://github.com/username/crypto-implementations',
    liveUrl: 'https://crypto-impl.example.com',
    status: 'Archived',
    statusClass: 'status-archived',
    icon: 'fa-lock',
  },
];

const ProjectRow = ({ project }) => (
  <tr>
    <td>
      <div className="project-name">
        <i className={`fas ${project.icon}`}></i> {project.title}
      </div>
      <div className="project-tech">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
    </td>
    <td>{project.description}</td>
    <td>
      <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i> GitHub
      </a>
      <span style={{ color: '#6b7280' }}> | </span>
      <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-external-link-alt"></i> {project.status === 'Archived' ? 'Tutorial' : project.status === 'In Development' ? 'Backtest Results' : 'Live Demo'}
      </a>
    </td>
    <td>
      <span className={`status ${project.statusClass}`}></span> {project.status}
    </td>
  </tr>
);

const Dsapro2 = () => {
  return (
    <div>
      <style>
        {`
          body {
            background: #000000;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            color: white;
            line-height: 1.6;
          }

          .projects-container {
            max-width: 900px;
            margin: 40px auto;
            background: black;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 8px 32px rgba(0, 255, 135, 0.3);
            border: 1px solid rgba(0, 255, 135, 0.2);
          }

          .projects-header {
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            padding-bottom: 15px;
            border-bottom: 1px solid rgba(0, 255, 135, 0.2);
          }

          .projects-title {
            font-size: 2em;
            margin: 0;
            color: hsla(152, 100%, 50%, 1);
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .badge {
            display: inline-block;
            padding: 3px 8px;
            font-size: 0.8em;
            font-weight: bold;
            border-radius: 20px;
            margin-left: 10px;
            vertical-align: middle;
          }

          .badge-projects {
            background: linear-gradient(90deg, hsla(152, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);
            color: white;
          }

          .badge-count {
            background: rgba(0, 255, 135, 0.2);
            color: hsla(152, 100%, 50%, 1);
            border: 1px solid hsla(152, 100%, 50%, 1);
          }

          .projects-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
          }

          .projects-table th,
          .projects-table td {
            padding: 12px 15px;
            text-align: left;
            border-bottom: 1px solid rgba(0, 255, 135, 0.2);
          }

          .projects-table th {
            background: rgba(0, 255, 135, 0.15);
            color: hsla(152, 100%, 50%, 1);
            font-weight: bold;
          }

          .projects-table tr:hover {
            background: rgba(0, 255, 135, 0.08);
          }

          .project-name {
            font-weight: bold;
            color: hsla(152, 100%, 50%, 1);
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .project-link {
            color: hsla(152, 100%, 50%, 1);
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 5px;
            transition: color 0.2s;
          }

          .project-link:hover {
            color: #00cc6c;
            text-decoration: underline;
          }

          .project-tech {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: 5px;
          }

          .tech-tag {
            background: rgba(0, 255, 135, 0.15);
            color: hsla(152, 100%, 50%, 1);
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 0.75em;
          }

          .status {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-right: 6px;
          }

          .status-active {
            background: #10b981;
          }

          .status-archived {
            background: #6b7280;
          }

          .status-wip {
            background: #f59e0b;
            animation: pulse 2s infinite;
          }

          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }

          @media (max-width: 768px) {
            .projects-container {
              padding: 15px;
              margin: 20px 10px;
            }

            .projects-title {
              font-size: 1.4em;
            }

            .badge {
              font-size: 0.7em;
            }

            .projects-table {
              display: block;
              overflow-x: auto;
            }

            .projects-table th,
            .projects-table td {
              padding: 8px;
              font-size: 0.9em;
            }

            .project-tech {
              gap: 4px;
            }

            .tech-tag {
              font-size: 0.7em;
              padding: 1px 6px;
            }
          }

          .code-block .keyword {
            color: hsla(152, 100%, 50%, 1);
          }

          .code-block .string {
            color: hsla(152, 100%, 50%, 1);
          }

          .code-block .comment {
            color: #6b7280;
          }
        `}
      </style>
      <div className="projects-container">
        <div className="projects-header">
          <h1 className="projects-title">
            <i className="fas fa-project-diagram"></i> DSA Projects Portfolio
            <span className="badge badge-projects">ALGORITHMS</span>
            <span className="badge badge-count">{`${projectsData.length} PROJECTS`}</span>
          </h1>
        </div>

        <div className="projects-section">
          <table className="projects-table">
            <thead>
              <tr>
                <th>Project</th>
                <th>Description</th>
                <th>Links</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {projectsData.map((project) => (
                <ProjectRow key={project.id} project={project} />
              ))}
            </tbody>
          </table>
        </div>

        <div
          className="projects-section"
          style={{
            marginTop: '30px',
            background: 'rgba(0, 0, 0, 0.3)',
            padding: '15px',
            borderRadius: '8px',
            borderLeft: '3px solid hsla(152, 100%, 50%, 1)',
          }}
        >
          <h3 style={{ color: 'hsla(152, 100%, 50%, 1)', marginTop: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <i className="fas fa-database"></i> DSA Projects Data Structure
          </h3>
          <div
            className="code-block"
            style={{
              margin: '10px 0 0',
              background: 'rgba(0, 0, 0, 0.5)',
              padding: '10px',
              borderRadius: '5px',
              fontFamily: 'monospace',
              fontSize: '14px',
            }}
          >
            <span className="comment">// Example DSA projects array (JavaScript)</span>
            <br />
            <span className="keyword">const</span> <span className="string">projects</span> = [
            <br />
            &nbsp;&nbsp;{`{`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">id</span>: <span className="keyword">1</span>,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">title</span>: <span className="string">"Algorithm Visualizer"</span>,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">description</span>: <span className="string">"Interactive visualization tool for pathfinding and sorting algorithms..."</span>,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">technologies</span>: [<span className="string">"JavaScript"</span>, <span className="string">"D3.js"</span>, <span className="string">"HTML5 Canvas"</span>, <span className="string">"Algorithms"</span>],
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">githubUrl</span>: <span className="string">"https://github.com/username/algo-visualizer"</span>,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">liveUrl</span>: <span className="string">"https://algo-vis.example.com"</span>,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">status</span>: <span className="string">"active"</span>,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">icon</span>: <span className="string">"sitemap"</span>
            <br />
            &nbsp;&nbsp;{`},`}
            <br />
            &nbsp;&nbsp;<span className="comment">// ... other DSA projects</span>
            <br />
            ];
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dsapro2;
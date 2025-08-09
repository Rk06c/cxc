import React from 'react';
import '../styles/projects.css';
import { 
  faCodeBranch,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import your project images
// import wolfIllustration from './wolf-illustration.jpg';
// import leafImage from './🌿.jpg';
// import abstractImage from './11112705.jpg';
 //import image111 from '../assets/111.jpg';
 import image222 from '../assets/web5.png'




const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Content Platform",
      description: "A full-stack platform for generating and managing AI-created content with user dashboards and analytics.",
      image: image222,
      tags: ["React", "Node.js", "MongoDB", "TensorFlow"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "AI Content Platform",
      description: "A full-stack platform for generating and managing AI-created content with user dashboards and analytics.",
      image: image222,
      tags: ["React", "Node.js", "MongoDB", "TensorFlow"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 3,
      title: "AI Content Platform",
      description: "A full-stack platform for generating and managing AI-created content with user dashboards and analytics.",
      image: image222,
      tags: ["React", "Node.js", "MongoDB", "TensorFlow"],
      demoLink: "#",
      codeLink: "#"
    },
    // {
    //   id: 4,
    //   title: "Modern E-Commerce",
    //   description: "Feature-rich online store with payment integration, product filtering, and admin dashboard.",
    //   image: '',
    //   tags: ["Next.js", "Tailwind CSS", "Stripe", "Firebase"],
    //   demoLink: "#",
    //   codeLink: "#"
    // }
  ];

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
                <a href={project.demoLink} className="project-link demo-link">
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                </a>
                <a href={project.codeLink} className="project-link code-link">
                  <FontAwesomeIcon icon={faGithub} /> View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
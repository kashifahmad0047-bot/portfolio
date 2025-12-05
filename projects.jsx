import React from 'react';
import '../styles/projects.css';
import firebaseImg from '../assets/firebase.png';
import navbarImg from '../assets/navbafr.png';
import todoImg from '../assets/todolist.jpg';
const projects = [
  {
    title: 'Personal Portfolio',
    description: 'React-based responsive portfolio website.',
    tech: ['React', 'CSS', 'Bootstrap'],
    image: navbarImg,
    demo: '#',
    github: '#',
  },
  {
    title: 'Firebase Auth App',
    description: 'Login system using Firebase Auth and React.',
    tech: ['React', 'Firebase'],
    image: firebaseImg,
    demo: '#',
    github: '#',
  },
  {
    title: 'To-Do List',
    description: 'Simple to-do app with local storage.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    image: todoImg,
    demo: '#',
    github: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="tech-used">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demo} target="_blank" rel="noreferrer" className="btn-demo">Live Demo</a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-github">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

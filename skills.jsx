import React from 'react';
import '../styles/skills.css';

const skills = [
  {
    name: 'HTML5',
    icon: 'bi-filetype-html',
    color: '#e34c26',
    description: 'Markup language for web pages',
  },
  {
    name: 'CSS3',
    icon: 'bi-filetype-css',
    color: '#264de4',
    description: 'Styling and layouts',
  },
  {
    name: 'JavaScript',
    icon: 'bi-filetype-js',
    color: '#f0db4f',
    description: 'Interactive web functionality',
  },
  {
    name: 'Bootstrap',
    icon: 'bi-bootstrap-fill',
    color: '#6f42c1',
    description: 'Responsive UI framework',
  },
  {
    name: 'React',
    icon: 'bi-recycle',
    color: '#61dbfb',
    description: 'Frontend library by Facebook',
  },
  {
    name: 'Firebase',
    icon: 'bi-fire',
    color: '#ffa000',
    description: 'Backend platform by Google',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-card-inner">
                {/* Front Side */}
                <div className="skill-card-front">
                  <div className="icon-wrapper" style={{ backgroundColor: skill.color }}>
                    <i className={`bi ${skill.icon}`}></i>
                  </div>
                </div>

                {/* Back Side */}
                <div className="skill-card-back">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-desc">{skill.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

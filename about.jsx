import React from 'react';
import '../styles/about.css';
import profilePic from '../assets/90.jpeg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          {/* Image on left */}
          <div className="about-image">
            <img src={profilePic} alt="Kashif Ahmad" />
          </div>

          {/* Text on right */}
          <div className="about-text">
            <p>
              My name is <strong>Kashif Ahmad</strong>, I'm <strong>20 years old</strong> and currently studying in <strong>2nd year</strong> at <strong>GPGC Kohat</strong>.
              I started my education in my village school till 8th class, then completed my matric from <strong>Wisdom College, Chokara</strong>.
              After that, I moved to Kohat for further education and completed my 1st year at GPGC (Pindi Road).
            </p>
            <p>
              I’m passionate about <strong>web development</strong> and have hands-on experience with <strong>HTML, CSS, JavaScript, Bootstrap, React, and Firebase</strong>.
              I also have experience with basic design and animations to create interactive websites.
            </p>
          </div>
        </div>

        <div className="education-cards">
          <div className="edu-card">
            <div className="edu-icon"><i className="bi bi-book-fill"></i></div>
            <h4>Village School Willson school</h4>
            <p>8th Class Completed</p>
          </div>

          <div className="edu-card">
            <div className="edu-icon"><i className="bi bi-award-fill"></i></div>
            <h4>Wisdom College, Chokara</h4>
            <p>Matric Completed</p>
          </div>

          <div className="edu-card">
            <div className="edu-icon"><i className="bi bi-building"></i></div>
            <h4>GPGC, Kohat</h4>
            <p>1st Year Completed | 2nd Year Ongoing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

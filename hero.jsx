import React from 'react';
import '../styles/hero.css';
import profileImg from '../assets/kashi.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-text">
          <h1>Hi, I'm <span>Kashif Ahmad</span></h1>
          <h2 className="animated-text">Frontend Developer | Firebase Expert</h2>
          <p>I design and build responsive, interactive websites using React, Bootstrap, and modern web tools.</p>
          <a href="#contact" className="btn btn-primary hire-btn">Hire Me</a>
        </div>

        <div className="hero-image">
          <img src={profileImg} alt="Kashif Ahmad" />
        </div>
      </div>

      <div className="scroll-down">
        <a href="#about"><i className="bi bi-arrow-down-circle-fill"></i></a>
      </div>
    </section>
  );
};

export default Hero;

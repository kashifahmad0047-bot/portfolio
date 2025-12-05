import React, { useState } from 'react';
import './App.css';
import Navbar from './component/navbar';
import Hero from './component/hero';
import About from './component/about';
import Skills from './component/skills';
import Projects from './component/projects';
import Contact from './component/contact';
import Footer from './component/footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;

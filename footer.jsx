import React from 'react';
import '../styles/footer.css';
import profilePic from '../assets/Kashi.jpg';

const Footer = ({ darkMode, setDarkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-left">
          <img src={profilePic} alt="Kashif Ahmad" />
          <h4>Kashif Ahmad</h4>
          <p>
            <i className="bi bi-telephone-fill"></i>{' '}
            <a href="tel:+923001234567">+92 3322083983</a>
          </p>
          <p>
            <i className="bi bi-envelope-fill"></i>{' '}
            <a href="mailto:kashif@email.com">kashifahmad@email.com</a>
          </p>
        </div>

        <div className="footer-center">
          <h5>Let’s Connect</h5>
          <p>Follow me on social media for latest updates.</p>
          <div className="footer-social">
            <a href="#"><i className="bi bi-github"></i></a>
            <a href="https://www.facebook.com/kashif.ahmad.639408?mibextid=ZbWKwL"><i className="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=w73qifw"><i className="bi bi-instagram"></i></a>
            <a href="tel:+923322083983"><i className="bi bi-whatsapp"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kashif Ahmad. All rights reserved.</p>

        <div className="footer-actions">
          <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
            <i className={`bi ${darkMode ? 'bi-brightness-high-fill' : 'bi-moon-stars-fill'}`}></i>
          </button>

          <button onClick={scrollToTop} className="scroll-top-btn">
            <i className="bi bi-arrow-up-circle-fill"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

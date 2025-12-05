import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    // Simulate async (you can replace this with Firebase later)
    setTimeout(() => {
      const storedMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
      const newMessage = {
        ...formData,
        timestamp: new Date().toISOString(),
      };

      storedMessages.push(newMessage);
      localStorage.setItem('contactMessages', JSON.stringify(storedMessages));

      setLoading(false);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500); // Simulate a delay
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>

        <div className="contact-wrapper">
          {/* Left: Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>

            {success && <p className="success-message">✅ Message saved locally!</p>}
          </form>

          {/* Right: Social Icons + Info */}
          <div className="contact-social">
            <h4>Connect with Me</h4>
            <p className="contact-subtext">Feel free to reach out through any platform below:</p>

            <div className="social-icons">
              <div className="social-item">
                <a href="#">
                  <i className="bi bi-github"></i>
                </a>
                <span>Visit my GitHub</span>
              </div>

              <div className="social-item">
                <a href="https://www.facebook.com/kashif.ahmad.639408?mibextid=ZbWKwL" target="_blank" rel="noreferrer">
                  <i className="bi bi-facebook"></i>
                </a>
                <span>Message on Facebook</span>
              </div>

              <div className="social-item">
                <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=w73qifw" target="_blank" rel="noreferrer">
                  <i className="bi bi-instagram"></i>
                </a>
                <span>Follow on Instagram</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase'; // make sure this path is correct
import '../styles/loginmodel.css';
import loginImage from '../assets/90.jpeg';

const LoginModal = ({ show, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // New state for loading spinner

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log("✅ User logged in:", user);
      setError('');
      alert('Login successful!');
      onClose();
    } catch (err) {
      console.error("❌ Login error:", err.message);
      setError('Invalid email or password');
    } finally {
      setLoading(false); // Stop spinner after login attempt
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = 'kashifahmad0047@gmail.com';
  };

  const handleFacebookLogin = () => {
    window.location.href = 'https://www.facebook.com/kashif.ahmad.639408?mibextid=ZbWKwL';
  };

  if (!show) return null;

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Left Section */}
        <div className="login-left">
          <h2>LOGIN</h2>
          <p className="subtext">How do I get started? Lorem ipsum dolor sit amet.</p>

          {/* Error message */}
          {error && <p className="error">{error}</p>}

          {/* Login Form */}
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <i className="fa fa-user"></i>
              <input
                type="email"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <i className="fa fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Login Button with Spinner */}
            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Logging in...
                </>
              ) : (
                'Login Now'
              )}
            </button>
          </form>

          <div className="divider">Login with Others</div>
          <div className="social-buttons">
            <button className="google-btn" onClick={handleGoogleLogin}>
              <i className="bi bi-google"></i> Login with Google
            </button>
            <button className="facebook-btn" onClick={handleFacebookLogin}>
              <i className="bi bi-facebook"></i> Login with Facebook
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="login-right">
          <img src={loginImage} alt="Login visual" />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

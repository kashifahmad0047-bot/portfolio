import React, { useEffect, useState } from 'react';
import '../styles/navbar.css';
import { auth } from '../firebase/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import LoginModal from './loginmodel'; // ✅ Import the modal

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false); // ✅ modal state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <>
      <nav className="navbar custom-navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#">Kashif</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav align-items-center gap-3">
              <li className="nav-item">
                <a className="nav-link" href="#home"><i className="bi bi-house-fill"></i> Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about"><i className="bi bi-person-circle"></i> About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills"><i className="bi bi-lightning-fill"></i> Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects"><i className="bi bi-folder-fill"></i> Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact"><i className="bi bi-envelope-fill"></i> Contact</a>
              </li>

              {user ? (
                <>
                  <li className="nav-item">
                    <span className="nav-link">👤 {user.email}</span>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-sm btn-outline-danger" onClick={handleLogout}>Logout</button>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <button className="btn btn-sm btn-primary text-white" onClick={() => setShowLoginModal(true)}>Login</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* ✅ Login Modal */}
      <LoginModal show={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </>
  );
};

export default Navbar;

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import './Navbar.css';

function Navbar() {
  const [show, setShow] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/signin');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className={`navbar ${show && 'navbar-black'}`}>
      <div className="navbar-left">
        <h1 className="navbar-logo" onClick={() => navigate('/home')}>NETFLIX</h1>
        <div className="navbar-links">
          <span>Home</span>
          <span>TV Shows</span>
          <span>Movies</span>
          <span>New & Popular</span>
          <span>My List</span>
          <span>Browse by Languages</span>
        </div>
      </div>
      <div className="navbar-right">
        <svg className="navbar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <span>Children</span>
        <svg className="navbar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
        <div 
          className="navbar-avatar-container"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <img 
            className="navbar-avatar" 
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Avatar"
          />
          <svg className="navbar-dropdown-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 10l5 5 5-5z"></path>
          </svg>
          {showDropdown && (
            <div className="navbar-dropdown">
              <button onClick={handleSignOut}>Sign Out of Netflix</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

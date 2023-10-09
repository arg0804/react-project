import React, { useState } from 'react';
import './Navbar.css';
import logoImage from './images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="logo" onClick={toggleMenu}>
        <img
          src={logoImage}
          alt="Logo"
          className="logo-image"
        />
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        &#9776;
      </div>
      {isMenuOpen && (
        <div className="menu">
          <div className="close-button" onClick={closeMenu}>
            &#10006;
          </div>
          <ul>
            <li>
              <a href="/slider" target="_blank">
                Home
              </a>
            </li>
            <li>
              <a href="/vertical-list" target="_blank">
                About Us
              </a>
            </li>
            <li>
              <a href="/social-media" target="_blank">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

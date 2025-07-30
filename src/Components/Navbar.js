// src/components/Navbar.js

import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; // For scroll-based links
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMobileMenu = () => setIsMenuOpen(false);
  const location = useLocation();

  // Helper to render scroll link only on home page
  const isHome = location.pathname === '/';

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <RouterLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
          🌾 दुंधे गाव
        </RouterLink>

        {/* Mobile menu toggle */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <RouterLink to="/" className="nav-link" onClick={closeMobileMenu}>
              Home
            </RouterLink>
          </li>

          {isHome ? (
            <>
              <li className="nav-item">
                <ScrollLink to="about" smooth={true} duration={500} offset={-70} className="nav-link" onClick={closeMobileMenu}>
                  About Us
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink to="directory" smooth={true} duration={500} offset={-70} className="nav-link" onClick={closeMobileMenu}>
                  Directory
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink to="news" smooth={true} duration={500} offset={-70} className="nav-link" onClick={closeMobileMenu}>
                  News
                </ScrollLink>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <RouterLink to="/" className="nav-link" onClick={closeMobileMenu}>
                  About Us
                </RouterLink>
              </li>
              <li className="nav-item">
                <RouterLink to="/" className="nav-link" onClick={closeMobileMenu}>
                  Directory
                </RouterLink>
              </li>
              <li className="nav-item">
                <RouterLink to="/" className="nav-link" onClick={closeMobileMenu}>
                  News
                </RouterLink>
              </li>
            </>
          )}

          <li className="nav-item">
            <RouterLink to="/gallery" className="nav-link" onClick={closeMobileMenu}>
              Gallery
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

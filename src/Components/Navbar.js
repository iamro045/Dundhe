// src/components/Navbar.js

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger/close icons
import './Navbar.css';

function Navbar() {
  // This state will track if the mobile menu is open or not
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // This function toggles the state
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // This function closes the menu when a link is clicked
  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* The Logo, which also closes the menu on click */}
        <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
          🌾 दुंधे गाव
        </NavLink>
        
        {/* The Hamburger Icon that shows on mobile */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        {/* Add a conditional 'active' class to the menu */}
        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <NavLink to="/" className="nav-link" onClick={closeMobileMenu} end>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" onClick={closeMobileMenu}>
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/directory" className="nav-link" onClick={closeMobileMenu}>
              Directory
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/gallery" className="nav-link" onClick={closeMobileMenu}>
              Gallery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/news" className="nav-link" onClick={closeMobileMenu}>
              News
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
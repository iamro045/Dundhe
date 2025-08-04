// src/components/Navbar.js

import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Hook to programmatically navigate

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  // This is the key function to handle all scroll links
  const handleScrollLink = (section) => {
    closeMobileMenu(); // Close the menu first

    // Navigate to the homepage
    navigate('/');

    // Use a short timeout to allow the homepage to render before scrolling
    setTimeout(() => {
      scroller.scrollTo(section, {
        spy: true,
        smooth: true,
        duration: 500,
        offset: -80, // Adjusts for your 80px navbar height
      });
    }, 100);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
          🌾 दुंधे गाव
        </NavLink>

        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          {/* Use the handleScrollLink function for all scrollable sections */}
          <li className="nav-item">
            <span className="nav-link" onClick={() => handleScrollLink('home')}>
              मुख्यपृष्ठ
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link" onClick={() => handleScrollLink('about')}>
              आमच्याबद्दल
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link" onClick={() => handleScrollLink('directory')}>
              निर्देशिका
            </span>
          </li>
           <li className="nav-item">
            <span className="nav-link" onClick={() => handleScrollLink('news')}>
              बातम्या
            </span>
          </li>

          {/* Services Dropdown - This uses standard NavLinks */}
          <li
            className="nav-item dropdown"
            onMouseEnter={() => !isMenuOpen && setIsDropdownOpen(true)}
            onMouseLeave={() => !isMenuOpen && setIsDropdownOpen(false)}
          >
            <div className="nav-link" onClick={toggleDropdown}>
              सेवा <FaChevronDown className="dropdown-icon" />
            </div>
            {(isDropdownOpen || isMenuOpen) && (
              <ul className={isMenuOpen ? "dropdown-menu mobile" : "dropdown-menu"}>
                <li><NavLink to="/panchayat" className="dropdown-link" onClick={closeMobileMenu}>ग्रामपंचायत</NavLink></li>
                <li><NavLink to="/society" className="dropdown-link" onClick={closeMobileMenu}>सहकारी संस्था</NavLink></li>
                <li><NavLink to="/csc" className="dropdown-link" onClick={closeMobileMenu}>CSC केंद्र</NavLink></li>
              </ul>
            )}
          </li>

          {/* Gallery Link - This uses a standard NavLink */}
          <li className="nav-item">
            <NavLink to="/gallery" className="nav-link" onClick={closeMobileMenu}>
              गॅलरी
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

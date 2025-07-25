// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css'; // We'll create this file

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <h3 className="footer-logo">🌾 दुंधे गाव</h3>
          <p>
            आपल्या वारशाचे जतन करत, प्रगतीच्या दिशेने वाटचाल — समृद्ध समाजासाठी आमची बांधिलकी.

          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/news">News & Events</Link></li>
            <li><Link to="/directory">Village Directory</Link></li>
            <li><Link to="/gallery">Photo Gallery</Link></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <span><FaPhone /> 0123456789 (ग्रामपंचायत कार्यालय)</span>
          <span><FaEnvelope /> contact@dundhe.gov.in</span>
          <p>ग्रामपंचायत दुंधे, <br/>तालुका मालेगाव, जिल्हा नाशिक, महाराष्ट्र, भारत</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {currentYear} RoMan Webs | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
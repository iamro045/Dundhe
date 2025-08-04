// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

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
          <h3>जलद लिंक्स (Quick Links)</h3>
          <ul>
            <li><Link to="/">मुख्यपृष्ठ (Home)</Link></li>
            <li><Link to="/#about">आमच्याबद्दल (About)</Link></li>
            <li><Link to="/#directory">गाव निर्देशिका (Directory)</Link></li> {/* <-- CORRECTED: Added this line */}
            <li><Link to="/gallery">फोटो गॅलरी (Gallery)</Link></li>
            <li><Link to="/panchayat">ग्रामपंचायत</Link></li>
            <li><Link to="/society">सहकारी संस्था</Link></li>
            <li><Link to="/csc">CSC केंद्र</Link></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>संपर्क (Contact Us)</h3>
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

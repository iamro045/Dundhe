// src/Pages/Csc.js
import React from 'react';
import './FeaturePage.css';
import { FaPhone, FaRegClock } from 'react-icons/fa'; // Import new icons
import cscImage from '../assets/images/csc-center.jpg'; // Add a representative image

function Csc() {
  return (
    <div className="feature-page-container">
      <div className="page-header">
        <h1>आपले सरकार सेवा केंद्र (CSC)</h1>
        <p>सर्व डिजिटल सरकारी सेवांसाठी आपले एकमेव ठिकाण.</p>
      </div>
      <div className="feature-content">
        <img src={cscImage} alt="CSC केंद्र" className="feature-image" />
        <p>
          डिजिटल इंडिया अंतर्गत, गावातील CSC केंद्रावर अनेक सरकारी आणि खाजगी सेवा उपलब्ध आहेत. केंद्राच्या वेळेबद्दल आणि सेवांबद्दल माहितीसाठी संपर्क साधा.
        </p>

        {/* Operator Details Section */}
        <div className="operator-details">
          <h3>केंद्र चालक </h3>
          <p className="operator-name">श्री.सुधिर मोठाभाऊ खैरनार</p>
          <a href="tel:9876543210" className="vision-contact">
            <FaPhone /> 7620228157
          </a>
        </div>

        {/* Timings Section */}
        <div className="timings">
          <h3><FaRegClock /> केंद्राची वेळ</h3>
          <p>सोमवार ते शनिवार: सकाळी १०:०० ते संध्याकाळी ६:००</p>
          <p>रविवार: बंद</p>
        </div>

        {/* Services List Section */}
        <h3 className="committee-title">उपलब्ध सेवा</h3>
        <div className="services-grid">
          <div className="service-card">
            <h4>सरकारी सेवा</h4>
            <ul>
              <li>आधार कार्ड (नोंदणी आणि दुरुस्ती)</li>
              <li>पॅन कार्ड</li>
              <li>मतदान कार्ड</li>
              <li>७/१२ आणि ८अ उतारा</li>
              <li>जन्म आणि मृत्यू प्रमाणपत्र</li>
            </ul>
          </div>
          <div className="service-card">
            <h4>आर्थिक सेवा</h4>
            <ul>
              <li>बँक खाते उघडणे</li>
              <li>पंतप्रधान किसान योजना</li>
              <li>विमा सेवा (जीवन आणि आरोग्य)</li>
              <li>कर्ज अर्ज</li>
            </ul>
          </div>
          <div className="service-card">
            <h4>इतर सेवा</h4>
            <ul>
              <li>परीक्षा अर्ज भरणे</li>
              <li>नोकरी अर्ज</li>
              <li>रेल्वे आणि बस तिकीट बुकिंग</li>
              <li>वीज आणि पाणी बिल भरणे</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Csc;

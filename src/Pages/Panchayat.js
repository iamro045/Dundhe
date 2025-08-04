// src/Pages/Panchayat.js
import React from 'react';
import './FeaturePage.css'; // We will create this shared CSS file

function Panchayat() {
  return (
    <div className="feature-page-container">
      <div className="page-header">
        <h1>ग्रामपंचायत कार्यालय (Gram Panchayat)</h1>
        <p>Our village's local self-government body.</p>
      </div>
      <div className="feature-content">
        <p>
          आमचे ग्रामपंचायत कार्यालय गावाच्या विकासासाठी कटिबद्ध आहे. येथे तुम्हाला ग्रामसभेच्या बैठका, विकास कामे, आणि शासनाच्या विविध योजनांची माहिती मिळेल. पारदर्शक आणि गतिमान कारभारासाठी आम्ही नेहमीच प्रयत्नशील आहोत.
        </p>
        <h3>Key Responsibilities:</h3>
        <ul>
          <li>Construction and maintenance of village roads and drains.</li>
          <li>Supply of drinking water.</li>
          <li>Implementation of government schemes.</li>
          <li>Record keeping of births, deaths, and marriages.</li>
        </ul>
      </div>
    </div>
  );
}
export default Panchayat;
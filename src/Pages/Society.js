// src/Pages/Society.js
import React from 'react';
import './FeaturePage.css';
import { FaPhone } from 'react-icons/fa'; // Import the phone icon
import chairmanImg from '../assets/images/placeholder-person.jpg';
import viceChairmanImg from '../assets/images/placeholder-person.jpg';
import secretaryImg from '../assets/images/placeholder-person.jpg';

function Society() {
  return (
    <div className="feature-page-container">
      <div className="page-header">
        <h1>विविध कार्यकारी सेवा सहकारी सोसायटी लि.</h1>
        <p>गावाच्या कृषी आणि आर्थिक गरजा पूर्ण करण्यासाठी समर्पित.</p>
      </div>

      <div className="vision-section">
          <div className="vision-card">
            <div className="vision-image">
              <img src={chairmanImg} alt="सभापती" />
            </div>
            <div className="vision-text">
              <h4>सभापतींचे मनोगत</h4>
              <p>"माझ्या सर्व शेतकरी बांधवांना नमस्कार. आपल्या सोसायटीला अधिक मजबूत आणि शेतकरीभिमुख बनवणे हेच माझे ध्येय आहे. पारदर्शक कारभाराने आणि नवीन तंत्रज्ञानाचा वापर करून आपण सर्व मिळून प्रगती करूया."</p>
              <span className="vision-name">- श्री. सोनवणे संदिप दादाजी</span>
              <a href="tel:9876543210" className="vision-contact">
                <FaPhone /> 9876543210
              </a>
            </div>
          </div>

          <div className="vision-card">
            <div className="vision-image">
              <img src={viceChairmanImg} alt="उपसभापती" />
            </div>
            <div className="vision-text">
              <h4>उपसभापतींचे मनोगत</h4>
              <p>"सहकारातच खरी प्रगती आहे. सभासदांच्या हितासाठी नवनवीन योजना राबवून आणि आर्थिक शिस्त लावून संस्थेला एका नवीन उंचीवर नेण्यासाठी मी कटिबद्ध आहे. आपला विश्वास, हीच आमची ताकद."</p>
              <span className="vision-name">- श्री. अहिरे दिनेश शांताराम</span>
              <a href="tel:9876543211" className="vision-contact">
                <FaPhone /> 9876543211
              </a>
            </div>
          </div>

          <div className="vision-card">
            <div className="vision-image">
              <img src={secretaryImg} alt="गटसचिव" />
            </div>
            <div className="vision-text">
              <h4>गटसचिवांचे मनोगत</h4>
              <p>"संस्थेचे कामकाज अधिक गतिमान आणि सुलभ करणे हे माझे कर्तव्य आहे. सर्व सभासदांना वेळेवर सेवा देणे आणि त्यांच्या समस्यांचे निराकरण करण्यासाठी मी सदैव उपलब्ध असेन."</p>
              <span className="vision-name">- श्री. अहिरे नानाजी रामदास</span>
              <a href="tel:9876543222" className="vision-contact">
                <FaPhone />   9876543222
              </a>
            </div>
          </div>
        </div>

      <div className="feature-content">
        {/* Management Committee Table */}
        <h3 className="committee-title">व्यवस्थापन समिती</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>अ.क्र.</th>
                <th>नाव</th>
                <th>पद</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>१.</td>
                <td>श्री. सोनवणे संदिप दादाजी</td>
                <td>सभापती</td>
              </tr>
              <tr>
                <td>२.</td>
                <td>श्री. अहिरे दिनेश शांताराम</td>
                <td>उपसभापती</td>
              </tr>
              <tr>
                <td>३.</td>
                <td>श्री. वाघ मुरलीधर नथ्थु</td>
                <td>संचालक</td>
              </tr>
              <tr>
                <td>४.</td>
                <td>श्री. शेवाळे लक्ष्मण विठ्ठल</td>
                <td>संचालक</td>
              </tr>
              <tr>
                <td>५.</td>
                <td>श्री. अहिरे उत्तम काशिनाथ</td>
                <td>संचालक</td>
              </tr>
              <tr>
                <td>६.</td>
                <td>श्री. बाचुल दिगंबर केदा</td>
                <td>संचालक</td>
              </tr>
              <tr>
                <td>७.</td>
                <td>श्री. सोनवणे गणेश त्र्यंबक</td>
                <td>संचालक</td>
              </tr>
              <tr>
                <td>८.</td>
                <td>श्री. सोनवणे विलास मल्हार</td>
                <td>संचालक</td>
              </tr>
              <tr>
                <td>९.</td>
                <td>श्री. खैरनार रोहिदास जगन्नाथ</td>
                <td>संचालक</td>
              </tr>
              <tr>
                <td>१०.</td>
                <td>श्रीमती बाचुल सखुबाई दत्तू</td>
                <td>संचालिका</td>
              </tr>
              <tr>
                <td>११.</td>
                <td>श्रीमती वाघ गिताबाई शंकर</td>
                <td>संचालिका</td>
              </tr>
              <tr>
                <td>१२.</td>
                <td>श्री. बोरसे भगवान काशिनाथ</td>
                <td>संचालक</td>
              </tr>
               <tr>
                <td>१३.</td>
                <td>रिक्त पद</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Staff Table */}
        <h3 className="committee-title">कर्मचारी वर्ग</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>अ.क्र.</th>
                <th>नाव</th>
                <th>पद</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>१.</td>
                <td>श्री. अहिरे नानाजी रामदास</td>
                <td>गटसचिव</td>
              </tr>
              <tr>
                <td>२.</td>
                <td>श्री. सुधिर मोठाभाऊ खैरनार</td>
                <td>क्लार्क / शिपाई</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
export default Society;

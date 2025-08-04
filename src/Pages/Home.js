import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { FaLandmark, FaImages, FaBullhorn, FaBuilding, FaUsers, FaLaptop } from 'react-icons/fa';
import { Element } from 'react-scroll';

import About from './About';
import Directory from './Directory';

import './Home.css';
import News from '../Pages/News';

const galleryImages = [
  '/images/village-festival.jpg',
  '/images/village-farms.jpg',
  '/images/village-temple.jpg',
  '/images/village-kids.jpg',
];

function Home() {
  return (
    <div className="home-container">

      <header className="hero" id="home">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">🌾दुंधे गावात आपले हार्दिक स्वागत आहे</h1>
          <p className="hero-subtitle">परंपरेशी निष्ठा राखत, भविष्याकडे वाटचाल.</p>
          <ScrollLink to="about" smooth={true} duration={500} offset={-70} className="cta-button">
            आमच्याबद्दल अधिक जाणून घ्या
          </ScrollLink>
        </div>
      </header>

      <section className="features-section">
        {/* These links still scroll down the homepage */}

        <div className="feature-card">
          <FaBuilding className="feature-icon" />
          <h3 className="feature-title">ग्रामपंचायत</h3>
          <p>ग्रामपंचायत सदस्य, योजना आणि कामकाजाबद्दल माहिती मिळवा.</p>
          <RouterLink to="/panchayat" className="feature-link">अधिक माहिती →</RouterLink>
        </div>
        <div className="feature-card">
          <FaUsers className="feature-icon" />
          <h3 className="feature-title">सहकारी संस्था</h3>
          <p>गावातील विविध कार्यकारी सहकारी सोसायट्यांची माहिती.</p>
          <RouterLink to="/society" className="feature-link">अधिक माहिती →</RouterLink>
        </div>
        <div className="feature-card">
          <FaLaptop className="feature-icon" />
          <h3 className="feature-title">CSC केंद्र</h3>
          <p>आपले सरकार सेवा केंद्र (CSC) येथे उपलब्ध असलेल्या सेवांची माहिती.</p>
          <RouterLink to="/csc" className="feature-link">अधिक माहिती →</RouterLink>
        </div>

        <div className="feature-card">
          <FaLandmark className="feature-icon" />
          <h3 className="feature-title">गाव निर्देशिका</h3>
          <p>आपल्या गावातील महत्त्वाच्या स्थळांची व संपर्कांची माहिती एका ठिकाणी.</p>
          <ScrollLink to="directory" smooth={true} duration={500} offset={-70} className="feature-link">
            निर्देशिकेकडे जा →
          </ScrollLink>
        </div>
        <div className="feature-card">
          <FaBullhorn className="feature-icon" />
          <h3 className="feature-title">सूचना / घोषणा</h3>
          <p>गावातील महत्त्वाच्या घटना, कार्यक्रम, किंवा नवीन उपक्रमांची माहिती येथे प्रसिद्ध केली जाईल.</p>
          <ScrollLink to="news" smooth={true} duration={500} offset={-70} className="feature-link">
            सर्व सूचना पहा →
          </ScrollLink>
        </div>

        {/* These links now go to separate pages */}
        <div className="feature-card">
          <FaImages className="feature-icon" />
          <h3 className="feature-title">गावाचा फोटो गॅलरी</h3>
          <p>गावातील विविध कार्यक्रम, उत्सव, आणि ऐतिहासिक क्षणांचे छायाचित्र येथे पाहायला मिळतील.</p>
          <RouterLink to="/gallery" className="feature-link">गॅलरी पहा →</RouterLink>
        </div>

      </section>

      {/* Sections remaining on the homepage */}
      <Element name="about">
        <About />
      </Element>

      <Element name="news">
        <News />
      </Element>

      <Element name="directory">
        <Directory />
      </Element>

      {/* The static content for Panchayat, Society, and CSC has been removed from here */}

      <section className="gallery-preview-section">
        <h2 className="section-title">Our Village in Pictures</h2>
        <div className="gallery-grid">
          {galleryImages.map((src, index) => (
            <div key={index} className="gallery-image-wrapper">
              <img src={src} alt={`Village life ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <RouterLink to="/gallery" className="cta-button">View Full Gallery</RouterLink>
        </div>
      </section>

    </div>
  );
}

export default Home;
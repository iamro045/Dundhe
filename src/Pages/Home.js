import React from 'react';
import { Link } from 'react-router-dom'; // Using Link for navigation

// It's good practice to use an icon library like React Icons
// To install: npm install react-icons
import { FaLandmark, FaImages, FaBullhorn } from 'react-icons/fa';

import './Home.css';

// --- Placeholder Data (You will replace this with real data later) ---
const latestNews = [
  { id: 1, title: 'Gram Sabha Meeting on July 28th', date: '2025-07-20', link: '/news/gram-sabha' },
  { id: 2, title: 'Free Health Check-up Camp Announced', date: '2025-07-18', link: '/news/health-camp' },
  { id: 3, title: 'New Water Pipeline Project Inaugurated', date: '2025-07-15', link: '/news/pipeline-project' },
];

const galleryImages = [
  '/images/village-festival.jpg', // Replace with your actual image paths
  '/images/village-farms.jpg',
  '/images/village-temple.jpg',
  '/images/village-kids.jpg',
];
// --------------------------------------------------------------------


function Home() {
  return (
    <div className="home-container">
      {/* ========== Hero Section ========== */}
      <header className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">🌾दुंधे गावात आपले हार्दिक स्वागत आहे</h1>
          <p className="hero-subtitle">
            परंपरेशी निष्ठा राखत, भविष्याकडे वाटचाल.

          </p>
          <Link to="/about" className="cta-button">आमच्याबद्दल अधिक जाणून घ्या</Link>
        </div>
      </header>

      {/* ========== Features Section ========== */}
      <section className="features-section">
        <div className="feature-card">
          <FaLandmark className="feature-icon" />
          <h3 className="feature-title">Village Directory</h3>
          <p>Find important contacts and services in our village.</p>
          <Link to="/directory" className="feature-link">Go to Directory →</Link>
        </div>
        <div className="feature-card">
          <FaBullhorn className="feature-icon" />
          <h3 className="feature-title">Announcements</h3>
          <p>Stay updated with the latest news from the Gram Panchayat.</p>
          <Link to="/news" className="feature-link">View All News →</Link>
        </div>
        <div className="feature-card">
          <FaImages className="feature-icon" />
          <h3 className="feature-title">Photo Gallery</h3>
          <p>Explore the beauty and culture of our village through photos.</p>
          <Link to="/gallery" className="feature-link">Visit Gallery →</Link>
        </div>
      </section>

      {/* ========== News & Calendar Split Section ========== */}
      <section className="news-calendar-section">
        <div className="latest-news">
          <h2 className="section-title">📰 Latest News</h2>
          <div className="news-list">
            {latestNews.map(item => (
              <div key={item.id} className="news-item">
                <span className="news-date">{item.date}</span>
                <Link to={item.link} className="news-title">{item.title}</Link>
              </div>
            ))}
          </div>
        </div>

      </section>
      
      {/* ========== Gallery Preview Section ========== */}
      <section className="gallery-preview-section">
         <h2 className="section-title">Our Village in Pictures</h2>
         <div className="gallery-grid">
            {galleryImages.map((src, index) => (
                <div key={index} className="gallery-image-wrapper">
                    <img src={src} alt={`Village life ${index + 1}`} className="gallery-image"/>
                </div>
            ))}
         </div>
         <div style={{textAlign: 'center', marginTop: '2rem'}}>
            <Link to="/gallery" className="cta-button">View Full Gallery</Link>
         </div>
      </section>

    </div>
  );
}

export default Home;
// src/App.js

import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

// Page Components
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import NewsDetail from './Pages/NewsDetail';
import Panchayat from './Pages/Panchayat'; // <-- NEW
import Society from './Pages/Society';     // <-- NEW
import Csc from './Pages/Csc';             // <-- NEW

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          {/* Main Homepage Route */}
          <Route path="/" element={<Home />} />

          {/* Other Main Pages */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news/:slug" element={<NewsDetail />} />

          {/* Routes for the Three New Feature Pages */}
          <Route path="/panchayat" element={<Panchayat />} />
          <Route path="/society" element={<Society />} />
          <Route path="/csc" element={<Csc />} />
          
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
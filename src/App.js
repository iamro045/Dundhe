import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

// Pages
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import NewsDetail from './Pages/NewsDetail';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          {/* Home Page - contains About, Directory, News as sections */}
          <Route path="/" element={<Home />} />

          {/* Gallery Page (separate route) */}
          <Route path="/gallery" element={<Gallery />} />

          {/* Dynamic News Detail Page */}
          <Route path="/news/:slug" element={<NewsDetail />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;

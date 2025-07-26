import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


// ✅ Import Layout Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

// ✅ Import Page Components
import Home from './Pages/Home';
import About from './Pages/About';
import Directory from './Pages/Directory';
import Gallery from './Pages/Gallery';
import News from './Pages/News';
import NewsDetail from './Pages/NewsDetail';

function App() {
  return (
    <Router>
      {/* 👇 This ensures scroll resets to top on route change */}
      <ScrollToTop />

      <Navbar />

      <main>
        <Routes>
          {/* Static Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/gallery" element={<Gallery />} />

          {/* News and Dynamic Pages */}
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsDetail />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;


import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import { AnimatePresence } from 'framer-motion';

// Composant pour forcer le scroll en haut à chaque changement de page
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-[#050505]">
        {/* Persistent 3D Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Background3D />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full">
          <Navbar />
          <main>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apropos" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/mentions-legales" element={<Legal title="Mentions Légales" type="mentions" />} />
                <Route path="/confidentialite" element={<Legal title="Confidentialité" type="privacy" />} />
                <Route path="/cookies" element={<Legal title="Politique Cookies" type="cookies" />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;

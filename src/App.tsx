import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Pujas from '../pages/Pujas';
import Vastu from '../pages/Vastu';
import EPuja from '../pages/EPuja';
import Contact from '../pages/Contact';
import Reviews from '../pages/Reviews';
import Loader from '../components/Loader';
import BackgroundSymbols from '../components/BackgroundSymbols';
import { LanguageProvider } from '../LanguageContext';

// Admin Imports
import Login from '../pages/admin/Login';
import Dashboard from '../pages/admin/Dashboard';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Main Layout (Public)
const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Initial Load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); 
    return () => clearTimeout(timer);
  }, []);

  // Route Change Loader
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800); 
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Loader isVisible={loading} />
      <BackgroundSymbols />
      <div className="flex flex-col min-h-screen relative z-10">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Admin Routes (No Layout) */}
          <Route path="/admin" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />

          {/* Public Routes (With Layout) */}
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
          <Route path="/services" element={<PublicLayout><Services /></PublicLayout>} />
          <Route path="/pujas" element={<PublicLayout><Pujas /></PublicLayout>} />
          <Route path="/vastu" element={<PublicLayout><Vastu /></PublicLayout>} />
          <Route path="/e-puja" element={<PublicLayout><EPuja /></PublicLayout>} />
          <Route path="/reviews" element={<PublicLayout><Reviews /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;
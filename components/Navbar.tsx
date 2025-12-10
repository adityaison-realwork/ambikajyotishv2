
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Phone, Globe, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.pujas'), path: '/pujas' },
    { name: t('nav.vastu'), path: '/vastu' },
    { name: t('nav.epuja'), path: '/e-puja' },
    { name: t('nav.reviews'), path: '/reviews' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const menuVariants = {
    closed: { 
      opacity: 0,
      x: "100%",
      transition: { 
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    open: { 
      opacity: 1,
      x: "0%",
      transition: { 
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const linkVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({ 
      x: 0, 
      opacity: 1,
      transition: { delay: i * 0.05 + 0.2 }
    })
  };

  return (
    <>
      {/* Top Bar */}
      <motion.div 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-saffron-900 to-saffron-800 text-saffron-50 text-xs py-2 px-4 flex justify-between items-center hidden md:flex relative z-50"
      >
        <div className="flex items-center space-x-2">
           <Sun size={14} className="text-saffron-300 animate-pulse" />
           <span>Shubh Muhurat Today: {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <div className="font-semibold tracking-wider uppercase text-[10px] opacity-80">Vadodara's Most Trusted Vedic Institute</div>
        <div className="flex items-center space-x-4">
           <a href="tel:+9198XXXXXXXX" className="flex items-center gap-1 hover:text-white transition-colors"><Phone size={12} /> +91 98XXX XXXXX</a>
        </div>
      </motion.div>

      {/* Main Nav */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg py-2' : 'bg-transparent py-4'}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group relative z-50">
            <div className="w-12 h-12 bg-gradient-to-br from-saffron-500 to-saffron-600 rounded-xl rotate-3 flex items-center justify-center text-white font-serif font-bold text-2xl group-hover:rotate-6 transition-transform shadow-lg shadow-saffron-500/30">
              A
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-saffron-900 leading-none group-hover:text-saffron-600 transition-colors">Ambika Jyotish</h1>
              <p className="text-[10px] text-stone-500 uppercase tracking-[0.2em] mt-1">Vedic Wisdom</p>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path}
                className={({ isActive }) => 
                  `relative font-medium text-sm tracking-wide transition-colors duration-200 hover:text-saffron-600 ${isActive ? 'text-saffron-600 font-semibold' : 'text-stone-700'}`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div 
                        layoutId="underline"
                        className="absolute left-0 right-0 -bottom-1 h-0.5 bg-saffron-500 rounded-full" 
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 bg-stone-100 px-3 py-1.5 rounded-full text-xs font-bold text-stone-600 hover:bg-saffron-100 hover:text-saffron-700 transition-colors"
            >
              <Globe size={14} />
              <span>{language === 'EN' ? 'EN' : language === 'HI' ? 'HI' : 'SA'}</span>
            </button>

            <NavLink to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-saffron-600 to-saffron-500 hover:from-saffron-700 hover:to-saffron-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-saffron-500/30"
              >
                {t('nav.book')}
              </motion.button>
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-4 relative z-50">
             <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-stone-600 border border-stone-100"
            >
              <Globe size={14} />
              <span>{language}</span>
            </button>
            <button 
              className={`p-2 rounded-full transition-colors relative z-50 ${isOpen ? 'text-white bg-white/20' : 'text-stone-700 bg-white/50'}`} 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Premium Mobile Menu Overlay - MOVED OUTSIDE NAV TO FIX SCROLL ISSUE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-gradient-to-br from-saffron-900 via-stone-900 to-black text-white lg:hidden flex flex-col overflow-hidden"
          >
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-saffron-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/binding-light.png')] pointer-events-none"></div>

            <div className="flex flex-col h-full pt-28 pb-10 px-8 relative z-10 overflow-y-auto">
              <div className="flex-grow space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    custom={i}
                    variants={linkVariants}
                  >
                    <NavLink 
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) => `
                        group flex items-center justify-between py-4 border-b border-white/10 
                        ${isActive ? 'text-saffron-400' : 'text-stone-300'}
                      `}
                    >
                      {({ isActive }) => (
                        <>
                          <span className="text-3xl font-serif font-bold tracking-tight group-hover:text-white transition-colors">{link.name}</span>
                          <ChevronRight className={`transition-transform duration-300 ${isActive ? 'text-saffron-400' : 'opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0'}`} />
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-gradient-to-r from-saffron-500 to-orange-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-saffron-500/20 active:scale-95 transition-transform">
                    {t('nav.book')}
                  </button>
                </NavLink>
                
                <div className="mt-8 text-center text-stone-500 text-xs tracking-widest uppercase">
                  Ambika Jyotish Kendra &copy; {new Date().getFullYear()}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

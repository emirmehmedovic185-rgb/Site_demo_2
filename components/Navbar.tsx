
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const LogoEmblem = () => (
  <div className="relative w-12 h-12 flex items-center justify-center group">
    {/* Glow effect in the background */}
    <motion.div 
      animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.8, 1.1, 0.8] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute w-6 h-6 bg-amber-500/40 blur-xl rounded-full"
    />
    
    <svg viewBox="0 0 40 40" className="w-full h-full relative z-10 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
      {/* Outer rotating hex frame */}
      <motion.path
        d="M20 2 L36 11 L36 29 L20 38 L4 29 L4 11 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-amber-500/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      
      {/* The Stylized 'M' / Filament */}
      <motion.path
        d="M12 28 V12 L20 22 L28 12 V28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-amber-500"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      
      {/* Energy Spark at the center */}
      <motion.circle
        cx="20"
        cy="22"
        r="1.5"
        className="fill-white shadow-lg"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  </div>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Expertise', path: '/services' },
    { name: 'Héritage', path: '/apropos' },
    { name: 'Consultation', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.includes(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass px-12 py-5 rounded-full pointer-events-auto shadow-2xl border-white/5">
        <Link to="/" className="flex items-center space-x-5 group">
          <LogoEmblem />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-[0.3em] uppercase font-serif leading-none group-hover:text-amber-500 transition-colors">
              Martin
            </span>
            <span className="text-[9px] tracking-[0.5em] uppercase text-amber-500/70 font-black mt-1 group-hover:text-amber-500 transition-colors">
              Électricité — Ingénierie
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative text-[10px] font-black tracking-[0.3em] uppercase group"
            >
              <span className={`transition-all duration-500 ${isActive(link.path) ? 'text-amber-500' : 'text-gray-400 group-hover:text-white'}`}>
                {link.name}
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 h-[2px] bg-amber-500 w-full origin-left"
                initial={false}
                animate={{ scaleX: isActive(link.path) ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              />
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-8 py-3 bg-amber-600 text-white rounded-full text-[9px] font-black tracking-[0.2em] uppercase hover:bg-amber-500 transition-all duration-500 glow-amber"
          >
            Estimation Privée
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-amber-500 p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-32 left-6 right-6 glass p-10 rounded-[2.5rem] z-50 flex flex-col space-y-8 pointer-events-auto"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-serif font-bold tracking-widest text-white border-b border-amber-500/10 pb-4"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

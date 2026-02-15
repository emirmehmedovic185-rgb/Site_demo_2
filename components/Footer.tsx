
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const FooterLogo = () => (
  <div className="relative w-10 h-10 flex items-center justify-center">
    <svg viewBox="0 0 40 40" className="w-full h-full drop-shadow-[0_0_5px_rgba(245,158,11,0.3)]">
      <path
        d="M20 2 L36 11 L36 29 L20 38 L4 29 L4 11 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-amber-500/30"
      />
      <path
        d="M12 28 V12 L20 22 L28 12 V28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-amber-500"
      />
    </svg>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-40 pb-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-32">
          <div className="col-span-1 md:col-span-2 space-y-10">
            <Link to="/" className="flex items-center space-x-4 group">
              <FooterLogo />
              <span className="text-3xl font-serif font-bold tracking-[0.2em] uppercase group-hover:text-amber-500 transition-colors">
                Martin <span className="text-amber-500">Électricité</span>
              </span>
            </Link>
            <p className="text-gray-500 max-w-sm text-lg font-light leading-relaxed">
              Cabinet d'ingénierie & d'intégration électrique pour l'architecture d'exception. Présent à Paris, Genève et Londres.
            </p>
            <div className="flex space-x-10 pt-4">
              <Instagram className="w-5 h-5 text-gray-700 hover:text-amber-500 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-700 hover:text-amber-500 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-700 hover:text-amber-500 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-white font-black tracking-[0.4em] uppercase text-[9px]">L'Entreprise</h4>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li><Link to="/" className="hover:text-amber-500 transition-colors">Accueil</Link></li>
              <li><Link to="/apropos" className="hover:text-amber-500 transition-colors">Héritage</Link></li>
              <li><Link to="/services" className="hover:text-amber-500 transition-colors">Expertises</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Presse</Link></li>
            </ul>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-white font-black tracking-[0.4em] uppercase text-[9px]">Ingénierie</h4>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li>Éclairage Design</li>
              <li>Domotique KNX</li>
              <li>Maintenance Platinum</li>
              <li>Audit Energétique</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] font-black tracking-[0.3em] uppercase text-gray-700">
          <p>© {new Date().getFullYear()} Martin Électricité — Ingénierie & Lumière. Engineering superiority.</p>
          <div className="flex space-x-12 mt-8 md:mt-0">
            <Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link>
            <Link to="/confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

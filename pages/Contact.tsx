
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, ChevronRight } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Votre demande a été transmise à notre conciergerie. Un expert vous contactera sous 12h.");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-44 pb-20 px-6 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        {/* Left: Text & Info */}
        <div className="space-y-16">
          <div className="max-w-md">
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-10 leading-none">Parler à un <br/><span className="text-amber-500 italic">Expert.</span></h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Nous sélectionnons un nombre limité de projets par an afin de garantir une attention absolue à chaque détail.
            </p>
          </div>

          <div className="space-y-10">
            <div className="flex items-center space-x-8 group">
              <div className="p-5 bg-amber-600/10 rounded-2xl group-hover:bg-amber-600 transition-all duration-500">
                <Phone className="w-7 h-7 text-amber-500 group-hover:text-white" />
              </div>
              <div className="space-y-1">
                <p className="text-gray-500 text-[10px] font-black tracking-widest uppercase">Ligne Conciergerie</p>
                <p className="text-2xl font-bold">+33 (0)1 89 45 67 00</p>
              </div>
            </div>
            <div className="flex items-center space-x-8 group">
              <div className="p-5 bg-amber-600/10 rounded-2xl group-hover:bg-amber-600 transition-all duration-500">
                <Mail className="w-7 h-7 text-amber-500 group-hover:text-white" />
              </div>
              <div className="space-y-1">
                <p className="text-gray-500 text-[10px] font-black tracking-widest uppercase">Expertise & Devis</p>
                <p className="text-2xl font-bold">projets@martin-lux.fr</p>
              </div>
            </div>
            <div className="flex items-center space-x-8 group">
              <div className="p-5 bg-amber-600/10 rounded-2xl group-hover:bg-amber-600 transition-all duration-500">
                <MapPin className="w-7 h-7 text-amber-500 group-hover:text-white" />
              </div>
              <div className="space-y-1">
                <p className="text-gray-500 text-[10px] font-black tracking-widest uppercase">Showroom Privé</p>
                <p className="text-2xl font-bold">8 Rue de la Paix, 75002 Paris</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Premium Form */}
        <div className="glass p-16 rounded-[4rem] border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/10 blur-[60px] rounded-full" />
          <h3 className="text-3xl font-serif font-bold mb-12 uppercase tracking-tighter">Votre Vision</h3>
          
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-b border-white/10 pb-4 focus-within:border-amber-500 transition-colors">
                <label className="block text-[10px] font-black tracking-[0.2em] uppercase text-gray-500 mb-2">Identité</label>
                <input type="text" placeholder="Prénom & Nom" className="bg-transparent w-full text-white placeholder-gray-700 focus:outline-none" required />
              </div>
              <div className="border-b border-white/10 pb-4 focus-within:border-amber-500 transition-colors">
                <label className="block text-[10px] font-black tracking-[0.2em] uppercase text-gray-500 mb-2">Prestige</label>
                <input type="text" placeholder="Entreprise / Particulier" className="bg-transparent w-full text-white placeholder-gray-700 focus:outline-none" />
              </div>
            </div>

            <div className="border-b border-white/10 pb-4 focus-within:border-amber-500 transition-colors">
              <label className="block text-[10px] font-black tracking-[0.2em] uppercase text-gray-500 mb-2">Envergure du Projet</label>
              <select className="bg-transparent w-full text-white focus:outline-none appearance-none cursor-pointer">
                <option className="bg-gray-900">Résidence Secondaire Haut de Gamme</option>
                <option className="bg-gray-900">Showroom / Boutique de Luxe</option>
                <option className="bg-gray-900">Yacht / Secteur Marine</option>
                <option className="bg-gray-900">Audit & Mise à jour Domotique</option>
              </select>
            </div>

            <div className="border-b border-white/10 pb-4 focus-within:border-amber-500 transition-colors">
              <label className="block text-[10px] font-black tracking-[0.2em] uppercase text-gray-500 mb-2">Budget Estimé (en k€)</label>
              <input type="text" placeholder="Ex: 50k€ - 150k€" className="bg-transparent w-full text-white placeholder-gray-700 focus:outline-none" />
            </div>

            <div className="border-b border-white/10 pb-4 focus-within:border-amber-500 transition-colors">
              <label className="block text-[10px] font-black tracking-[0.2em] uppercase text-gray-500 mb-2">Description</label>
              <textarea rows={3} placeholder="Détails de votre demande..." className="bg-transparent w-full text-white placeholder-gray-700 focus:outline-none resize-none"></textarea>
            </div>

            <button className="w-full py-6 bg-amber-600 text-white font-black tracking-[0.3em] uppercase rounded-2xl hover:bg-amber-500 transition-all duration-500 flex items-center justify-center space-x-4 group overflow-hidden">
              <span className="relative z-10">Solliciter l'Expertise</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

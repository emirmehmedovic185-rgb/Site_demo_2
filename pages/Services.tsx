
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Lightbulb, Zap, ShieldCheck, Home as HomeIcon, Layout, Box, Layers, MousePointer2, Settings } from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: "Ingénierie Photométrique",
    description: "Calcul d'éclairement précis pour garantir une ambiance parfaite, de jour comme de nuit. Étude des éblouissements et des contrastes.",
    features: ["Logiciel Dialux", "Étude IRC", "Confort visuel"]
  },
  {
    icon: Smartphone,
    title: "Intelligence Domestique",
    description: "Contrôle centralisé de l'audiovisuel, des ouvrants et du climat. Scénarios intelligents synchronisés sur votre rythme circadien.",
    features: ["KNX Secure", "Control4 / Savant", "Invisible UI"]
  },
  {
    icon: Layout,
    title: "Design LED Architectural",
    description: "Intégration de profilés LED sans bordures pour un rendu minimaliste. Éclairage indirect, lèche-mur et rétro-éclairage de pierre noble.",
    features: ["LED Tunable White", "Dim-to-Warm", "No-Spot Technology"]
  }
];

const Services: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-44 pb-20 px-6 max-w-7xl mx-auto"
    >
      <div className="max-w-4xl mb-32">
        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-10 leading-none">L'Expertise du <br/><span className="text-amber-500 italic">Détail.</span></h1>
        <p className="text-2xl text-gray-500 font-light leading-relaxed">
          Chaque projet est une œuvre unique. Nous ne vendons pas du matériel, nous créons des expériences sensorielles par la maîtrise du courant fort et faible.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-24 mb-40">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-16 items-center border-b border-white/5 pb-24 group"
          >
            <div className="flex-1 space-y-8">
              <div className="inline-block p-6 bg-amber-600/10 rounded-3xl group-hover:bg-amber-600 transition-all duration-700">
                <service.icon className="w-12 h-12 text-amber-500 group-hover:text-white" />
              </div>
              <h3 className="text-4xl font-serif font-bold">{service.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                {service.features.map(f => (
                  <span key={f} className="px-4 py-1.5 glass rounded-full text-[10px] font-black tracking-widest uppercase text-amber-500 border-amber-500/20">{f}</span>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full h-[400px] rounded-[3rem] overflow-hidden relative shadow-2xl">
               <img src={`https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800&sig=${idx}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
               <div className="absolute inset-0 bg-amber-900/10 mix-blend-overlay" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tiers / Privilège Section */}
      <section className="bg-amber-600/5 glass p-16 rounded-[4rem] text-center border-amber-500/10">
        <h2 className="text-4xl font-serif font-bold mb-12">Programmes de <span className="text-amber-500 italic">Maintenance Elite</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Or", price: "À partir de 450€/mois", desc: "Audit annuel complet & intervention sous 24h." },
            { name: "Platine", price: "À partir de 1200€/mois", desc: "Suivi temps réel KNX & intervention sous 4h." },
            { name: "Diamant", price: "Sur Devis", desc: "Conciergerie dédiée & mise à jour domotique mensuelle." }
          ].map((tier, i) => (
            <div key={i} className="p-10 glass rounded-[2.5rem] border-white/5 hover:border-amber-500/30 transition-all duration-500">
              <h4 className="text-2xl font-bold mb-2 uppercase tracking-widest">{tier.name}</h4>
              <p className="text-amber-500 text-sm font-black mb-6">{tier.price}</p>
              <p className="text-gray-400 text-sm">{tier.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Services;

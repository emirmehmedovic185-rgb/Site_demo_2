
import React from 'react';
import { motion } from 'framer-motion';
import { Info, Shield, Cookie, FileText, Settings, Layout } from 'lucide-react';

interface LegalProps {
  title: string;
  type: 'mentions' | 'privacy' | 'cookies';
}

const Legal: React.FC<LegalProps> = ({ title, type }) => {
  const icons = {
    mentions: FileText,
    privacy: Shield,
    cookies: Cookie
  };
  const Icon = icons[type];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-44 pb-40 px-6 max-w-4xl mx-auto min-h-screen"
    >
      <div className="text-center mb-24">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-block p-5 bg-amber-500/5 rounded-full mb-8 border border-amber-500/10"
        >
          <Icon className="w-10 h-10 text-amber-500/80" />
        </motion.div>
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 tracking-tighter text-white">
          {title}
        </h1>
        <p className="text-amber-500/60 text-[10px] font-black tracking-[0.4em] uppercase">Espace Démonstration</p>
      </div>

      <div className="glass p-10 md:p-16 rounded-[3rem] border-white/5 relative overflow-hidden">
        <div className="relative z-10 space-y-10">
          <section className="space-y-6">
            <div className="flex items-center gap-3 text-amber-500">
              <Info className="w-5 h-5" />
              <h2 className="text-xl font-bold uppercase tracking-widest text-[12px]">Nature du site</h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              Ce site est une <span className="text-white font-medium">démonstration interactive</span> destinée à présenter une structure de navigation et une direction artistique. 
            </p>
            <p className="text-gray-500 leading-relaxed text-sm">
              Conformément aux standards de développement, cette page est un emplacement réservé. L'intégralité des textes légaux, politiques de confidentialité et gestion des cookies sera personnalisée selon les besoins spécifiques de l'entreprise lors de l'installation finale.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-white/5">
            <div className="flex gap-4">
              <Settings className="w-5 h-5 text-amber-500/50 shrink-0" />
              <div className="space-y-2">
                <h3 className="text-[11px] font-black tracking-widest uppercase text-white">100% Modulable</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  L'architecture technique permet une modification rapide des contenus, des visuels et des mentions obligatoires via une interface dédiée.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Layout className="w-5 h-5 text-amber-500/50 shrink-0" />
              <div className="space-y-2">
                <h3 className="text-[11px] font-black tracking-widest uppercase text-white">Prêt pour le SEO</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Chaque page est optimisée pour le référencement naturel avec des balises sémantiques propres, même dans cette version démo.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 text-center">
             <button 
              onClick={() => window.history.back()}
              className="group relative px-12 py-5 overflow-hidden rounded-full transition-all"
             >
               <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
               <span className="relative text-[10px] font-black tracking-widest uppercase text-white/80 group-hover:text-white">
                 Retour au site
               </span>
             </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Legal;


import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Diamond, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const containerRef = useRef(null);
  const connectRef = useRef(null);
  
  // Scroll global
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // --- SECTION DE CONNEXION ÉLECTRIQUE (GATE) ---
  const { scrollYProgress: connectProgress } = useScroll({
    target: connectRef,
    offset: ["start start", "end end"]
  });

  // --- LOGIQUE D'ANIMATION SÉQUENTIELLE HAUTE PRÉCISION ---

  // 1. RAPPROCHEMENT DES CÂBLES (0% -> 40%)
  const cableLeftX = useSpring(useTransform(connectProgress, [0.05, 0.40], ["-100%", "-0.5%"]), { stiffness: 40, damping: 15 });
  const cableRightX = useSpring(useTransform(connectProgress, [0.05, 0.40], ["100%", "0.5%"]), { stiffness: 40, damping: 15 });
  
  // 2. L'ARC ÉLECTRIQUE (Explose au contact)
  const arcOpacity = useTransform(connectProgress, [0.38, 0.40, 0.50, 0.52], [0, 1, 1, 0]);
  const sparkScale = useTransform(connectProgress, [0.40, 0.45, 0.50], [0.8, 2.5, 0.8]);
  const flashOpacity = useTransform(connectProgress, [0.395, 0.40, 0.41], [0, 1, 0]);

  // 3. DISPARITION DES ÉLÉMENTS (0.52 -> 0.60)
  const cablesOpacity = useTransform(connectProgress, [0.52, 0.60], [1, 0]);
  const cablesScale = useTransform(connectProgress, [0.52, 0.60], [1, 1.15]);
  const cablesDisplay = useTransform(connectProgress, (p) => p > 0.62 ? "none" : "flex");

  // 4. RÉVÉLATION DE LA SIGNATURE (0.65 -> 0.72)
  const textOpacity = useTransform(connectProgress, [0.65, 0.72], [0, 1]);
  const textScale = useTransform(connectProgress, [0.65, 0.72], [0.95, 1]);
  const textBlur = useTransform(connectProgress, [0.65, 0.72], ["blur(15px)", "blur(0px)"]);
  const textDisplay = useTransform(connectProgress, (p) => p < 0.63 ? "none" : "flex");

  // EFFETS DE FOND
  const overlayOpacity = useTransform(connectProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const bgTransition = useTransform(connectProgress, [0, 0.1, 0.95, 1], ["rgba(5,5,5,0)", "rgba(0,0,0,1)", "rgba(0,0,0,1)", "rgba(5,5,5,0)"]);
  
  // Vibration
  const vibration = useTransform(connectProgress, [0.30, 0.40], [0, 15]);
  const vibrateSpring = useSpring(vibration, { stiffness: 1000, damping: 2 });

  // Parallaxe sections précédentes
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const smoothX = useSpring(useTransform(scrollYProgress, [0.3, 0.6], [1000, -1000]), { stiffness: 100, damping: 30 });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div ref={containerRef} className="relative">
      
      {/* 1. HERO SECTION */}
      <motion.section 
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="sticky top-0 h-screen flex flex-col items-center justify-center text-center px-6 z-10"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8 inline-flex items-center space-x-4 px-6 md:px-8 py-3 glass rounded-full text-amber-500 text-[10px] font-black tracking-[0.4em] uppercase border-amber-500/20 shadow-2xl"
        >
          <Diamond className="w-3 h-3 animate-pulse" />
          <span>Ingénierie de Lumière — Paris</span>
        </motion.div>
        
        <motion.h1 className="text-5xl md:text-[130px] font-serif font-bold mb-10 leading-[0.85] tracking-tighter text-white">
          L'Électricité <br /> <span className="text-amber-500 italic text-glow-amber">Réinventée.</span>
        </motion.h1>

        {/* INDICATEUR EXPLORER - Fix centrage mobile par conteneur flex */}
        <div className="absolute bottom-20 left-0 w-full flex justify-center pointer-events-none">
          <motion.div 
            animate={{ y: [0, 15, 0] }} 
            transition={{ duration: 2, repeat: Infinity }} 
            className="flex flex-col items-center space-y-4"
          >
            <span className="text-[10px] font-black tracking-widest text-amber-500/50 uppercase">Explorer</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500 to-transparent" />
          </motion.div>
        </div>
      </motion.section>

      {/* 2. MANIFESTE */}
      <section className="relative h-[200vh] bg-[#080808] z-20 border-t border-white/5">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x: smoothX }} className="whitespace-nowrap flex space-x-20 items-center opacity-5">
            <span className="text-[8rem] md:text-[15rem] font-serif font-black uppercase text-white">Précision</span>
            <span className="text-[8rem] md:text-[15rem] font-serif font-black uppercase text-amber-500">Design</span>
            <span className="text-[8rem] md:text-[15rem] font-serif font-black uppercase text-white">Innovation</span>
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center px-6 pt-24 md:pt-0">
            <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center text-white">
               <motion.div whileInView={{ x: [-50, 0], opacity: [0, 1] }} className="space-y-6 md:space-y-8 text-center md:text-left">
                  <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">L'Art de <br/><span className="text-amber-500 italic">Connecter.</span></h2>
                  <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                    Nous créons des environnements où l'énergie invisible devient une expérience sensible.
                  </p>
               </motion.div>
               <motion.div style={{ rotate }} className="relative w-40 h-40 md:w-full md:aspect-square mx-auto glass rounded-[3rem] md:rounded-[4rem] border-amber-500/10 flex items-center justify-center p-8 md:p-12 overflow-hidden shadow-2xl">
                  <Target className="w-16 h-16 md:w-32 md:h-32 text-amber-500 opacity-50" />
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GALERIE MATÉRIAUX */}
      <section className="py-40 px-6 bg-black z-30 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800", title: "Laiton Massif" },
              { img: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=800", title: "Fibre Optique" },
              { img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=800", title: "LED Architectural" }
            ].map((item, idx) => (
              <motion.div key={idx} whileHover={{ y: -20 }} className="relative h-[450px] md:h-[600px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden group border border-white/5">
                <img src={item.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60" alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LA PORTE - CONNEXION ÉLECTRIQUE */}
      <section ref={connectRef} className="relative h-[800vh] z-40">
        <motion.div 
          style={{ backgroundColor: bgTransition }}
          className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Flash Impact au contact */}
          <motion.div style={{ opacity: flashOpacity }} className="absolute inset-0 bg-white z-[100] pointer-events-none" />
          
          {/* Fond noir progressif */}
          <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-black z-10 pointer-events-none" />

          {/* ZONE CENTRALE D'INTERACTION */}
          <div className="relative w-full h-screen flex items-center justify-center z-20">
            
            {/* GROUPE CÂBLES & ARC */}
            <motion.div 
              style={{ opacity: cablesOpacity, scale: cablesScale, display: cablesDisplay }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
                <div className="relative w-full h-20 flex items-center justify-center scale-[0.9] md:scale-[1.3]">
                    
                    {/* Câble Gauche */}
                    <motion.div 
                        style={{ x: cableLeftX, y: vibrateSpring }}
                        className="absolute right-1/2 w-[55%] h-32 flex items-center justify-end"
                    >
                        <div className="h-2 w-full bg-gradient-to-r from-transparent via-gray-900 to-amber-900 rounded-full" />
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-amber-900 to-amber-600 rounded-l-[1rem] border-y border-amber-300/20 relative shadow-[0_0_40px_rgba(0,0,0,1)]">
                            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-6 h-10 bg-amber-50 rounded-sm" />
                        </div>
                    </motion.div>

                    {/* Câble Droit */}
                    <motion.div 
                        style={{ x: cableRightX, y: vibrateSpring }}
                        className="absolute left-1/2 w-[55%] h-32 flex items-center justify-start"
                    >
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-l from-amber-900 to-amber-600 rounded-r-[1rem] border-y border-amber-300/20 relative shadow-[0_0_40px_rgba(0,0,0,1)]">
                            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-6 h-10 bg-amber-50 rounded-sm shadow-[0_0_50px_#fcd34d]" />
                        </div>
                        <div className="h-2 w-full bg-gradient-to-l from-transparent via-gray-900 to-amber-900 rounded-full" />
                    </motion.div>

                    {/* ARC ÉLECTRIQUE */}
                    <motion.div 
                        style={{ opacity: arcOpacity }}
                        className="absolute z-50 flex items-center justify-center w-full"
                    >
                        <motion.div 
                            style={{ scale: sparkScale }}
                            className="w-[2px] h-24 bg-blue-100 shadow-[0_0_80px_#60a5fa] animate-pulse"
                        />
                        <Zap className="absolute w-32 h-32 text-blue-300 blur-[3px] animate-bounce opacity-50" />
                        <Zap className="absolute w-20 h-20 text-white drop-shadow-[0_0_20px_#60a5fa]" />
                        <div className="absolute w-[400px] h-[400px] bg-blue-600 blur-[200px] opacity-30 rounded-full" />
                    </motion.div>
                </div>
            </motion.div>

            {/* LA SIGNATURE */}
            <motion.div 
                style={{ opacity: textOpacity, scale: textScale, filter: textBlur, display: textDisplay }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-30 pointer-events-none"
            >
                <motion.span 
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="text-amber-500 text-[10px] md:text-[11px] font-black tracking-[1.5em] md:tracking-[2em] uppercase mb-12 md:mb-16"
                >
                  Haute Couture Électrique
                </motion.span>
                <h2 className="text-4xl md:text-[120px] font-serif italic text-white font-bold leading-none tracking-tighter">
                    L'énergie devient <br />
                    <span className="text-amber-500 drop-shadow-[0_0_70px_rgba(245,158,11,0.6)]">émotion.</span>
                </h2>
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "200px" }}
                    transition={{ delay: 0.1, duration: 3 }}
                    className="h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mt-16 md:mt-24"
                />
            </motion.div>
          </div>

          <motion.div 
             style={{ opacity: useTransform(connectProgress, [0.97, 1], [0, 1]) }}
             className="absolute bottom-12 flex flex-col items-center gap-6"
          >
            <span className="text-[10px] font-black tracking-[0.7em] text-amber-500 uppercase">Explorer l'excellence</span>
            <motion.div 
              animate={{ height: [15, 60, 15] }} 
              transition={{ duration: 3, repeat: Infinity }}
              className="w-[1px] bg-amber-500" 
            />
          </motion.div>
        </motion.div>
      </section>

      {/* 5. CTA FINAL MAGISTRAL */}
      <section className="py-40 md:py-60 px-6 relative overflow-hidden bg-black z-50">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(217,119,6,0.3),transparent_70%)]" />
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10 text-white">
           <motion.h2 
             whileInView={{ y: [40, 0], opacity: [0, 1] }}
             className="text-5xl md:text-[150px] font-serif font-bold mb-16 md:mb-24 leading-[0.8] tracking-tighter"
           >
             Créez votre <br/><span className="text-amber-500 italic">Signature.</span>
           </motion.h2>
           <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-12">
              <Link to="/contact" className="px-12 md:px-28 py-8 md:py-10 bg-amber-600 text-white rounded-[2rem] text-[12px] md:text-[13px] font-black tracking-[0.5em] uppercase hover:bg-amber-500 transition-all glow-amber shadow-2xl md:scale-110">
                Demander une Étude Privée
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

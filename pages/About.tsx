
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, History, Compass, Feather, Wind } from 'lucide-react';

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-44 pb-20 px-6 max-w-7xl mx-auto"
    >
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end mb-40">
        <div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-10 leading-none">Notre <br/><span className="text-amber-500 italic text-glow-amber">Héritage.</span></h1>
          <p className="text-2xl text-gray-400 font-light leading-relaxed">
            Depuis trois décennies, la famille Martin cultive l'excellence dans l'art de transporter l'énergie. Ce qui n'était qu'un petit atelier parisien est devenu le cabinet de référence pour le luxe résidentiel.
          </p>
        </div>
        <div className="relative h-[500px] rounded-[4rem] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Workshop" />
        </div>
      </section>

      {/* Vision Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40">
        {[
          { icon: Compass, title: "Rigueur", text: "Chaque câble est tracé avec la précision d'un orfèvre. Pas d'improvisation." },
          { icon: Feather, title: "Légèreté", text: "La technologie doit être simple. Si vous avez besoin d'un manuel, nous avons échoué." },
          { icon: Wind, title: "Fluidité", text: "Nous créons des ambiances qui évoluent naturellement avec votre journée." }
        ].map((v, i) => (
          <div key={i} className="glass p-12 rounded-[3rem] border-white/5 space-y-6">
            <v.icon className="w-12 h-12 text-amber-500" />
            <h3 className="text-2xl font-serif font-bold">{v.title}</h3>
            <p className="text-gray-400 leading-relaxed">{v.text}</p>
          </div>
        ))}
      </div>

      {/* Timeline Section */}
      <section className="mb-40">
        <h2 className="text-4xl font-serif font-bold mb-20 text-center uppercase tracking-widest">Trente Ans de Maîtrise</h2>
        <div className="space-y-12">
          {[
            { year: "1994", event: "Fondation du cabinet à Paris 8ème.", desc: "Focus initial sur la rénovation d'hôtels particuliers." },
            { year: "2005", event: "Pionnier de la Domotique KNX en France.", desc: "Première villa connectée intégrale sur la Côte d'Azur." },
            { year: "2018", event: "Ouverture du Lab Photométrique.", desc: "Développement de nos propres profilés LED invisibles." },
            { year: "2024", event: "Standard Excellence Martin Lux.", desc: "Expansion internationale (Suisse, Dubaï, Londres)." }
          ].map((item, i) => (
            <div key={i} className="flex gap-12 items-start group">
              <div className="text-3xl font-serif font-bold text-amber-500 w-24 group-hover:scale-110 transition-transform">{item.year}</div>
              <div className="flex-1 pb-12 border-b border-white/5">
                <h4 className="text-2xl font-bold mb-2 uppercase tracking-wide">{item.event}</h4>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expert Quote */}
      <section className="text-center max-w-4xl mx-auto py-20 border-y border-amber-500/10 italic">
        <p className="text-3xl font-serif text-gray-300 leading-relaxed">
          "La lumière ne sert pas seulement à voir, elle sert à ressentir. Notre métier est de sculpter l'obscurité pour que chaque pièce raconte une histoire."
        </p>
        <p className="mt-8 text-amber-500 font-black tracking-widest uppercase text-xs">— Marc Martin, Directeur Créatif</p>
      </section>
    </motion.div>
  );
};

export default About;

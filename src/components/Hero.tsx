import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Goedemorgen');
    else if (hour < 18) setGreeting('Goedemiddag');
    else setGreeting('Goedenavond');
  }, []);

  return (
    <section className="relative h-[100vh] flex flex-col justify-end overflow-hidden pb-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/cozy-eatery/1080/1920"
          alt="Eethuisje Duivenvoorde Interieur"
          className="w-full h-full object-cover animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/40 to-transparent" />
      </div>

      <div className="relative z-10 px-6 w-full max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="uppercase tracking-[0.3em] text-[10px] mb-4 block font-bold text-brand-cream/60">
            {greeting} • Wassenaar
          </span>
          <h1 className="text-5xl md:text-7xl mb-6 leading-[1.1] text-brand-cream font-serif">
            Eethuisje <br />
            <span className="italic">Duivenvoorde</span>
          </h1>
          <p className="text-lg font-sans text-brand-cream/80 mb-10 leading-relaxed">
            Versgebakken geluk in een modern jasje. Ontdek onze ambachtelijke snacks en sfeervolle ambiance.
          </p>
          
          <div className="grid grid-cols-1 gap-4">
            <a 
              href="#menu" 
              className="bg-brand-olive text-white h-16 flex items-center justify-center rounded-2xl font-semibold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl tap-highlight-none"
            >
              Bekijk het Menu
            </a>
            <button 
              onClick={() => document.getElementById('chat-toggle')?.click()}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white h-16 flex items-center justify-center rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all tap-highlight-none"
            >
              Direct Bestellen
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}

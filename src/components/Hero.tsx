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
          src="https://picsum.photos/seed/fries-snack/1080/1920"
          alt="Verse patat en snacks"
          className="w-full h-full object-cover animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/90 to-brand-bg/20" />
      </div>

      <div className="relative z-10 px-6 w-full max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="uppercase tracking-[0.2em] text-[12px] mb-3 block font-bold text-brand-red">
            {greeting} • WASSENAAR
          </span>
          <h1 className="text-6xl md:text-7xl mb-4 leading-[0.9] text-brand-ink font-black">
            Eethuisje <br />
            <span className="text-brand-red">Duivenvoorde</span>
          </h1>
          <p className="text-lg font-medium text-brand-ink/70 mb-10 leading-snug max-w-xs">
            Gewoon een simpel eethuisje voor de beste patat en snacks. Geen poespas, wel lekker snel.
          </p>
          
          <div className="grid grid-cols-1 gap-4">
            <a 
              href="#menu" 
              className="btn-friendly bg-brand-red text-white"
            >
              Bekijk de Kaart
            </a>
            <button 
              onClick={() => document.getElementById('chat-toggle')?.click()}
              className="btn-friendly bg-brand-yellow text-brand-ink"
            >
              Stel een Vraag
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

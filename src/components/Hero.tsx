import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import { ESTATE_INFO } from '../constants';

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/cozy-eatery/1920/1080"
          alt="Eethuisje Duivenvoorde Interieur"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-ink/50" />
      </div>

      <div className="relative z-10 text-center text-brand-cream px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="uppercase tracking-[0.3em] text-sm mb-4 block font-medium opacity-80">Wassenaar • Vers & Gastvrij</span>
          <h1 className="text-6xl md:text-8xl mb-6 leading-tight">Eethuisje Duivenvoorde</h1>
          <p className="text-xl md:text-2xl font-serif italic mb-10 max-w-2xl mx-auto leading-relaxed">
            De gezelligste plek voor een heerlijk frietje, ambachtelijke snacks en een warme glimlach.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="#menu" 
              className="bg-brand-olive text-white px-8 py-4 rounded-full font-serif text-lg hover:bg-brand-olive/90 transition-colors shadow-xl"
            >
              Bekijk ons Menu
            </a>
            <button 
              onClick={() => document.getElementById('chat-toggle')?.click()}
              className="bg-white text-brand-ink px-8 py-4 rounded-full font-serif text-lg hover:bg-brand-cream transition-colors shadow-lg"
            >
              Bestel of Stel een Vraag
            </button>
          </div>
        </motion.div>
      </div>

      {/* Quick Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20 py-6">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-brand-cream text-sm">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <MapPin size={18} className="text-brand-cream/60" />
            <span>{ESTATE_INFO.location}</span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <Clock size={18} className="text-brand-cream/60" />
            <span>Vandaag open: 16:00 - 20:00</span>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-end">
            <Phone size={18} className="text-brand-cream/60" />
            <span>{ESTATE_INFO.phone}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

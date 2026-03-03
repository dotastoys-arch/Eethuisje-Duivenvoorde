import React, { useState } from 'react';
import Hero from './components/Hero';
import Menu from './components/Menu';
import ChatHost from './components/ChatHost';
import LiveActivity from './components/LiveActivity';
import { ESTATE_INFO } from './constants';
import { motion } from 'framer-motion';
import { Home, Utensils, Info, MessageCircle } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <LiveActivity />
      
      {/* Desktop Header */}
      <header className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-red/10 px-12 lg:px-24 h-20 items-center justify-between">
        <div className="font-black text-2xl text-brand-ink">
          Eethuisje <span className="text-brand-red">Duivenvoorde</span>
        </div>
        <nav className="flex items-center gap-8 font-bold text-brand-ink/70">
          <a href="#" className="hover:text-brand-red transition-colors">Home</a>
          <a href="#menu" className="hover:text-brand-red transition-colors">Kaart</a>
          <button onClick={() => document.getElementById('chat-toggle')?.click()} className="hover:text-brand-red transition-colors">Chat</button>
        </nav>
      </header>

      <main className="w-full">
        <Hero />
        
        {/* About Section - Friendly & Inviting */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white text-brand-ink relative z-20 rounded-t-[3rem] md:rounded-t-[5rem] -mt-10 md:-mt-20 shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-24 items-center"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[4px] bg-brand-red rounded-full"></div>
                <h2 className="text-3xl md:text-5xl font-black">Echt lekker.</h2>
              </div>
              
              <div className="space-y-6 text-brand-ink/70 font-medium leading-relaxed">
                <p className="text-lg md:text-xl">
                  Bij Eethuisje Duivenvoorde houden we het simpel en goed. Elke dag bakken we de lekkerste verse patat en hebben we een ruim assortiment aan snacks voor de hele familie.
                </p>
                <p className="text-sm md:text-base">
                  Kom gezellig langs in ons paviljoen of haal je bestelling snel af. We staan altijd voor je klaar met een goeie hap en een glimlach.
                </p>
              </div>
            </div>
              
            <div className="relative aspect-video md:aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-brand-bg shadow-inner order-first md:order-last">
              <img 
                src="https://picsum.photos/seed/fries/1200/1200" 
                alt="Onze Verse Patat" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 bg-brand-yellow text-brand-ink px-6 py-3 rounded-xl font-black text-sm md:text-base shadow-lg">
                ELKE DAG VERS
              </div>
            </div>
          </motion.div>
        </section>

        <Menu />

        {/* Reviews Section - Friendly Cards */}
        <section className="py-20 md:py-32 bg-brand-bg px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-10 md:mb-16">Wat anderen <br className="md:hidden" /> <span className="text-brand-red">vinden</span></h2>
            <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-8 pb-4 snap-x no-scrollbar">
              {[
                { text: "Erg goede patat en vriendelijke mensen.", author: "Viavier" },
                { text: "Tasty food. Yummy milkshakes.", author: "Koen Zomers" },
                { text: "De hamburger was super lekker!", author: "Lana Lana" }
              ].map((rev, i) => (
                <div 
                  key={i}
                  className="min-w-[280px] p-8 md:p-10 bg-white rounded-[2rem] snap-center shadow-lg border border-brand-red/5 flex flex-col justify-between"
                >
                  <p className="text-lg md:text-xl font-bold mb-8 leading-tight text-brand-ink">"{rev.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-brand-yellow rounded-full"></div>
                    <p className="text-xs md:text-sm font-black uppercase tracking-widest text-brand-ink/40">— {rev.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact - Clean & Clear */}
        <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-10 md:mb-16">
              <div className="w-10 h-[4px] bg-brand-red rounded-full"></div>
              <h2 className="text-3xl md:text-5xl font-black">Contact & Tijden</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
              <div className="bg-brand-bg p-8 md:p-12 rounded-[2.5rem] border border-brand-red/5">
                <h3 className="text-xs md:text-sm font-black uppercase tracking-widest text-brand-red mb-8">OPENINGSTIJDEN</h3>
                <div className="space-y-4 text-lg md:text-xl font-bold">
                  {Object.entries(ESTATE_INFO.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between border-b border-brand-red/5 pb-3">
                      <span className="capitalize text-brand-ink/40">{day}</span>
                      <span className="text-brand-ink">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center gap-6">
                <a href={`tel:${ESTATE_INFO.phone}`} className="btn-friendly bg-brand-red text-white flex items-center justify-center gap-4 px-8 py-6 text-lg md:text-xl">
                  <Phone size={28} />
                  <span>BEL ONS DIRECT</span>
                </a>
                <div className="btn-friendly bg-brand-bg text-brand-ink flex items-center justify-center gap-4 px-8 py-6 text-lg md:text-xl border border-brand-red/5">
                  <MapPin size={28} />
                  <span>ROUTE PLANNEN</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 2026 Mobile-Only Navigation Bar */}
      <nav className="mobile-nav">
        <button onClick={() => setActiveTab('home')} className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}>
          <Home size={20} />
          <span>Home</span>
        </button>
        <button onClick={() => setActiveTab('menu')} className={`nav-item ${activeTab === 'menu' ? 'active' : ''}`}>
          <Utensils size={20} />
          <span>Kaart</span>
        </button>
        <button onClick={() => document.getElementById('chat-toggle')?.click()} className="nav-item">
          <MessageCircle size={20} />
          <span>Chat</span>
        </button>
        <button onClick={() => setActiveTab('info')} className={`nav-item ${activeTab === 'info' ? 'active' : ''}`}>
          <Info size={20} />
          <span>Info</span>
        </button>
      </nav>

      <ChatHost />
    </div>
  );
}

// Helper icons
const MapPin = ({ size }: { size: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
const Phone = ({ size }: { size: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;

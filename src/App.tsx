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
    <div className="min-h-screen pb-20">
      <LiveActivity />
      
      <main className="max-w-lg mx-auto">
        <Hero />
        
        {/* About Section - 2026 Style */}
        <section className="py-16 px-6 bg-white rounded-t-[2.5rem] -mt-10 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[2px] bg-brand-olive"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-olive">Onze Passie</span>
            </div>
            <h2 className="text-4xl mb-8 leading-tight font-serif">Versgebakken <br /> <span className="italic">Kwaliteit</span></h2>
            
            <div className="space-y-6 text-brand-ink/70 leading-relaxed text-sm">
              <p>
                Bij {ESTATE_INFO.name} draait alles om de beleving. In ons moderne glazen paviljoen geniet u van de beste snacks van Wassenaar, bereid met passie en de beste ingrediënten.
              </p>
              
              {/* Video Testimonial Placeholder (Social Proof 2.0) */}
              <div className="relative aspect-video rounded-3xl overflow-hidden bg-brand-olive/10 group cursor-pointer">
                <img 
                  src="https://picsum.photos/seed/happy-guest/800/450" 
                  alt="Video Testimonial" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl">
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-brand-olive border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-[10px] font-bold text-white uppercase tracking-widest bg-brand-ink/40 px-2 py-1 rounded backdrop-blur-sm">
                  Live Gast-ervaring
                </div>
              </div>

              <p>
                Binnen voelt u direct de warmte van ons houten interieur. Het is de perfecte plek voor een snelle hap of een gezellig moment met vrienden.
              </p>
            </div>
          </motion.div>
        </section>

        <Menu />

        {/* Reviews Section - Mobile Optimized */}
        <section className="py-16 bg-brand-olive text-brand-cream">
          <div className="px-6">
            <h2 className="text-3xl mb-8 font-serif italic">Wat gasten zeggen</h2>
            <div className="flex overflow-x-auto gap-4 pb-8 snap-x no-scrollbar">
              {[
                { text: "Gezellige cafetaria, erg goede patat.", author: "Viavier" },
                { text: "Tasty food. Yummy milkshakes. Friendly owners.", author: "Koen Zomers" },
                { text: "De hamburger was super lekker!", author: "Lana Lana" }
              ].map((rev, i) => (
                <div 
                  key={i}
                  className="min-w-[260px] p-6 rounded-2xl bg-white/10 backdrop-blur-sm snap-center border border-white/10"
                >
                  <p className="italic mb-4 text-sm leading-relaxed">"{rev.text}"</p>
                  <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest">— {rev.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact - Clean Utility */}
        <section className="py-16 px-6 bg-brand-cream">
          <h2 className="text-3xl mb-10 font-serif">Bezoek ons</h2>
          <div className="space-y-8">
            <div className="glass-panel p-6 rounded-3xl">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-olive mb-4">Openingstijden</h3>
              <div className="space-y-2 text-xs">
                {Object.entries(ESTATE_INFO.hours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between border-b border-brand-olive/5 pb-1">
                    <span className="capitalize opacity-60">{day}</span>
                    <span className="font-semibold">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <a href={`tel:${ESTATE_INFO.phone}`} className="flex items-center gap-4 p-4 glass-panel rounded-2xl tap-highlight-none">
                <div className="w-10 h-10 bg-brand-olive text-white rounded-full flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Telefoon</p>
                  <p className="font-serif text-lg">{ESTATE_INFO.phone}</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 glass-panel rounded-2xl">
                <div className="w-10 h-10 bg-brand-olive text-white rounded-full flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Locatie</p>
                  <p className="text-sm font-medium">{ESTATE_INFO.location}</p>
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

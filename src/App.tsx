import React from 'react';
import Hero from './components/Hero';
import Menu from './components/Menu';
import ChatHost from './components/ChatHost';
import { ESTATE_INFO } from './constants';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-olive/20">
      <Hero />
      
      <main>
        {/* About Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://picsum.photos/seed/eatery-interior/1000/750" 
                alt="Eethuisje Duivenvoorde Interieur" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-8 left-8 right-8 p-6 glass-panel rounded-2xl">
                <h4 className="font-serif text-xl mb-2">Gezelligheid Binnen</h4>
                <p className="text-sm opacity-80 italic">Een warme sfeer met houten accenten en sfeervolle verlichting.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight">Echt lekker eten in een fijne sfeer</h2>
              <div className="space-y-6 text-brand-ink/80 leading-relaxed">
                <p>
                  Welkom bij {ESTATE_INFO.name}. Ons moderne paviljoen is dé plek in Wassenaar voor wie houdt van kwaliteit en een persoonlijke aanpak. 
                  Of u nu komt voor onze beroemde verse patat, een malse kipsaté of een heerlijke milkshake, wij zorgen dat het u aan niets ontbreekt.
                </p>
                <p>
                  Binnen is het zeer sfeervol ingericht met veel hout en warme verlichting, waardoor u zich direct thuis voelt. 
                  Onze passie voor het vak proeft u terug in elk gerecht. We werken met verse producten en dat verschil proeft u!
                </p>
                <div className="pt-4 p-6 bg-brand-olive/5 rounded-2xl border border-brand-olive/10">
                  <h4 className="font-serif text-xl mb-2 italic">Passie voor Kwaliteit</h4>
                  <p className="text-sm">
                    Van onze glutenvrije snacks tot onze ambachtelijke burgers; we staan voor wat we serveren. 
                    Kom gezellig langs en ervaar het zelf!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Menu />

        {/* Reviews Section */}
        <section className="py-24 bg-brand-olive text-brand-cream overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <h2 className="text-4xl md:text-6xl mb-4">Wat onze gasten zeggen</h2>
                <div className="flex items-center gap-2 text-yellow-400">
                  {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                  <span className="text-brand-cream ml-2 font-serif italic">4,4 sterren (207 reviews)</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { text: "Gezellige cafetaria, erg goede patat en heel vriendelijke mensen.", author: "Viavier" },
                { text: "Tasty food. Yummy milkshakes. Super friendly owners with passion for their business.", author: "Koen Zomers" },
                { text: "De hamburger was super lekker en de spicy chicken echt een aanrader!", author: "Lana Lana" }
              ].map((rev, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 border border-brand-cream/20 rounded-3xl bg-white/5 backdrop-blur-sm"
                >
                  <p className="italic mb-6 text-lg leading-relaxed">"{rev.text}"</p>
                  <p className="text-sm font-medium opacity-60">— {rev.author}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Hours */}
        <section className="py-24 px-6 bg-brand-cream">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl mb-12">Openingstijden & Contact</h2>
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div className="glass-panel p-8 rounded-3xl">
                <h3 className="text-2xl font-serif mb-6 italic">Wanneer we u verwelkomen</h3>
                <div className="space-y-3 text-sm">
                  {Object.entries(ESTATE_INFO.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between border-b border-brand-olive/10 pb-2">
                      <span className="capitalize font-medium">{day}</span>
                      <span className="opacity-70">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-8">
                <div>
                  <h4 className="font-serif text-xl mb-2 italic">Adres</h4>
                  <p className="opacity-80">{ESTATE_INFO.location}</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2 italic">Telefoon</h4>
                  <p className="text-2xl font-serif">{ESTATE_INFO.phone}</p>
                </div>
                <p className="text-sm italic opacity-60">
                  Wilt u reserveren voor een High Tea of een grote groep? 
                  Bel ons gerust of vraag het aan onze digitale gastheer.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-brand-olive/10 text-center text-sm opacity-60">
        <p>© {new Date().getFullYear()} Eethuisje Duivenvoorde • Wassenaar</p>
      </footer>

      <ChatHost />
    </div>
  );
}

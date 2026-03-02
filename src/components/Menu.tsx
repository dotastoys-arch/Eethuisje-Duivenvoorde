import React from 'react';
import { MENU_DATA } from '../constants';
import { motion } from 'framer-motion';

export default function Menu() {
  return (
    <section id="menu" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl mb-4">Onze Menukaart</h2>
        <p className="text-brand-olive italic font-serif text-lg">Vers van het land, bereid met liefde</p>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-serif mb-6 border-b-2 border-brand-olive pb-2">Verse Patat & Sauzen</h3>
          <div className="space-y-1">
            {MENU_DATA.patat.map((item, i) => (
              <div key={i} className="menu-item-row group">
                <div>
                  <h4 className="font-medium group-hover:text-brand-olive transition-colors">{item.name}</h4>
                  <p className="text-xs text-brand-ink/60 italic">{item.description}</p>
                </div>
                <span className="font-serif ml-4 whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-serif mt-12 mb-6 border-b-2 border-brand-olive pb-2">Onze Snacks</h3>
          <div className="space-y-1">
            {MENU_DATA.snacks.map((item, i) => (
              <div key={i} className="menu-item-row group">
                <div>
                  <h4 className="font-medium group-hover:text-brand-olive transition-colors">{item.name}</h4>
                  <p className="text-xs text-brand-ink/60 italic">{item.description}</p>
                </div>
                <span className="font-serif ml-4 whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-serif mb-6 border-b-2 border-brand-olive pb-2">Specials & Schotels</h3>
          <div className="space-y-1">
            {MENU_DATA.specials.map((item, i) => (
              <div key={i} className="menu-item-row group">
                <div>
                  <h4 className="font-medium group-hover:text-brand-olive transition-colors">{item.name}</h4>
                  <p className="text-xs text-brand-ink/60 italic">{item.description}</p>
                </div>
                <span className="font-serif ml-4 whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-serif mt-12 mb-6 border-b-2 border-brand-olive pb-2">IJs & Milkshakes</h3>
          <div className="space-y-1">
            {MENU_DATA.ijs.map((item, i) => (
              <div key={i} className="menu-item-row group">
                <div>
                  <h4 className="font-medium group-hover:text-brand-olive transition-colors">{item.name}</h4>
                  <p className="text-xs text-brand-ink/60 italic">{item.description}</p>
                </div>
                <span className="font-serif ml-4 whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-brand-olive/5 rounded-2xl border border-brand-olive/10 italic text-sm text-center">
            <p>"Gezellige cafetaria, erg goede patat en heel vriendelijke mensen."</p>
            <p className="mt-2 text-xs opacity-60">— Local Guide Review</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

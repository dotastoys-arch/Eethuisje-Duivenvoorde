import React from 'react';
import { MENU_DATA } from '../constants';
import { motion } from 'framer-motion';

export default function Menu() {
  return (
    <section id="menu" className="py-20 md:py-32 px-6 md:px-12 lg:px-24 w-full bg-white text-brand-ink">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10 md:mb-16">
          <div className="w-10 h-[4px] bg-brand-red rounded-full"></div>
          <h2 className="text-3xl md:text-5xl font-black">Onze Kaart</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xs md:text-sm font-black uppercase tracking-[0.2em] mb-6 md:mb-8 text-brand-red">PATAT & SAUZEN</h3>
            <div className="space-y-4">
              {MENU_DATA.patat.map((item, i) => (
                <div key={i} className="flex justify-between items-center p-5 md:p-6 bg-brand-bg rounded-2xl md:rounded-3xl border border-brand-red/5 hover:border-brand-red/20 transition-all">
                  <div className="pr-4">
                    <h4 className="font-black text-lg md:text-xl leading-tight">{item.name}</h4>
                    {item.description && <p className="text-[10px] md:text-xs font-bold uppercase opacity-40 mt-1 md:mt-2">{item.description}</p>}
                  </div>
                  <span className="font-black text-xl md:text-2xl text-brand-red italic">{item.price}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xs md:text-sm font-black uppercase tracking-[0.2em] mt-12 md:mt-16 mb-6 md:mb-8 text-brand-red">LEKKERE SNACKS</h3>
            <div className="space-y-4">
              {MENU_DATA.snacks.map((item, i) => (
                <div key={i} className="flex justify-between items-center p-5 md:p-6 bg-brand-bg rounded-2xl md:rounded-3xl border border-brand-red/5 hover:border-brand-red/20 transition-all">
                  <div className="pr-4">
                    <h4 className="font-black text-lg md:text-xl leading-tight">{item.name}</h4>
                    {item.description && <p className="text-[10px] md:text-xs font-bold uppercase opacity-40 mt-1 md:mt-2">{item.description}</p>}
                  </div>
                  <span className="font-black text-xl md:text-2xl text-brand-red italic">{item.price}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xs md:text-sm font-black uppercase tracking-[0.2em] mb-6 md:mb-8 text-brand-red">BROODJES & SCHOTELS</h3>
            <div className="space-y-4">
              {MENU_DATA.specials.map((item, i) => (
                <div key={i} className="flex justify-between items-center p-5 md:p-6 bg-brand-bg rounded-2xl md:rounded-3xl border border-brand-red/5 hover:border-brand-red/20 transition-all">
                  <div className="pr-4">
                    <h4 className="font-black text-lg md:text-xl leading-tight">{item.name}</h4>
                    {item.description && <p className="text-[10px] md:text-xs font-bold uppercase opacity-40 mt-1 md:mt-2">{item.description}</p>}
                  </div>
                  <span className="font-black text-xl md:text-2xl text-brand-red italic">{item.price}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xs md:text-sm font-black uppercase tracking-[0.2em] mt-12 md:mt-16 mb-6 md:mb-8 text-brand-red">IJS & SHAKES</h3>
            <div className="space-y-4">
              {MENU_DATA.ijs.map((item, i) => (
                <div key={i} className="flex justify-between items-center p-5 md:p-6 bg-brand-bg rounded-2xl md:rounded-3xl border border-brand-red/5 hover:border-brand-red/20 transition-all">
                  <div className="pr-4">
                    <h4 className="font-black text-lg md:text-xl leading-tight">{item.name}</h4>
                    {item.description && <p className="text-[10px] md:text-xs font-bold uppercase opacity-40 mt-1 md:mt-2">{item.description}</p>}
                  </div>
                  <span className="font-black text-xl md:text-2xl text-brand-red italic">{item.price}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

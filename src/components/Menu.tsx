import React from 'react';
import { MENU_DATA } from '../constants';
import { motion } from 'framer-motion';

export default function Menu() {
  return (
    <section id="menu" className="py-20 px-6 max-w-lg mx-auto bg-white text-brand-ink">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-[4px] bg-brand-red rounded-full"></div>
        <h2 className="text-3xl font-black">Onze Kaart</h2>
      </div>

      <div className="grid grid-cols-1 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-brand-red">PATAT & SAUZEN</h3>
          <div className="space-y-4">
            {MENU_DATA.patat.map((item, i) => (
              <div key={i} className="flex justify-between items-center p-5 bg-brand-bg rounded-2xl border border-brand-red/5 hover:border-brand-red/20 transition-all">
                <div className="pr-4">
                  <h4 className="font-black text-lg leading-tight">{item.name}</h4>
                  {item.description && <p className="text-[10px] font-bold uppercase opacity-40 mt-1">{item.description}</p>}
                </div>
                <span className="font-black text-xl text-brand-red italic">{item.price}</span>
              </div>
            ))}
          </div>

          <h3 className="text-xs font-black uppercase tracking-[0.2em] mt-12 mb-6 text-brand-red">LEKKERE SNACKS</h3>
          <div className="space-y-4">
            {MENU_DATA.snacks.map((item, i) => (
              <div key={i} className="flex justify-between items-center p-5 bg-brand-bg rounded-2xl border border-brand-red/5 hover:border-brand-red/20 transition-all">
                <div className="pr-4">
                  <h4 className="font-black text-lg leading-tight">{item.name}</h4>
                  {item.description && <p className="text-[10px] font-bold uppercase opacity-40 mt-1">{item.description}</p>}
                </div>
                <span className="font-black text-xl text-brand-red italic">{item.price}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-brand-red">BROODJES & SCHOTELS</h3>
          <div className="space-y-4">
            {MENU_DATA.specials.map((item, i) => (
              <div key={i} className="flex justify-between items-center p-5 bg-brand-bg rounded-2xl border border-brand-red/5 hover:border-brand-red/20 transition-all">
                <div className="pr-4">
                  <h4 className="font-black text-lg leading-tight">{item.name}</h4>
                  {item.description && <p className="text-[10px] font-bold uppercase opacity-40 mt-1">{item.description}</p>}
                </div>
                <span className="font-black text-xl text-brand-red italic">{item.price}</span>
              </div>
            ))}
          </div>

          <h3 className="text-xs font-black uppercase tracking-[0.2em] mt-12 mb-6 text-brand-red">IJS & SHAKES</h3>
          <div className="space-y-4">
            {MENU_DATA.ijs.map((item, i) => (
              <div key={i} className="flex justify-between items-center p-5 bg-brand-bg rounded-2xl border border-brand-red/5 hover:border-brand-red/20 transition-all">
                <div className="pr-4">
                  <h4 className="font-black text-lg leading-tight">{item.name}</h4>
                  {item.description && <p className="text-[10px] font-bold uppercase opacity-40 mt-1">{item.description}</p>}
                </div>
                <span className="font-black text-xl text-brand-red italic">{item.price}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

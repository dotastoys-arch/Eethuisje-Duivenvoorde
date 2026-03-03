import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Flame, ShoppingBag } from 'lucide-react';

export default function LiveActivity() {
  const [activity, setActivity] = useState<{ icon: React.ReactNode; text: string } | null>(null);

  const activities = [
    { icon: <Users size={14} />, text: "4 mensen bekijken nu de menukaart" },
    { icon: <Flame size={14} />, text: "De Truffelburger is populair vandaag!" },
    { icon: <ShoppingBag size={14} />, text: "Laatste bestelling geplaatst 2 min geleden" },
    { icon: <Users size={14} />, text: "Gezellige drukte in het eethuisje" },
  ];

  useEffect(() => {
    const showRandomActivity = () => {
      const random = activities[Math.floor(Math.random() * activities.length)];
      setActivity(random);
      setTimeout(() => setActivity(null), 4000);
    };

    const interval = setInterval(showRandomActivity, 12000);
    setTimeout(showRandomActivity, 2000); // Initial show

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-6 md:top-24 left-1/2 -translate-x-1/2 z-50 pointer-events-none w-full px-6 flex justify-center">
      <AnimatePresence>
        {activity && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="bg-brand-ink text-white px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 text-xs font-bold whitespace-nowrap border border-white/10"
          >
            <span className="bg-brand-red p-1 rounded-full text-white">{activity.icon}</span>
            {activity.text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

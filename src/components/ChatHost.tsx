import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, User, Bot, X, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU_DATA, ESTATE_INFO } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function ChatHost() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Goedenavond, welkom bij Eethuisje Duivenvoorde. Ik ben uw digitale gastheer. Hoe kan ik u vandaag van dienst zijn op dit prachtige landgoed?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: messages.concat({ role: 'user', text: userMessage }).map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: `Je bent de digitale gastvrouw/gastheer van Eethuisje Duivenvoorde in Wassenaar. 
          VIBE: Gezellig, knus, modern en zeer gastvrij. We zijn een eethuisje/cafetaria met passie voor kwaliteit.
          TOON: Vriendelijk, enthousiast en toegankelijk. Spreek gasten aan met 'u' (tenzij ze tutoyeren).
          CONTEXT: 
          - Locatie: Een modern glazen paviljoen met een sfeervol houten interieur en gezellige verlichting.
          - Menu: ${JSON.stringify(MENU_DATA)}
          - Info: ${JSON.stringify(ESTATE_INFO)}
          TAKEN: 
          1. Help bij het maken van een keuze uit onze snacks, burgers en schotels.
          2. Vertel over onze specialiteiten zoals de verse patat, raspatat en de ambachtelijke kipsaté.
          3. Beantwoord vragen over openingstijden en afhalen.
          STIJL: Kort, krachtig en uitnodigend. Gebruik woorden als 'gezellig', 'smullen' en 'vers'.`,
        }
      });

      setMessages(prev => [...prev, { role: 'model', text: response.text || "Mijn excuses, ik kon u even niet goed verstaan. Kunt u dat herhalen?" }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Het spijt me, er ging iets mis bij het verwerken van uw vraag. Kan ik u ergens anders mee helpen?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-brand-olive text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50 flex items-center gap-2"
        id="chat-toggle"
      >
        <MessageSquare size={24} />
        <span className="hidden md:inline font-serif italic">Spreek met de gastheer</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[600px] glass-panel rounded-2xl z-50 flex flex-col overflow-hidden border-brand-olive/20"
            id="chat-window"
          >
            <div className="bg-brand-olive text-white p-4 flex justify-between items-center">
              <div>
                <h3 className="font-serif text-xl">Uw Gastheer</h3>
                <p className="text-xs opacity-80 italic text-brand-cream">Eethuisje Duivenvoorde</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded">
                <X size={20} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-cream/30">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl ${
                    m.role === 'user' 
                      ? 'bg-brand-olive text-white rounded-tr-none' 
                      : 'bg-white text-brand-ink border border-brand-olive/10 rounded-tl-none'
                  }`}>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl border border-brand-olive/10 rounded-tl-none">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-brand-olive rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-brand-olive rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-brand-olive rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-brand-olive/10 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Stel uw vraag..."
                  className="flex-1 bg-brand-cream/50 border border-brand-olive/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-olive"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-brand-olive text-white p-2 rounded-full hover:opacity-90 disabled:opacity-50 transition-opacity"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

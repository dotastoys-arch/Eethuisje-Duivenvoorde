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
    { role: 'model', text: "Hoi! Welkom bij Eethuisje Duivenvoorde. Wat mag het zijn vandaag? Een lekker patatje of een goeie snack?" }
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
          systemInstruction: `Je bent de digitale medewerker van Eethuisje Duivenvoorde in Wassenaar. 
          VIBE: Gewoon een gezellig eethuisje/snackbar. Geen poespas, gewoon goed eten.
          TOON: Vriendelijk, direct en behulpzaam. "Hoi, wat kan ik voor je doen?"
          CONTEXT: 
          - Locatie: Een modern glazen paviljoen waar je snel en lekker kunt eten of afhalen.
          - Menu: ${JSON.stringify(MENU_DATA)}
          - Info: ${JSON.stringify(ESTATE_INFO)}
          TAKEN: 
          1. Help klanten bij het kiezen van hun snacks, patat of burgers.
          2. Geef eerlijk advies over wat lekker is.
          3. Beantwoord vragen over openingstijden en afhalen.
          STIJL: Lekker nuchter en vlot. Geen overdreven verfijnde woorden.`,
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
        className="fixed bottom-24 right-6 bg-brand-red text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50 flex items-center gap-2"
        id="chat-toggle"
      >
        <MessageSquare size={24} />
        <span className="hidden md:inline font-bold">Stel een vraag</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[600px] bg-white rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border border-brand-red/10"
            id="chat-window"
          >
            <div className="bg-brand-red text-white p-5 flex justify-between items-center">
              <div>
                <h3 className="font-black text-xl">Eethuisje Chat</h3>
                <p className="text-xs opacity-80 font-medium">Snel antwoord op je vragen</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-bg">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl ${
                    m.role === 'user' 
                      ? 'bg-brand-red text-white rounded-tr-none' 
                      : 'bg-white text-brand-ink border border-brand-red/10 rounded-tl-none shadow-sm'
                  }`}>
                    <p className="text-sm font-medium leading-relaxed whitespace-pre-wrap">{m.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl border border-brand-red/10 rounded-tl-none shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-brand-red rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-brand-red rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 bg-brand-red rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-brand-red/10 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Typ je bericht..."
                  className="flex-1 bg-brand-bg border border-brand-red/10 rounded-full px-5 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-red/20"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-brand-red text-white p-3 rounded-full hover:opacity-90 disabled:opacity-50 transition-opacity flex items-center justify-center"
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

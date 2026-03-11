"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const hafezPoems = [
  {
    english: "It is the fresh Spring; strive to be joyful in heart, for many a flower will bloom again while you are in the clay.",
    meaning: "Embrace the present moment and the renewal of spring. Do not let worries consume you, for life is fleeting, but the beauty of the world endures."
  },
  {
    english: "Glad tidings arrived that Spring has come and the greenery has sprouted. If the allowance arrives, its expense is flowers and wine.",
    meaning: "A time of celebration and abundance is here. Let go of past hardships and allow yourself to enjoy the simple pleasures and beauty around you."
  },
  {
    english: "From the friend's alley comes the breeze of the Nowruz wind. If you seek help from this wind, you will kindle the lamp of the heart.",
    meaning: "Love, friendship, and the fresh beginnings of Nowruz bring true enlightenment. Open your heart to the positive energy surrounding you."
  },
  {
    english: "O Cupbearer, may the coming of the Eid be blessed for you. And may those promises you made not leave your memory.",
    meaning: "A reminder of loyalty and fulfillment of promises during this joyous time. Trust in the unfolding of events and stay true to your commitments."
  },
  {
    english: "What is more pleasant than joy, companionship, the garden, and Spring? Where is the cupbearer? Say, what is the reason for waiting?",
    meaning: "Seize the day (Carpe Diem). The conditions for happiness are perfect right now. Do not delay your joy or wait for a 'better' time."
  },
  {
    english: "Plant the tree of friendship, that to your heart's desire it may bear fruit; uproot the sapling of enmity, that it brings forth countless sorrows.",
    meaning: "Focus on cultivating positive relationships and releasing grudges. The energy you invest in love will multiply, while bitterness only harms yourself."
  },
  {
    english: "Even after all this time, the Sun never says to the Earth, 'You owe me.' Look what happens with a love like that. It lights the whole sky.",
    meaning: "Practice unconditional love and generosity without expecting anything in return. True giving brings light and warmth to your entire life."
  },
  {
    english: "The heart is a thousand-stringed instrument that can only be tuned with Love.",
    meaning: "Your emotional complexities and current struggles can only be resolved through compassion and love, both for yourself and others."
  },
  {
    english: "I am a hole in a flute that the Christ's breath moves through. Listen to this music.",
    meaning: "You are a vessel for inspiration and creativity. Allow yourself to be guided by a higher purpose, and beautiful things will manifest through you."
  },
  {
    english: "Do not surrender your grief so quickly. Let it cut more deeply. Let it ferment and season you as few human or divine ingredients can.",
    meaning: "Acknowledge your current difficulties, but understand they are shaping you into a stronger, wiser person. Growth often requires enduring the storm."
  },
  {
    english: "We are people who need to love, because Love is the soul's life.",
    meaning: "Do not isolate yourself. Your current path requires connection and opening your heart to the transformative power of love and community."
  },
  {
    english: "I wish I could show you when you are lonely or in darkness the astonishing light of your own being.",
    meaning: "You possess immense inner strength and beauty that you currently cannot see. Trust in yourself and your own inherent worth."
  },
  {
    english: "Run from what's comfortable. Forget safety. Live where you fear to live.",
    meaning: "It is time to take a leap of faith. True growth and the fulfillment of your desires lie outside your current comfort zone."
  },
  {
    english: "When all your desires are distilled, you will cast just two votes: to love more, and be happy.",
    meaning: "Simplify your priorities. Strip away the complexities and distractions, and focus on what truly matters: love and joy."
  },
  {
    english: "Ever since happiness heard your name, it has been running through the streets trying to find you.",
    meaning: "Joy is closer than you think. Stop resisting or looking in the wrong places; allow happiness to catch up with you."
  },
  {
    english: "This sky where we live is no place to lose your wings. So love, love, love.",
    meaning: "Do not let the weight of the world diminish your spirit. Maintain your highest ideals and keep your heart open, no matter the circumstances."
  },
  {
    english: "Your heart and my heart are very, very old friends.",
    meaning: "Trust your intuition regarding a new connection or an old relationship. There is a deep, perhaps unspoken, soul-level bond at play here."
  },
  {
    english: "Fear is the cheapest room in the house. I would like to see you living in better conditions.",
    meaning: "You are making decisions based on anxiety rather than potential. Elevate your mindset and choose courage over apprehension."
  },
  {
    english: "A poet is someone who can pour light into a cup, then raise it to nourish your beautiful parched, holy mouth.",
    meaning: "Seek out inspiration and art in your life right now. You are spiritually thirsty, and beauty is the remedy you need."
  },
  {
    english: "I have learned so much from God that I can no longer call myself a Christian, a Hindu, a Muslim, a Buddhist, a Jew. The Truth has shared so much of Itself with me that I can no longer call myself a man, a woman, an angel, or even pure Soul.",
    meaning: "Transcend the labels and limitations you or others have placed upon you. Your true nature is vast, universal, and unbound by narrow definitions."
  },
  {
    english: "It is not the task of love to try to make people 'better'. But rather, to allow them to be what they are.",
    meaning: "Acceptance is key right now. Release the need to control or fix the situation or the people involved, and find peace in what is."
  },
  {
    english: "Awake, my dear. Be kind to your sleeping heart. Take it out into the vast fields of Light and let it breathe.",
    meaning: "It is time for spiritual awakening and renewal. Give yourself permission to rest, heal, and find solace in nature and spaciousness."
  },
  {
    english: "There is a supreme love that wants you.",
    meaning: "You are deeply cherished by the universe. Stop doubting your worth and step into the confidence that you are exactly where you need to be."
  }
];

export function HafezOmen() {
  const [omen, setOmen] = useState<typeof hafezPoems[0] | null>(null);
  const [isRevealing, setIsRevealing] = useState(false);

  const getOmen = () => {
    if (isRevealing) return;
    setIsRevealing(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * hafezPoems.length);
      setOmen(hafezPoems[randomIndex]);
      setIsRevealing(false);
    }, 2000);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-[40px] overflow-hidden bg-[#111111] border border-white/10 shadow-2xl mt-12 mb-24 min-h-[500px] flex flex-col items-center justify-center text-center group">
      
      {/* Ambient mystical background */}
      <div className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-1000 group-hover:opacity-60">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(255,215,0,0.15)_0%,transparent_70%)] blur-[80px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(255,100,100,0.1)_0%,transparent_70%)] blur-[80px]" />
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'}}></div>
      </div>

      <div className="relative z-10 w-full px-6 py-16 md:px-16 md:py-20 flex flex-col items-center max-w-3xl">
        
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium mb-6 tracking-tight text-[#E8E8E8]">
          Faal-e Hafez
        </h2>
        <p className="text-white/50 mb-12 text-sm md:text-base tracking-widest uppercase font-medium max-w-lg leading-relaxed">
          In moments of doubt or beginning, the Persian oracle speaks. Seek your truth.
        </p>

        <AnimatePresence mode="wait">
          {!omen && !isRevealing ? (
            <motion.div
              key="button"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <button
                onClick={getOmen}
                className="relative overflow-hidden group/btn inline-flex items-center gap-3 bg-white/5 border border-white/20 text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-sm md:text-base font-medium tracking-wide transition-all duration-500 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                <Sparkles className="w-4 h-4 text-yellow-500/80 group-hover/btn:rotate-12 transition-transform duration-500" />
                <span className="relative z-10">Consult the Oracle</span>
              </button>
            </motion.div>
          ) : isRevealing ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, filter: "blur(8px)" }}
              className="flex flex-col items-center py-12"
            >
              <div className="relative w-16 h-16">
                 {/* Magical spinning rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  className="absolute inset-0 border border-white/10 border-t-yellow-500/50 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="absolute inset-2 border border-white/10 border-b-white/50 rounded-full"
                />
              </div>
              <p className="mt-8 text-white/40 text-xs tracking-[0.3em] uppercase font-medium animate-pulse">
                Listening...
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="omen"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center w-full"
            >
              <div className="relative mb-8 md:mb-12">
                <span className="absolute -top-6 -left-6 text-6xl text-white/5 font-serif select-none">"</span>
                <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-[#F2F2F2] leading-[1.4] md:leading-[1.5] italic text-center drop-shadow-sm font-medium">
                  {omen?.english}
                </p>
                <span className="absolute -bottom-10 -right-6 text-6xl text-white/5 font-serif select-none rotate-180">"</span>
              </div>
              
              <div className="w-12 h-[1px] bg-white/20 mb-8 md:mb-10" />
              
              <div className="w-full text-center px-4 md:px-12">
                <p className="text-white/40 text-xs tracking-[0.2em] uppercase font-bold mb-4">The Meaning</p>
                <p className="text-[#A0A0A0] leading-relaxed text-sm md:text-base font-light">
                  {omen?.meaning}
                </p>
              </div>
              
              <button
                onClick={() => setOmen(null)}
                className="mt-12 text-xs md:text-sm uppercase tracking-widest font-medium text-white/30 hover:text-white/80 transition-colors py-2 px-4 rounded-full hover:bg-white/5"
              >
                Close & Seek Again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

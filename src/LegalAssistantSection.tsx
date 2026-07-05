import React from 'react';
import { motion } from 'framer-motion';

const LegalAssistantSection = () => {
  const loopDuration = 8;
  const animationTiming = [0, 0.125, 0.25, 0.5, 0.625, 0.75, 1];

  return (
    <section className="relative w-full pt-32 bg-[#030712] overflow-hidden flex flex-col items-center justify-center">
      
      {/* ---------------- MAIN ANIMATION AREA ---------------- */}
      {/* Container को एक फिक्स्ड हाइट दी है ताकि absolute लेयर्स सही से सेट हों */}
      <div className="relative w-full h-[30vh] min-h-[300px] flex items-center justify-center">
        
        {/* 1. BACKGROUND: ASSISTANT (Solid White) */}
        <motion.div
          animate={{ x: ["0%", "35vw", "0%", "0%", "-35vw", "0%", "0%"] }}
          transition={{ duration: loopDuration, times: animationTiming, repeat: Infinity, ease: "easeInOut" }}
          className="absolute text-6xl sm:text-8xl md:text-[11rem] font-black text-white uppercase leading-none tracking-tight drop-shadow-2xl mt-16 md:mt-24"
          // zIndex को सीधा स्टाइल में डाला है ताकि Framer Motion इसे ओवरराइड ना करे
          style={{ zIndex: 10, whiteSpace: "nowrap" }}
        >
          Assistant
        </motion.div>

        {/* 2. FOREGROUND: LEGAL AI (Outline with Dark Background Fill) */}
        <motion.div
          animate={{ x: ["0%", "-35vw", "0%", "0%", "35vw", "0%", "0%"] }}
          transition={{ duration: loopDuration, times: animationTiming, repeat: Infinity, ease: "easeInOut" }}
          className="absolute text-6xl sm:text-8xl md:text-[10rem] font-black uppercase leading-none tracking-tight mb-16 md:mb-24"
          style={{ 
            zIndex: 50, // यह हमेशा ऊपर रहेगा
            WebkitTextStroke: "2px rgba(255, 255, 255, 0.25)", 
            color: "#030712", // 🔥 MAGIC FIX: Transparent की जगह बैकग्राउंड कलर डाला है 🔥
            whiteSpace: "nowrap" 
          }}
        >
          Legal AI
        </motion.div>

      </div>

      {/* ---------------- Bottom Tagline ---------------- */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-16 md:mt-24 mb-16 md:mb-24 text-gray-500 uppercase tracking-[0.3em] sm:tracking-[0.4em] text-xs sm:text-sm md:text-base font-semibold relative z-10"
      >
        A comprehensive platform
      </motion.p>

      {/* ---------------- CONTINUOUS SCROLLING MARQUEE BANNER ---------------- */}
      {/* 🔥 FIX: Removed 'border-y border-white/10' and 'bg-white/[0.02]' for 100% seamless look 🔥 */}
      <div className="relative z-10 w-full overflow-hidden py-4 md:py-5 flex items-center">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="text-gray-300 font-medium text-sm md:text-base px-6">
                JurisTech is a comprehensive legal platform powered by an intelligent AI assistant.
              </span>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-600 mx-2 shadow-[0_0_8px_rgba(37,99,235,0.8)]"></div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default LegalAssistantSection;

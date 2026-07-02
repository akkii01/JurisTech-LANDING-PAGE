import React from 'react';
import { motion } from 'framer-motion';

const LegalAssistantSection = () => {
  const loopDuration = 8;
  const animationTiming = [0, 0.125, 0.25, 0.5, 0.625, 0.75, 1];

  return (
    <section className="relative w-full pt-32 bg-[#030712] overflow-hidden flex flex-col items-center justify-center">
      
      {/* ---------------- MAIN ANIMATION AREA (GRID OVERLAP FIX) ---------------- */}
      <div className="grid place-items-center w-full py-10">
        
        {/* 1. BACKGROUND LAYER: ASSISTANT (यह कोड में पहले है, इसलिए पीछे रेंडर होगा) */}
        <motion.div
          animate={{ x: ["0%", "35vw", "0%", "0%", "-35vw", "0%", "0%"] }}
          transition={{ duration: loopDuration, times: animationTiming, repeat: Infinity, ease: "easeInOut" }}
          // mt-12 और md:mt-24 इसे थोड़ा नीचे खिसकाएगा ताकि सही ओवरलैप बने
          className="col-start-1 row-start-1 text-6xl sm:text-8xl md:text-[11rem] font-black text-white uppercase leading-none tracking-tight drop-shadow-2xl mt-12 md:mt-24"
          style={{ whiteSpace: "nowrap" }}
        >
          Assistant
        </motion.div>

        {/* 2. FOREGROUND LAYER: LEGAL AI (यह कोड में बाद में है, इसलिए हमेशा ऊपर रहेगा) */}
        <motion.div
          animate={{ x: ["0%", "-35vw", "0%", "0%", "35vw", "0%", "0%"] }}
          transition={{ duration: loopDuration, times: animationTiming, repeat: Infinity, ease: "easeInOut" }}
          // mb-12 और md:mb-24 इसे थोड़ा ऊपर खिसकाएगा 
          className="col-start-1 row-start-1 text-6xl sm:text-8xl md:text-[10rem] font-black uppercase leading-none tracking-tight pointer-events-none mb-12 md:mb-24"
          style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.15)", color: "transparent", whiteSpace: "nowrap" }}
        >
          Legal AI
        </motion.div>

      </div>

      {/* ---------------- Bottom Tagline ---------------- */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-16 md:mt-20 mb-16 md:mb-24 text-gray-500 uppercase tracking-[0.3em] sm:tracking-[0.4em] text-xs sm:text-sm md:text-base font-semibold z-10 relative"
      >
        A comprehensive platform
      </motion.p>

      {/* ---------------- CONTINUOUS SCROLLING MARQUEE BANNER ---------------- */}
      <div className="relative z-10 w-full border-y border-white/10 bg-white/[0.02] overflow-hidden py-4 md:py-5 flex items-center">
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

import React from 'react';
import { motion } from 'framer-motion';

const LegalAssistantSection = () => {
  // एनीमेशन का लूप 8 सेकंड का होगा
  const loopDuration = 8;
  const animationTiming = [0, 0.125, 0.25, 0.5, 0.625, 0.75, 1];

  return (
    <section className="relative w-full pt-32 bg-[#030712] overflow-hidden flex flex-col items-center justify-center">
      
      {/* ---------------- MAIN ANIMATION AREA ---------------- */}
      <div className="relative w-full flex flex-col items-center justify-center">
        
        {/* LEGAL AI (Outline Text) */}
        <motion.div
          animate={{ x: ["0%", "-35vw", "0%", "0%", "35vw", "0%", "0%"] }}
          transition={{ duration: loopDuration, times: animationTiming, repeat: Infinity, ease: "easeInOut" }}
          className="text-6xl sm:text-8xl md:text-[10rem] font-black uppercase leading-none tracking-tight z-0"
          style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.15)", color: "transparent", whiteSpace: "nowrap" }}
        >
          Legal AI
        </motion.div>

        {/* ASSISTANT (Solid Text) */}
        <motion.div
          animate={{ x: ["0%", "35vw", "0%", "0%", "-35vw", "0%", "0%"] }}
          transition={{ duration: loopDuration, times: animationTiming, repeat: Infinity, ease: "easeInOut" }}
          className="text-6xl sm:text-8xl md:text-[11rem] font-black text-white uppercase leading-none tracking-tight -mt-6 md:-mt-16 z-10 drop-shadow-2xl"
          style={{ whiteSpace: "nowrap" }}
        >
          Assistant
        </motion.div>

      </div>

      {/* ---------------- Bottom Tagline ---------------- */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-16 md:mt-24 mb-16 md:mb-24 text-gray-500 uppercase tracking-[0.3em] sm:tracking-[0.4em] text-xs sm:text-sm md:text-base font-semibold"
      >
        A comprehensive platform
      </motion.p>

      {/* 🔥 NEW: CONTINUOUS SCROLLING MARQUEE BANNER 🔥 */}
      <div className="w-full border-y border-white/10 bg-white/[0.02] overflow-hidden py-4 md:py-5 flex items-center">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {/* हमने ऐरे को 6 बार मैप किया है ताकि लूप एकदम Seamless लगे */}
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="text-gray-300 font-medium text-sm md:text-base px-6">
                JurisTech is a comprehensive legal platform powered by an intelligent AI assistant.
              </span>
              {/* Blue Dot with glowing shadow */}
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-600 mx-2 shadow-[0_0_8px_rgba(37,99,235,0.8)]"></div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default LegalAssistantSection;

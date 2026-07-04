import React from 'react';
import { motion } from 'framer-motion';

const HeroTextSection = () => {
  return (
    <section className="relative w-full bg-[#030712] py-20 flex flex-col items-center justify-center overflow-hidden border-t border-white/5">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none z-0"></div>
      
      {/* ---------------- TYPOGRAPHY CONTAINER ---------------- */}
      {/* Fix: h-[25vw] sm:h-[15rem] ensures the container doesn't create extra space */}
      <div className="relative z-10 w-full px-4 text-center h-[25vw] sm:h-[15rem] md:h-[20rem] flex flex-col items-center">
        
        {/* Top Word: Outline */}
        <h2 
          className="absolute w-full text-[15vw] sm:text-[8rem] md:text-[10rem] font-black text-transparent uppercase tracking-tighter"
          style={{ 
            WebkitTextStroke: '2px rgba(255, 255, 255, 0.25)',
            lineHeight: '1',
            top: '0' 
          }}
        >
          Legal AI
        </h2>
        
        {/* Bottom Word: Solid */}
        <h2 
          className="absolute w-full text-[15vw] sm:text-[8rem] md:text-[10rem] font-black text-white uppercase tracking-tighter"
          style={{ 
            lineHeight: '1',
            top: '45%' // Ye line gap ko force karke khatam kar degi
          }}
        >
          Assistant
        </h2>
        
      </div>

      {/* Small Subtext */}
      <p className="mt-10 md:mt-20 text-gray-400 text-xs sm:text-sm font-medium tracking-[0.3em] uppercase z-20">
        A Comprehensive Platform
      </p>

      {/* ---------------- MARQUEE ---------------- */}
      <div className="absolute bottom-0 w-full bg-[#080c17] border-y border-white/10 py-4 overflow-hidden flex z-20">
        <motion.div
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }} 
          className="flex whitespace-nowrap items-center w-max"
        >
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-gray-300 font-medium text-sm flex items-center">
              JurisTech is a comprehensive legal platform powered by an intelligent AI assistant.
              <span className="text-blue-500 mx-6 text-xl">•</span>
            </span>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default HeroTextSection;

import React from 'react';
import { motion } from 'framer-motion';

const HeroTextSection = () => {
  return (
    <section className="relative w-full bg-[#030712] py-28 md:py-40 flex flex-col items-center justify-center overflow-hidden border-t border-white/5">
      
      {/* Subtle Background Glow for cinematic depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none z-0"></div>
      
      {/* ---------------- TYPOGRAPHY CONTAINER ---------------- */}
      {/* Container set to relative so absolute elements align properly inside it */}
      <div className="relative flex flex-col items-center justify-center leading-none text-center z-10 px-4 mb-24 md:mb-32 mt-12 md:mt-20 w-full">
        
        {/* Top Word: Outline Text (ABSOLUTE POSITIONING) */}
        {/* 🔥 FIX: 'absolute' forces it to overlap no matter what. 'bottom-[55%]' ensures it consistently sits exactly halfway behind 'Assistant' across all devices 🔥 */}
        <h2 
          className="absolute bottom-[55%] sm:bottom-[60%] left-1/2 -translate-x-1/2 whitespace-nowrap text-[15vw] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-black text-transparent uppercase tracking-tighter z-0 w-full"
          style={{ 
            WebkitTextStroke: '2px rgba(255, 255, 255, 0.25)', // Creates the outline effect
            lineHeight: '0.85' 
          }}
        >
          Legal AI
        </h2>
        
        {/* Bottom Word: Solid Text (RELATIVE POSITIONING) */}
        <h2 
          className="relative z-10 text-[15vw] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-black text-white uppercase tracking-tighter w-full"
          style={{ lineHeight: '0.85' }}
        >
          Assistant
        </h2>
        
        {/* Small Subtext */}
        <p className="relative z-20 mt-8 md:mt-12 text-gray-400 text-xs sm:text-sm md:text-base font-medium tracking-[0.3em] uppercase">
          A Comprehensive Platform
        </p>
        
      </div>

      {/* ---------------- CONTINUOUS MOVING MARQUEE ---------------- */}
      <div className="absolute bottom-0 w-full bg-[#080c17] border-y border-white/10 py-4 sm:py-5 overflow-hidden flex z-20">
        <motion.div
          animate={{ x: ["0%", "-50%"] }} // Moves left continuously
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }} // Duration controls the speed
          className="flex whitespace-nowrap items-center w-max"
        >
          {/* BLOCK 1 */}
          <div className="flex items-center">
            {[...Array(4)].map((_, i) => (
              <span key={`first-${i}`} className="text-gray-300 font-medium text-sm sm:text-base flex items-center">
                JurisTech is a comprehensive legal platform powered by an intelligent AI assistant.
                <span className="text-blue-500 mx-6 sm:mx-10 text-xl md:text-2xl">•</span>
              </span>
            ))}
          </div>
          
          {/* BLOCK 2 (Exact duplicate for seamless looping) */}
          <div className="flex items-center">
            {[...Array(4)].map((_, i) => (
              <span key={`second-${i}`} className="text-gray-300 font-medium text-sm sm:text-base flex items-center">
                JurisTech is a comprehensive legal platform powered by an intelligent AI assistant.
                <span className="text-blue-500 mx-6 sm:mx-10 text-xl md:text-2xl">•</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroTextSection;

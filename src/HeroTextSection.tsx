import React from 'react';
import { motion } from 'framer-motion';

const HeroTextSection = () => {
  return (
    <section className="relative w-full bg-[#030712] py-20 md:py-32 flex flex-col items-center justify-center overflow-hidden border-t border-white/5">
      
      {/* Subtle Background Glow for cinematic depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none z-0"></div>
      
      {/* ---------------- TYPOGRAPHY CONTAINER ---------------- */}
      <div className="flex flex-col items-center justify-center leading-none text-center relative z-10 px-4 mb-24 md:mb-32 mt-10">
        
        {/* Top Word: Outline Text */}
        <h2 
          className="text-[15vw] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-black text-transparent uppercase tracking-tighter relative z-0"
          style={{ 
            WebkitTextStroke: '2px rgba(255, 255, 255, 0.25)', // Creates the outline effect
            lineHeight: '0.85' 
          }}
        >
          Legal AI
        </h2>
        
        {/* Bottom Word: Solid Text */}
        {/* 🔥 FIX: Used standard guaranteed Tailwind classes (-mt-10 for mobile) instead of arbitrary values 🔥 */}
        <h2 
          className="relative z-10 text-[15vw] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-black text-white uppercase tracking-tighter -mt-10 sm:-mt-16 md:-mt-20 lg:-mt-24"
          style={{ lineHeight: '0.85' }}
        >
          Assistant
        </h2>
        
        {/* Small Subtext */}
        <p className="mt-8 md:mt-12 text-gray-400 text-xs sm:text-sm md:text-base font-medium tracking-[0.3em] uppercase">
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

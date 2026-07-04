import React from 'react';
import { motion } from 'framer-motion';

const HeroTextSection = () => {
  return (
    <section className="relative w-full bg-[#030712] py-20 md:py-32 flex flex-col items-center justify-center overflow-hidden border-t border-white/5">
      
      {/* Subtle Background Glow for cinematic depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none z-0"></div>
      
      {/* ---------------- TYPOGRAPHY CONTAINER ---------------- */}
      <div className="flex flex-col items-center justify-center relative z-10 px-4 mb-24 md:mb-32 mt-10 w-full">
        
        {/* 🔥 THE MAGIC: GRID OVERLAP CONTAINER 🔥 */}
        {/* grid-area 1/1 forces all its children to sit exactly on top of each other */}
        <div className="grid grid-cols-1 grid-rows-1 place-items-center text-center leading-none">
          
          {/* Top Word: Outline Text */}
          {/* col-start-1 row-start-1 keeps it in the same box. pb-[8%] pushes it slightly UP */}
          <h2 
            className="col-start-1 row-start-1 pb-[12%] sm:pb-[10%] md:pb-[8%] text-[15vw] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-black text-transparent uppercase tracking-tighter z-0"
            style={{ 
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.25)', 
              lineHeight: '0.85' 
            }}
          >
            Legal AI
          </h2>
          
          {/* Bottom Word: Solid Text */}
          {/* col-start-1 row-start-1 keeps it in the same box. pt-[12%] pushes it slightly DOWN */}
          <h2 
            className="col-start-1 row-start-1 pt-[12%] sm:pt-[10%] md:pt-[8%] text-[15vw] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-black text-white uppercase tracking-tighter z-10"
            style={{ 
              lineHeight: '0.85' 
            }}
          >
            Assistant
          </h2>

        </div>
        
        {/* Small Subtext */}
        <p className="mt-8 md:mt-12 text-gray-400 text-xs sm:text-sm md:text-base font-medium tracking-[0.3em] uppercase text-center">
          A Comprehensive Platform
        </p>
        
      </div>

      {/* ---------------- CONTINUOUS MOVING MARQUEE ---------------- */}
      <div className="absolute bottom-0 w-full bg-[#080c17] border-y border-white/10 py-4 sm:py-5 overflow-hidden flex z-20">
        <motion.div
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }} 
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
          
          {/* BLOCK 2 */}
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

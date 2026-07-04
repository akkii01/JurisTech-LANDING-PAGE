import React from 'react';
import { motion } from 'framer-motion';

const HeroTextSection = () => {
  return (
    <section className="relative w-full bg-[#030712] py-20 flex flex-col items-center justify-center overflow-hidden border-t border-white/5">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none z-0"></div>
      
      {/* ---------------- TYPOGRAPHY CONTAINER ---------------- */}
      {/* Container is now a simple block. We use padding/margin to pull them together */}
      <div className="relative z-10 w-full px-2 text-center mt-10">
        
        {/* Top Word: Outline Text */}
        <div 
          className="text-[14vw] sm:text-[8rem] md:text-[10rem] font-black uppercase tracking-tighter"
          style={{ 
            WebkitTextStroke: '2px rgba(255, 255, 255, 0.25)',
            color: 'transparent',
            lineHeight: '0.7',
            marginBottom: '0'
          }}
        >
          Legal AI
        </div>
        
        {/* Bottom Word: Solid Text */}
        {/* 🔥 FIX: -mt-[15%] pulls the bottom text UP into the top one relative to its own size 🔥 */}
        <div 
          className="text-[14vw] sm:text-[8rem] md:text-[10rem] font-black text-white uppercase tracking-tighter"
          style={{ 
            lineHeight: '0.7',
            marginTop: '-15%' 
          }}
        >
          Assistant
        </div>
        
        {/* Small Subtext */}
        <p className="mt-12 md:mt-16 text-gray-400 text-xs sm:text-sm font-medium tracking-[0.3em] uppercase">
          A Comprehensive Platform
        </p>
        
      </div>

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

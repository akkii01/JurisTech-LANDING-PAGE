import React from 'react';
import { motion } from 'framer-motion';

const HeroTextSection = () => {
  return (
    <section className="relative w-full bg-[#030712] py-20 md:py-32 flex flex-col items-center justify-center overflow-hidden border-t border-white/5">
      
      {/* Subtle Background Glow for cinematic depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none z-0"></div>
      
      {/* ---------------- TYPOGRAPHY CONTAINER ---------------- */}
      {/* 🔥 FIX 1: flex-col हटाकर सिंपल block text-center किया है ताकि मोबाइल ब्राउज़र स्पेसिंग गड़बड़ न करे 🔥 */}
      <div className="relative block text-center z-10 px-4 mb-24 md:mb-32 mt-10 w-full">
        
        {/* Top Word: Outline Text */}
        {/* 🔥 FIX 2: lineHeight को एकदम टाइट (0.75) कर दिया है ताकि एक्स्ट्रा गैप खत्म हो जाए 🔥 */}
        <h2 
          className="text-[15vw] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-black text-transparent uppercase tracking-tighter block w-full"
          style={{ 
            WebkitTextStroke: '2px rgba(255, 255, 255, 0.25)', 
            lineHeight: '0.75' 
          }}
        >
          Legal AI
        </h2>
        
        {/* Bottom Word: Solid Text */}
        {/* 🔥 FIX 3: CSS Transform लगाया है जो ब्राउज़र को मजबूर करेगा कि वो 'Assistant' को ठीक 30% ऊपर खींचकर 3D ओवरलैप बना दे 🔥 */}
        <h2 
          className="text-[15vw] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-black text-white uppercase tracking-tighter block w-full transform -translate-y-[30%] sm:-translate-y-[22%] md:-translate-y-[28%] lg:-translate-y-[32%]"
          style={{ 
            lineHeight: '0.75' 
          }}
        >
          Assistant
        </h2>
        
        {/* Small Subtext */}
        {/* 🔥 FIX 4: सब-टेक्स्ट को थोड़ा सा एडजस्ट किया है ताकि ओवरलैप के बाद यह सही जगह दिखे 🔥 */}
        <p className="mt-2 md:mt-6 text-gray-400 text-xs sm:text-sm md:text-base font-medium tracking-[0.3em] uppercase block w-full">
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

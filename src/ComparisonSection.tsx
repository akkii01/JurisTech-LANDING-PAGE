import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FileText, Clock, AlertCircle, Zap, CheckCircle2, Sparkles, BrainCircuit } from 'lucide-react';

const ComparisonSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track the scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 0% scroll -> inset(0 100% 0 0) means fully hidden from the right
  // 100% scroll -> inset(0 0% 0 0) means fully visible
  const clipPath = useTransform(scrollYProgress, [0, 1], ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]);
  
  // Moves the glowing divider line along with the clip path
  const sliderPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    // h-[300vh] gives the user enough scrolling space to comfortably watch the animation
    <section ref={containerRef} className="relative h-[300vh] bg-[#030712] w-full">
      
      {/* Sticky container that stays on screen while scrolling */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-8">
        
        {/* 🔥 NEW: CREATIVE TITLE SECTION 🔥 */}
        <div className="text-center mb-8 md:mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">JurisTech</span> Difference
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium">
              Watch how we transform days of tedious paperwork into seconds of flawless drafting. Just scroll to see the magic.
            </p>
          </motion.div>
        </div>

        {/* Main Box - Contains both states */}
        <div className="relative w-full max-w-6xl h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]">
          
          {/* ==========================================
              1. THE OLD WAY (BASE STATIC LAYER) 
              🔥 FIX: Set to z-0 so it stays at the very back
          ========================================== */}
          <div className="absolute inset-0 z-0 flex flex-col md:flex-row items-center p-8 md:p-16">
            {/* Background Pattern for old way (Diagonal Stripes) */}
            <div 
              className="absolute inset-0 opacity-30" 
              style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, #1a1a1a 2px, #1a1a1a 8px)' }}
            ></div>
            
            {/* Left Side: Old Text */}
            <div className="relative z-10 w-full md:w-1/2 pr-0 md:pr-12 mb-10 md:mb-0">
              <div className="inline-block px-4 py-1.5 rounded-full bg-gray-800 border border-gray-700 text-gray-400 text-sm font-bold tracking-widest mb-6 uppercase">
                Manual Drafting
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-500 mb-6 leading-tight">
                Hours lost in <br/> paperwork
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md">
                Endless research, manual formatting, hunting for precedents, and a high risk of human error.
              </p>
            </div>

            {/* Right Side: Old UI Graphic */}
            <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="w-[300px] md:w-[350px] h-[400px] bg-[#111] border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center opacity-70">
                <Clock size={40} className="text-gray-600 mb-4" />
                <div className="w-3/4 h-2 bg-gray-800 rounded-full mb-3"></div>
                <div className="w-1/2 h-2 bg-gray-800 rounded-full mb-8"></div>
                <div className="flex items-center text-gray-500 text-sm">
                  <AlertCircle size={16} className="mr-2" /> Proofreading required...
                </div>
              </div>
            </div>
          </div>

          {/* ==========================================
              2. THE NEW WAY (WIPING ANIMATED LAYER)
              🔥 FIX: Set z-20 so its solid background completely hides the Old Way
          ========================================== */}
          <motion.div 
            className="absolute inset-0 z-20 bg-[#020617] flex flex-col md:flex-row items-center p-8 md:p-16 border-l border-blue-500/30"
            style={{ clipPath }}
          >
            {/* Glowing Background Effects for new way */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Left Side: New Text */}
            <div className="relative z-30 w-full md:w-1/2 pr-0 md:pr-12 mb-10 md:mb-0">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-400 text-sm font-bold tracking-widest mb-6 uppercase shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                With JurisTech
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Drafts ready in <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">seconds</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-md">
                Autonomous AI surfaces the exact clauses you need, generating compliant and flawless documents instantly.
              </p>
            </div>

            {/* Right Side: Animated New UI Graphic */}
            <div className="relative z-30 w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="w-[300px] md:w-[350px] h-[400px] bg-[#0a0f1e] border border-blue-500/30 rounded-2xl p-6 flex flex-col shadow-[0_0_30px_rgba(59,130,246,0.15)] relative overflow-hidden">
                
                {/* Continuous scanning line animation inside the card */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-1 bg-blue-500/50 shadow-[0_0_10px_#3b82f6]"
                  animate={{ y: [0, 400, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />

                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                  <div className="flex items-center text-blue-400 font-semibold">
                    <BrainCircuit size={20} className="mr-2" /> AI Active
                  </div>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-md">ETA: 2.4s</span>
                </div>
                
                {/* Animated progress lines */}
                <div className="space-y-4 flex-1">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-green-500 mr-3" /> Analyzing parameters...
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-green-500 mr-3" /> Drafting Section 138...
                  </div>
                  <div className="flex items-center text-sm text-blue-400">
                    <Sparkles size={16} className="mr-3 animate-pulse" /> Optimizing legal tone...
                  </div>
                </div>

                <div className="mt-auto bg-blue-600/20 border border-blue-500/30 rounded-xl p-3 flex items-center justify-center text-blue-400 font-bold">
                  <Zap size={18} className="mr-2 fill-blue-400" /> Document Generated
                </div>
              </div>
            </div>
          </motion.div>

          {/* ==========================================
              3. THE GLOWING DIVIDER LINE
              🔥 FIX: Set z-40 so it stays above everything
          ========================================== */}
          <motion.div 
            className="absolute top-0 bottom-0 z-40 w-[2px] bg-gradient-to-b from-transparent via-blue-400 to-transparent shadow-[0_0_15px_#60a5fa] pointer-events-none"
            style={{ left: sliderPosition }}
          >
            {/* The little glowing knob in the center of the line */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#020617] border border-blue-400 rounded-full flex items-center justify-center shadow-[0_0_15px_#3b82f6]">
              <div className="flex space-x-0.5">
                <div className="w-0.5 h-3 bg-blue-400 rounded-full"></div>
                <div className="w-0.5 h-3 bg-blue-400 rounded-full"></div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

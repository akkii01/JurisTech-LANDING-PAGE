import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FileText, Clock, AlertCircle, Zap, CheckCircle2, Sparkles, BrainCircuit, Loader2 } from 'lucide-react';

const ComparisonSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const clipPath = useTransform(scrollYProgress, [0, 1], ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]);
  const sliderPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#030712] w-full">
      
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-8">
        
        {/* Title Section */}
        <div className="text-center mb-4 md:mb-10 pt-2 md:pt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="hidden md:inline-flex items-center px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-xs font-semibold mb-4 tracking-wide">
              <Sparkles size={14} className="mr-2 text-blue-400" /> Experience the shift
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 md:mb-4 tracking-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">JurisTech</span> Difference
            </h2>
            <p className="text-xs md:text-base text-gray-400 max-w-xl mx-auto font-medium px-4">
              Watch how we transform days of tedious paperwork into seconds of flawless drafting. Scroll to compare.
            </p>
          </motion.div>
        </div>

        {/* 🔥 FIX: Mobile height adjusted to 78vh to prevent cutting off the graphics 🔥 */}
        <div className="relative w-full max-w-6xl h-[78vh] sm:h-[70vh] md:h-[65vh] lg:h-[70vh] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]">
          
          {/* ==========================================
              1. THE OLD WAY (BASE STATIC LAYER) 
          ========================================== */}
          <div className="absolute inset-0 z-0 flex flex-col md:flex-row items-center justify-center p-5 sm:p-8 md:p-16">
            <div 
              className="absolute inset-0 opacity-20" 
              style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, #1a1a1a 2px, #1a1a1a 8px)' }}
            ></div>
            
            <div className="relative z-10 w-full md:w-1/2 pr-0 md:pr-12 mb-5 md:mb-0">
              <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-gray-800 border border-gray-700 text-gray-300 text-[10px] md:text-sm font-semibold tracking-wide mb-3 md:mb-6 uppercase">
                Manual Drafting
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-500 mb-3 md:mb-6 leading-tight">
                Hours lost in <br className="hidden md:block"/> paperwork
              </h2>
              <p className="text-sm md:text-lg text-gray-600 mb-0 md:mb-8 max-w-md">
                Endless research, manual formatting, hunting for precedents, and a high risk of human error.
              </p>
            </div>

            {/* Graphic Box - Resized for mobile */}
            <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="w-[280px] md:w-[350px] h-[260px] md:h-[380px] bg-[#111] border border-gray-800 rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col shadow-2xl relative overflow-hidden">
                
                <div className="absolute top-10 -right-10 w-32 h-32 bg-red-900/10 rounded-full blur-xl pointer-events-none"></div>
                
                <div className="flex items-center justify-between mb-4 md:mb-6 border-b border-gray-800 pb-3 md:pb-4">
                  <div className="flex items-center text-gray-500 font-medium text-xs md:text-sm">
                    <FileText size={16} className="mr-2" /> Draft_v4_Final_REAL.docx
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4 flex-1">
                  <div className="w-full h-2 md:h-2.5 bg-gray-800/80 rounded"></div>
                  <div className="w-5/6 h-2 md:h-2.5 bg-gray-800/80 rounded"></div>
                  
                  <div className="flex items-start gap-2 mt-3 md:mt-4 p-2 md:p-3 rounded-lg bg-red-950/20 border border-red-900/30">
                    <AlertCircle size={14} className="text-red-500 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-[10px] md:text-xs font-bold text-red-400 mb-0.5 md:mb-1">Critical Missing Clause</div>
                      <div className="text-[9px] md:text-[10px] text-red-500/70 leading-tight">Indemnity section is poorly drafted.</div>
                    </div>
                  </div>

                  <div className="w-3/4 h-2 md:h-2.5 bg-gray-800/80 rounded mt-3 md:mt-4"></div>
                  <div className="w-full h-2 md:h-2.5 bg-gray-800/80 rounded"></div>
                  
                  <div className="flex items-center gap-2 mt-2 p-2 md:p-2.5 rounded-lg bg-yellow-950/20 border border-yellow-900/30">
                    <Clock size={12} className="text-yellow-500 shrink-0 md:w-[14px] md:h-[14px]" />
                    <span className="text-[10px] md:text-xs text-yellow-500/80 font-medium">Review pending for 3 days</span>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-center gap-2 text-gray-500 text-xs md:text-sm border-t border-gray-800 pt-3 md:pt-4">
                  <Loader2 size={14} className="animate-spin text-gray-600 md:w-[16px] md:h-[16px]" /> Manual proofreading...
                </div>
              </div>
            </div>
          </div>

          {/* ==========================================
              2. THE NEW WAY (WIPING ANIMATED LAYER)
          ========================================== */}
          <motion.div 
            className="absolute inset-0 z-20 bg-[#020617] flex flex-col md:flex-row items-center justify-center p-5 sm:p-8 md:p-16 border-l border-blue-500/30"
            style={{ clipPath }}
          >
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
            <div className="absolute top-1/4 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-purple-600/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none"></div>

            <div className="relative z-30 w-full md:w-1/2 pr-0 md:pr-12 mb-5 md:mb-0">
              <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-400 text-[10px] md:text-sm font-semibold tracking-wide mb-3 md:mb-6 shadow-[0_0_15px_rgba(59,130,246,0.3)] uppercase">
                With JurisTech
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-6 leading-tight">
                Drafts ready in <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">seconds</span>
              </h2>
              <p className="text-sm md:text-lg text-gray-300 mb-0 md:mb-8 max-w-md">
                Autonomous AI surfaces the exact clauses you need, generating compliant and flawless documents instantly.
              </p>
            </div>

            <div className="relative z-30 w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="w-[280px] md:w-[350px] h-[260px] md:h-[380px] bg-[#0a0f1e] border border-blue-500/30 rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col shadow-[0_0_30px_rgba(59,130,246,0.15)] relative overflow-hidden">
                
                {/* 🔥 FIX: Changed animation to use CSS top property for dynamic height support 🔥 */}
                <motion.div 
                  className="absolute left-0 w-full h-1 bg-blue-500/50 shadow-[0_0_10px_#3b82f6]"
                  animate={{ top: ["0%", "98%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                <div className="flex items-center justify-between mb-4 md:mb-8 border-b border-white/10 pb-3 md:pb-4">
                  <div className="flex items-center text-blue-400 font-semibold text-xs md:text-sm">
                    <BrainCircuit size={16} className="mr-2 md:w-[18px] md:h-[18px]" /> AI Active
                  </div>
                  <span className="text-[10px] md:text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-md font-medium">ETA: 2.4s</span>
                </div>
                
                <div className="space-y-3 md:space-y-4 flex-1">
                  <div className="flex items-center text-[11px] md:text-sm text-gray-300">
                    <CheckCircle2 size={14} className="text-green-500 mr-2 md:mr-3 shrink-0 md:w-[16px] md:h-[16px]" /> Analyzing parameters...
                  </div>
                  <div className="flex items-center text-[11px] md:text-sm text-gray-300">
                    <CheckCircle2 size={14} className="text-green-500 mr-2 md:mr-3 shrink-0 md:w-[16px] md:h-[16px]" /> Drafting Section 138...
                  </div>
                  <div className="flex items-center text-[11px] md:text-sm text-blue-400 font-medium">
                    <Sparkles size={14} className="mr-2 md:mr-3 animate-pulse shrink-0 md:w-[16px] md:h-[16px]" /> Optimizing legal tone...
                  </div>
                </div>

                <div className="mt-auto bg-blue-600/20 border border-blue-500/30 rounded-lg md:rounded-xl p-2 md:p-3 flex items-center justify-center text-blue-400 font-bold text-xs md:text-sm">
                  <Zap size={14} className="mr-2 fill-blue-400 md:w-[18px] md:h-[18px]" /> Document Generated
                </div>
              </div>
            </div>
          </motion.div>

          {/* ==========================================
              3. THE GLOWING DIVIDER LINE
          ========================================== */}
          <motion.div 
            className="absolute top-0 bottom-0 z-40 w-[2px] bg-gradient-to-b from-transparent via-blue-400 to-transparent shadow-[0_0_15px_#60a5fa] pointer-events-none"
            style={{ left: sliderPosition }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-[#020617] border border-blue-400 rounded-full flex items-center justify-center shadow-[0_0_15px_#3b82f6]">
              <div className="flex space-x-0.5">
                <div className="w-0.5 h-2 md:h-3 bg-blue-400 rounded-full"></div>
                <div className="w-0.5 h-2 md:h-3 bg-blue-400 rounded-full"></div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

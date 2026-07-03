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
        
        {/* 🔥 FIX 1: Compact, Tech-Style Title Section 🔥 */}
        <div className="text-center mb-8 md:mb-10 pt-16 md:pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-xs font-semibold mb-4 tracking-wide">
              <Sparkles size={14} className="mr-2 text-blue-400" /> Experience the shift
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">JurisTech</span> Difference
            </h2>
            <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto font-medium">
              Watch how we transform days of tedious paperwork into seconds of flawless drafting. Scroll to compare.
            </p>
          </motion.div>
        </div>

        <div className="relative w-full max-w-6xl h-[60vh] md:h-[65vh] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]">
          
          {/* ==========================================
              1. THE OLD WAY (BASE STATIC LAYER) 
          ========================================== */}
          <div className="absolute inset-0 z-0 flex flex-col md:flex-row items-center p-8 md:p-16">
            <div 
              className="absolute inset-0 opacity-20" 
              style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, #1a1a1a 2px, #1a1a1a 8px)' }}
            ></div>
            
            <div className="relative z-10 w-full md:w-1/2 pr-0 md:pr-12 mb-10 md:mb-0">
              <div className="inline-block px-4 py-1.5 rounded-full bg-gray-800 border border-gray-700 text-gray-300 text-sm font-semibold tracking-wide mb-6">
                Manual Drafting
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-500 mb-6 leading-tight">
                Hours lost in <br/> paperwork
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-8 max-w-md">
                Endless research, manual formatting, hunting for precedents, and a high risk of human error.
              </p>
            </div>

            {/* 🔥 FIX 2: Attractive & Realistic "Old Way" Box 🔥 */}
            <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="w-[300px] md:w-[350px] h-[380px] bg-[#111] border border-gray-800 rounded-2xl p-6 flex flex-col shadow-2xl relative overflow-hidden">
                
                {/* Subtle red glow indicating errors */}
                <div className="absolute top-10 -right-10 w-32 h-32 bg-red-900/10 rounded-full blur-xl pointer-events-none"></div>
                
                <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
                  <div className="flex items-center text-gray-500 font-medium text-sm">
                    <FileText size={18} className="mr-2" /> Draft_v4_Final_REAL.docx
                  </div>
                </div>

                <div className="space-y-4 flex-1">
                  {/* Mock Text Lines */}
                  <div className="w-full h-2.5 bg-gray-800/80 rounded"></div>
                  <div className="w-5/6 h-2.5 bg-gray-800/80 rounded"></div>
                  
                  {/* Simulated Error Banner */}
                  <div className="flex items-start gap-2 mt-4 p-3 rounded-lg bg-red-950/20 border border-red-900/30">
                    <AlertCircle size={16} className="text-red-500 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-red-400 mb-1">Critical Missing Clause</div>
                      <div className="text-[10px] text-red-500/70">Indemnity section is poorly drafted.</div>
                    </div>
                  </div>

                  <div className="w-3/4 h-2.5 bg-gray-800/80 rounded mt-4"></div>
                  <div className="w-full h-2.5 bg-gray-800/80 rounded"></div>
                  
                  {/* Simulated Warning Banner */}
                  <div className="flex items-center gap-2 mt-2 p-2.5 rounded-lg bg-yellow-950/20 border border-yellow-900/30">
                    <Clock size={14} className="text-yellow-500 shrink-0" />
                    <span className="text-xs text-yellow-500/80 font-medium">Review pending for 3 days</span>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-center gap-2 text-gray-500 text-sm border-t border-gray-800 pt-4">
                  <Loader2 size={16} className="animate-spin text-gray-600" /> Manual proofreading...
                </div>
              </div>
            </div>
          </div>

          {/* ==========================================
              2. THE NEW WAY (WIPING ANIMATED LAYER)
          ========================================== */}
          <motion.div 
            className="absolute inset-0 z-20 bg-[#020617] flex flex-col md:flex-row items-center p-8 md:p-16 border-l border-blue-500/30"
            style={{ clipPath }}
          >
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-30 w-full md:w-1/2 pr-0 md:pr-12 mb-10 md:mb-0">
              {/* 🔥 FIX 3: Corrected "With JurisTech" Capitalization 🔥 */}
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-400 text-sm font-semibold tracking-wide mb-6 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                With JurisTech
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Drafts ready in <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">seconds</span>
              </h2>
              <p className="text-base md:text-lg text-gray-300 mb-8 max-w-md">
                Autonomous AI surfaces the exact clauses you need, generating compliant and flawless documents instantly.
              </p>
            </div>

            <div className="relative z-30 w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="w-[300px] md:w-[350px] h-[380px] bg-[#0a0f1e] border border-blue-500/30 rounded-2xl p-6 flex flex-col shadow-[0_0_30px_rgba(59,130,246,0.15)] relative overflow-hidden">
                
                <motion.div 
                  className="absolute top-0 left-0 w-full h-1 bg-blue-500/50 shadow-[0_0_10px_#3b82f6]"
                  animate={{ y: [0, 380, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                  <div className="flex items-center text-blue-400 font-semibold text-sm">
                    <BrainCircuit size={18} className="mr-2" /> AI Active
                  </div>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-md font-medium">ETA: 2.4s</span>
                </div>
                
                <div className="space-y-4 flex-1">
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-green-500 mr-3 shrink-0" /> Analyzing parameters...
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-green-500 mr-3 shrink-0" /> Drafting Section 138...
                  </div>
                  <div className="flex items-center text-sm text-blue-400 font-medium">
                    <Sparkles size={16} className="mr-3 animate-pulse shrink-0" /> Optimizing legal tone...
                  </div>
                </div>

                <div className="mt-auto bg-blue-600/20 border border-blue-500/30 rounded-xl p-3 flex items-center justify-center text-blue-400 font-bold text-sm">
                  <Zap size={16} className="mr-2 fill-blue-400" /> Document Generated
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

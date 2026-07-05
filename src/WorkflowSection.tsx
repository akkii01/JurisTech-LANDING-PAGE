import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Database, FileText, CheckCircle, Sparkles, ArrowDown } from 'lucide-react';

const WorkflowSection = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-[#030712] overflow-hidden flex flex-col items-center justify-center">
      
      {/* Section Title */}
      <div className="text-center z-10 mb-10 lg:mb-16 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3 tracking-wide">
          Architecture
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light">
          Our advanced semantic layer processes your inputs against vast legal databases to generate perfect, court-ready documents in real-time.
        </p>
      </div>

      {/* Workflow Diagram Container */}
      <div className="relative w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24 px-4 sm:px-6 z-10">
        
        {/* DESKTOP ONLY: Curved SVG Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ zIndex: -1 }}>
          <path d="M 250 100 C 400 100, 400 200, 520 200" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
          <motion.path 
            d="M 250 100 C 400 100, 400 200, 520 200" fill="none" stroke="#60A5FA" strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0 }}
          />
          
          <path d="M 250 300 C 400 300, 400 200, 520 200" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
          <motion.path 
            d="M 250 300 C 400 300, 400 200, 520 200" fill="none" stroke="#60A5FA" strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
          />

          <path d="M 600 200 C 750 200, 750 100, 890 100" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
          <motion.path 
            d="M 600 200 C 750 200, 750 100, 890 100" fill="none" stroke="#818CF8" strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
          />

          <path d="M 600 200 C 750 200, 750 300, 890 300" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
          <motion.path 
            d="M 600 200 C 750 200, 750 300, 890 300" fill="none" stroke="#818CF8" strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1.5 }}
          />
        </svg>

        {/* ---------------- LEFT COLUMN ---------------- */}
        <div className="flex flex-col gap-6 lg:gap-24 w-full sm:w-auto relative z-10">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-4 bg-gradient-to-r from-[#0a0f1c] to-[#0f172a] rounded-2xl p-4 sm:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md w-full sm:w-[280px]">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_12px_#3b82f6] animate-pulse"></div>
            <div>
              <h3 className="text-white text-sm sm:text-base font-semibold">User Prompts</h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-0.5">Case details & specifics</p>
            </div>
            <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 ml-auto opacity-50" />
          </motion.div>

          <div className="flex lg:hidden justify-center text-blue-500/50 -my-2">
             <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>

          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-4 bg-gradient-to-r from-[#0a0f1c] to-[#0f172a] rounded-2xl p-4 sm:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md w-full sm:w-[280px]">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_12px_#3b82f6] animate-pulse"></div>
            <div>
              <h3 className="text-white text-sm sm:text-base font-semibold">Legal Precedents</h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-0.5">IPC, BNS & Case Laws</p>
            </div>
            <Database className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 ml-auto opacity-50" />
          </motion.div>
        </div>

        {/* ---------------- CENTER COLUMN ---------------- */}
        <motion.div 
          animate={{ boxShadow: ['0 0 20px rgba(59,130,246,0.2)', '0 0 60px rgba(99,102,241,0.4)', '0 0 20px rgba(59,130,246,0.2)'] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="relative flex flex-col items-center bg-gradient-to-b from-[#0f172a] to-[#020617] rounded-3xl p-8 sm:p-10 shadow-[0_0_40px_rgba(37,99,235,0.2)] backdrop-blur-xl w-full sm:w-[320px] z-20"
        >
          <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_15px_#4ade80] animate-pulse"></div>
          <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center mb-5 relative overflow-hidden">
             <div className="absolute inset-0 bg-indigo-400/20 animate-ping"></div>
             <BrainCircuit className="w-8 h-8 text-indigo-400 relative z-10" />
          </div>
          <h3 className="text-white text-lg sm:text-xl font-bold mb-2">JurisTech AI Core</h3>
          <p className="text-gray-400 text-xs sm:text-sm text-center leading-relaxed">Semantic layer • NLP drafting<br/>Real-time processing</p>
        </motion.div>

        {/* ---------------- RIGHT COLUMN ---------------- */}
        <div className="flex flex-col gap-6 lg:gap-24 w-full sm:w-auto relative z-10">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-4 bg-gradient-to-l from-[#0a0f1c] to-[#0f172a] rounded-2xl p-4 sm:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md w-full sm:w-[280px]">
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-[0_0_12px_#818cf8] animate-pulse"></div>
            <div>
              <h3 className="text-white text-sm sm:text-base font-semibold">Court-Ready Drafts</h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-0.5">Notices, Deeds, Affidavits</p>
            </div>
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400 ml-auto opacity-50" />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-4 bg-gradient-to-l from-[#0a0f1c] to-[#0f172a] rounded-2xl p-4 sm:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md w-full sm:w-[280px]">
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-[0_0_12px_#818cf8] animate-pulse"></div>
            <div>
              <h3 className="text-white text-sm sm:text-base font-semibold">Formatting & SLA</h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-0.5">Auto-aligned layouts</p>
            </div>
            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400 ml-auto opacity-50" />
          </motion.div>
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-16 sm:mt-24 z-10 px-4 bg-black/30 py-3 rounded-full">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-400"><div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></div> Sources</div>
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-400"><div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]"></div> Active Engine</div>
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-400"><div className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8]"></div> Destinations</div>
      </div>
    </section>
  );
};

export default WorkflowSection;

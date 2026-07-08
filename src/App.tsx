/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, type ReactNode } from "react";
import WorkflowSection from './WorkflowSection';
import FAQSection from './FAQSection';
import HeroTextSection from './HeroTextSection';
import ScrollRevealSection from './ScrollRevealSection';
import LegalAssistantSection from './LegalAssistantSection';
import ComparisonSection from './ComparisonSection';
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight,
  ArrowLeft, 
  CheckCircle2, 
  FileText, 
  Scale, 
  ScrollText, 
  Zap, 
  Download, 
  PenSquare, 
  Layers, 
  Settings, 
  Tally3,
  Star,
  Menu,
  ShieldCheck,
  IndianRupee,
  X,
  Briefcase,
  Shield,
  FileWarning,
  Users
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const workflowSteps = [
  {
    step: 1,
    title: "Choose Type",
    desc: "Select from 12+ essential legal documents including Legal Notices, Rent Agreements, and Affidavits.",
    icon: <FileText className="w-5 h-5" />,
    img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800",
    color: "blue"
  },
  {
    step: 2,
    title: "Fill Details",
    desc: "Answer simple prompts. Select your preferred version (Concise to Exhaustive) and tone (Professional to Formal).",
    icon: <PenSquare className="w-5 h-5" />,
    img: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800",
    color: "purple"
  },
  {
    step: 3,
    title: "Download",
    desc: "Receive your court-ready document instantly. Download as Editable Word, PDF, or Plain Text.",
    icon: <Download className="w-5 h-5" />,
    img: "https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80&w=800",
    color: "green"
  }
];

const InfoModal = ({ isOpen, onClose, children, lang, setLang, title }: { 
  isOpen: boolean, 
  onClose: () => void, 
  children: ReactNode,
  lang: 'en' | 'hi',
  setLang: (l: 'en' | 'hi') => void,
  title: string
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] overflow-y-auto bg-black/80 backdrop-blur-md"
        onClick={() => {
          setLang('en');
          onClose();
        }}
      >
        <div className="flex min-h-full p-4 py-8 sm:py-12 sm:p-6">
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl m-auto bg-gray-900 text-gray-200 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-y-auto max-h-[85vh]"
          >
            <div className="sticky top-0 z-50 pt-6 px-4 sm:px-6 pb-2 flex items-center justify-between gap-2 pointer-events-none bg-transparent border-none shadow-none">
              
              <div className="pointer-events-auto flex items-center shrink-0">
                <img 
                  src="https://i.ibb.co/zWYNn82b/logo-png.png" 
                  alt="JurisTech" 
                  className="h-8 sm:h-10 w-auto object-contain drop-shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              {title && (
                <div className="flex-1 flex justify-center pointer-events-auto min-w-0">
                  <span className="bg-gray-900/60 backdrop-blur-xl border border-white/10 shadow-lg px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-sm font-bold text-white tracking-wide truncate max-w-full">
                    {title}
                  </span>
                </div>
              )}
              
              <div className="flex items-center gap-2 sm:gap-3 pointer-events-auto shrink-0">
                <div className="flex space-x-1 bg-gray-900/60 backdrop-blur-xl border border-white/10 p-1 rounded-xl shadow-lg">
                  <button onClick={() => setLang('en')} className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-bold transition-all ${lang === 'en' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}>EN</button>
                  <button onClick={() => setLang('hi')} className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-bold transition-all ${lang === 'hi' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}>HI</button>
                </div>
                <button 
                  onClick={() => { setLang('en'); onClose(); }}
                  className="p-2 sm:p-3 rounded-full bg-gray-900/60 backdrop-blur-xl border border-white/10 text-gray-400 hover:text-white transition-all shadow-lg hover:bg-white/10"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6 sm:p-8 pt-2 selection:bg-blue-500/30">
              <div key={lang} className="animate-[fadeIn_0.5s_ease-in-out]">
                {children}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default function App() {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [lang, setLang] = useState<'en' | 'hi'>('en');
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030712] text-gray-200 selection:bg-blue-500/30 selection:text-blue-200 antialiased">
      
      <nav className="fixed w-full z-50 top-0 pt-4 px-6 pb-4 bg-transparent">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.a 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            href="#" 
            className="flex-shrink-0 group hover:opacity-80 transition-opacity flex items-center gap-2.5"
          >
            <img 
              src="https://i.ibb.co/zWYNn82b/logo-png.png" 
              alt="JTC Logo" 
              className="h-10 lg:h-12 w-auto object-contain drop-shadow-md"
              referrerPolicy="no-referrer"
            />
            <span className={`text-xl lg:text-2xl font-bold text-white tracking-tight transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
              JurisTech
            </span>
          </motion.a>

          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="hidden lg:flex items-center bg-dark-800/60 border-white/10 border rounded-full px-8 py-3 shadow-xl backdrop-blur-xl gap-8 text-sm font-medium text-gray-300"
          >
            <a href="#features" className="hover:text-white hover:scale-105 transition-all">Features</a>
            <a href="#how-it-works" className="hover:text-white hover:scale-105 transition-all">How it works</a>
            <a href="#pricing" className="hover:text-white hover:scale-105 transition-all">Pricing</a>
            <a href="#faq" className="hover:text-white hover:scale-105 transition-all">FAQ</a>
            <button onClick={() => setIsFeedbackOpen(true)} className="hover:text-white hover:scale-105 transition-all focus:outline-none">Feedback</button>
          </motion.div>

          <motion.a 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="https://juristech-v1.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 px-7 py-3 text-sm font-semibold text-white bg-dark-800 border border-white/10 hover:border-blue-500/50 rounded-full transition-all shadow-lg hover:shadow-[0_0_20px_-5px_rgba(37,99,235,0.6)] group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors duration-300"></div>
            <span className="relative z-10">Try Now</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-300 p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 overflow-hidden"
            >
              <div className="bg-dark-800/95 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl flex flex-col gap-4">
                <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white py-2 border-b border-white/5 transition-colors font-medium">Features</a>
                <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white py-2 border-b border-white/5 transition-colors font-medium">How it works</a>
                <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white py-2 border-b border-white/5 transition-colors font-medium">Pricing</a>
                <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white py-2 border-b border-white/5 transition-colors font-medium">FAQ</a>
                <button onClick={() => { setIsFeedbackOpen(true); setIsMobileMenuOpen(false); }} className="text-left text-gray-300 hover:text-white py-2 border-b border-white/5 transition-colors font-medium">Feedback</button>
                <a href="https://juristech-v1.vercel.app/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 flex items-center justify-center gap-2 w-full px-6 py-4 text-sm font-semibold text-white bg-blue-600 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                  Try Now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION POP-UP */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative pt-20 md:pt-32 pb-4 md:pb-12 overflow-hidden flex flex-col md:min-h-[90vh] justify-center items-center"
      >
        <div className="absolute inset-0 w-full h-full z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute w-full h-full object-cover opacity-30 pointer-events-none"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/60 via-[#030712]/70 to-[#030712] pointer-events-none"></div>
        </div>

        <div className="absolute inset-0 grid-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20 z-0"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.15)_0%,_transparent_60%)] pointer-events-none z-0"></div>

        <div className="z-10 text-center max-w-5xl mx-auto px-4 w-full flex flex-col items-center mt-4 md:mt-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{ opacity: { duration: 0.5 }, scale: { duration: 0.5 }, y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-[10px] sm:text-xs font-semibold mb-4 md:mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(37,99,235,0.15)]"
          >
            <Star className="w-3 h-3 fill-blue-500/50" />
            Where Accuracy Meets Innovation
          </motion.div>

          <motion.h1 
            {...fadeIn}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-4 md:mb-6 leading-[1.1] px-2"
          >
            Smarter Legal Drafting,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 drop-shadow-[0_0_30px_rgba(37,99,235,0.3)]">Real Results</span>
          </motion.h1>

          <motion.p 
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto mb-6 md:mb-10 font-light leading-relaxed px-4"
          >
            AI-powered legal document generation built specifically for Indian advocates. 
            Draft court-ready documents in minutes, not hours.
          </motion.p>

          <motion.div 
            {...fadeIn}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 mb-6 md:mb-10 w-full px-4"
          >
            <a 
              href="https://juristech-v1.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-bold text-white bg-blue-600 rounded-full py-4 px-10 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] hover:bg-blue-500 transition-all duration-300 hover:-translate-y-0.5"
            >
              Try JurisTech Now
            </a>
            <p className="text-xs font-medium text-gray-500 flex items-center gap-1.5 bg-dark-800/50 py-2 px-4 rounded-full border border-white/5">
              <IndianRupee className="w-3 h-3 text-blue-400" /> 99 per document <span className="mx-1">•</span> No hidden fees
            </p>
          </motion.div>

          <motion.div 
            {...fadeIn}
            transition={{ delay: 0.4 }}
            className="mb-4 sm:mb-12 mt-auto opacity-90 w-full" 
          >
            <div 
              className="flex w-full overflow-hidden py-4 cursor-pointer custom-marquee-wrapper"
              style={{ 
                maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)", 
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)" 
              }}
            >
              <div className="flex shrink-0 gap-3 sm:gap-4 pr-3 sm:pr-4 custom-marquee-track-reverse">
                {[
                  ...Array(2).fill([
                    { icon: <FileText className="w-3 h-3 sm:w-4 sm:h-4" />, label: "Legal Notices", color: "blue" },
                    { icon: <Scale className="w-3 h-3 sm:w-4 sm:h-4" />, label: "Affidavits", color: "purple" },
                    { icon: <ScrollText className="w-3 h-3 sm:w-4 sm:h-4" />, label: "Agreements", color: "green" },
                    { icon: <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />, label: "Sale Deed", color: "orange" },
                    { icon: <FileText className="w-3 h-3 sm:w-4 sm:h-4" />, label: "Notes of Argument", color: "indigo" },
                    { icon: <Scale className="w-3 h-3 sm:w-4 sm:h-4" />, label: "Power of Attorney", color: "rose" },
                    { icon: <Shield className="w-3 h-3 sm:w-4 sm:h-4" />, label: "Police Complaint", color: "red" },
                    { icon: <FileWarning className="w-3 h-3 sm:w-4 sm:h-4" />, label: "Eviction Notice", color: "yellow" },
                    { icon: <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />, label: "Employment Agreement", color: "teal" },
                    { icon: <Users className="w-3 h-3 sm:w-4 sm:h-4" />, label: "Partnership Deed", color: "cyan" }
                  ]).flat()
                ].map((item, i) => (
                  <div 
                    key={`hero-t1-${i}`}
                    className="glass-card px-4 py-2 sm:px-5 sm:py-3 rounded-xl flex items-center gap-2 sm:gap-3 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shrink-0 border border-white/5 bg-white/[0.02]"
                  >
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-${item.color}-500/20 flex items-center justify-center text-${item.color}-400`}>
                      {item.icon}
                    </div>
                    <span className="text-[10px] sm:text-sm font-medium text-gray-300 whitespace-nowrap">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex shrink-0 gap-3 sm:gap-4 pr-3 sm:pr-4 custom-marquee-track-reverse" aria-hidden="true">
                {[
                  ...Array(2).fill([
                    { icon: <FileText className="w-3 h-3 sm:w-4 sm:h-4" />, label: "Legal Notices", color: "blue" },
                    { icon: <Scale className="w-3 h-3 sm:w-4 sm:h-4" />, label: "Affidavits", color: "purple" },
                    { icon: <ScrollText className="w-3 h-3 sm:w-4 sm:h-4" />, label: "Agreements", color: "green" },
                    { icon: <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />, label: "Sale Deed", color: "orange" },
                    { icon: <FileText className="w-3 h-3 sm:w-4 sm:h-4" />, label: "Notes of Argument", color: "indigo" },
                    { icon: <Scale className="w-3 h-3 sm:w-4 sm:h-4" />, label: "Power of Attorney", color: "rose" },
                    { icon: <Shield className="w-3 h-3 sm:w-4 sm:h-4" />, label: "Police Complaint", color: "red" },
                    { icon: <FileWarning className="w-3 h-3 sm:w-4 sm:h-4" />, label: "Eviction Notice", color: "yellow" },
                    { icon: <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />, label: "Employment Agreement", color: "teal" },
                    { icon: <Users className="w-3 h-3 sm:w-4 sm:h-4" />, label: "Partnership Deed", color: "cyan" }
                  ]).flat()
                ].map((item, i) => (
                  <div 
                    key={`hero-t2-${i}`}
                    className="glass-card px-4 py-2 sm:px-5 sm:py-3 rounded-xl flex items-center gap-2 sm:gap-3 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shrink-0 border border-white/5 bg-white/[0.02]"
                  >
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-${item.color}-500/20 flex items-center justify-center text-${item.color}-400`}>
                      {item.icon}
                    </div>
                    <span className="text-[10px] sm:text-sm font-medium text-gray-300 whitespace-nowrap">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* ---------------- DASHBOARD POP-UP SECTION (BOUNCY EFFECT) ---------------- */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1, margin: "-100px" }}
        className="relative z-10 w-full pb-20 pt-8 bg-[#030712]"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, y: 120 }} 
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1, margin: "-100px" }}
          transition={{ 
            type: "spring", 
            stiffness: 120, 
            damping: 14,    
            delay: 0.2 
          }}
          className="relative max-w-5xl mx-auto group w-full px-4 sm:px-6"
        >
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/50 to-indigo-600/50 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-700"></div>
          
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-dark-900 shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
            <div className="h-10 sm:h-12 bg-dark-800/80 border-b border-white/10 flex items-center px-4 sm:px-6 justify-between backdrop-blur-sm">
              <div className="flex space-x-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/40"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/40"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/40"></div>
              </div>
              <div className="text-[9px] sm:text-[11px] text-gray-400 font-mono tracking-widest uppercase font-semibold">Dashboard</div>
              <div className="w-8 sm:w-12"></div>
            </div>
            
            <div className="bg-dark-900 min-h-[150px] sm:min-h-[200px] flex items-center justify-center">
              <video 
  autoPlay 
  loop 
  muted 
  playsInline
  className="w-full h-auto block opacity-100 object-cover"
>
  <source src="dashboard.mp4" type="video/mp4" />
</video>
            </div>
          </div>
        </motion.div>
      </motion.section>
      
      <WorkflowSection/>

      {/* WHY CHOOSE US POP-UP */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-24 bg-[#030712] relative"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">Why Indian Advocates Choose JurisTech</h2>
            <p className="text-gray-400 text-lg font-light">Built for efficiency, accuracy, and compliance.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                icon: <Zap className="w-6 h-6" />, 
                title: "Save Time", 
                desc: "Generate in 2 minutes what typically takes 3 hours of manual drafting. Focus on strategy, not typing.",
                color: "blue",
                animConfig: { scale: [1, 1.3, 1], rotate: [0, -20, 20, 0] },
                animTransition: { duration: 1.5, repeat: Infinity, repeatDelay: 2 }
              },
              { 
                icon: <Scale className="w-6 h-6" />, 
                title: "Legally Sound", 
                desc: "Follows standard Indian legal formats, provisions, and stylistic requirements.",
                color: "green",
                animConfig: { rotate: [-25, 25, -25] },
                animTransition: { duration: 0.8, repeat: Infinity, ease: "easeInOut" }
              },
              { 
                icon: <IndianRupee className="w-6 h-6" />, 
                title: "Affordable", 
                desc: "Pay only ₹99 per document. No hidden fees. Pay only for what you use.",
                color: "purple",
                animConfig: { y: [0, -15, 0], scale: [1, 1.1, 1] },
                animTransition: { duration: 1.2, repeat: Infinity, ease: "bounceOut" }
              },
              { 
                icon: <ShieldCheck className="w-6 h-6" />, 
                title: "Court-Ready", 
                desc: "Professional formatting with proper spacing and indentation, ready to download, review and file.",
                color: "amber",
                animConfig: { scale: [1, 1.4, 1], opacity: [1, 0.8, 1] },
                animTransition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-8 rounded-3xl group hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden border border-white/5"
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-${card.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className={`relative z-10 w-14 h-14 rounded-xl bg-${card.color}-500/10 border border-${card.color}-500/30 flex items-center justify-center text-${card.color}-400 mb-6 shadow-[0_0_20px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_25px_rgba(var(--color-${card.color}-500),0.2)] transition-all`}>
                  <motion.div animate={card.animConfig} transition={card.animTransition}>
                    {card.icon}
                  </motion.div>
                </div>
                <h3 className="relative z-10 text-xl font-bold text-white mb-3 tracking-tight">{card.title}</h3>
                <p className="relative z-10 text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <ComparisonSection />

      {/* HOW IT WORKS POP-UP */}
      <motion.section 
        id="how-it-works"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-24 bg-[#030712] relative overflow-hidden"
      >
        <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            className="text-center mb-16 px-6"
          >
            <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-3 block">Workflow</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">How It Works</h2>
          </motion.div>

          <div 
            className="flex w-full overflow-hidden py-6 cursor-pointer custom-marquee-wrapper"
            style={{ 
              maskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)", 
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)" 
            }}
          >
            <div className="flex shrink-0 gap-6 pr-6 custom-marquee-track">
              {[...workflowSteps, ...workflowSteps].map((step, i) => (
                <div 
                  key={`t1-${i}`}
                  className="w-[290px] sm:w-[340px] md:w-[360px] shrink-0 bg-[#030712] border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all duration-500 group/card hover:bg-white/[0.03]"
                >
                  <div className="aspect-video bg-dark-800 rounded-2xl mb-6 overflow-hidden relative shadow-inner">
                    <img 
                      src={step.img} 
                      className="w-full h-full object-cover opacity-70 group-hover/card:opacity-100 group-hover/card:scale-110 transition-all duration-700 ease-out" 
                      alt={step.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/20 to-transparent"></div>
                    <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-${step.color}-500/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-${step.color}-400 shadow-xl`}>
                      {step.icon}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <span className={`flex items-center justify-center w-7 h-7 rounded-lg bg-${step.color}-600 text-white text-xs font-bold shadow-md`}>
                      {step.step}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm pl-10 leading-relaxed font-light">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex shrink-0 gap-6 pr-6 custom-marquee-track" aria-hidden="true">
              {[...workflowSteps, ...workflowSteps].map((step, i) => (
                <div 
                  key={`t2-${i}`}
                  className="w-[290px] sm:w-[340px] md:w-[360px] shrink-0 bg-[#030712] border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all duration-500 group/card hover:bg-white/[0.03]"
                >
                  <div className="aspect-video bg-dark-800 rounded-2xl mb-6 overflow-hidden relative shadow-inner">
                    <img 
                      src={step.img} 
                      className="w-full h-full object-cover opacity-70 group-hover/card:opacity-100 group-hover/card:scale-110 transition-all duration-700 ease-out" 
                      alt={step.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/20 to-transparent"></div>
                    <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-${step.color}-500/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-${step.color}-400 shadow-xl`}>
                      {step.icon}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <span className={`flex items-center justify-center w-7 h-7 rounded-lg bg-${step.color}-600 text-white text-xs font-bold shadow-md`}>
                      {step.step}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm pl-10 leading-relaxed font-light">{step.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </motion.section>
      
      {/* FEATURES POP-UP */}
      <motion.section 
        id="features"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-24 bg-[#030712] relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(37,99,235,0.05)_0%,_transparent_50%)]"></div>
        <div className="max-w-6xl mx-auto px-6 space-y-24 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="flex flex-col md:flex-row items-center gap-12 border border-white/5 bg-dark-900/40 rounded-[2.5rem] p-8 md:p-12 hover:bg-dark-900/60 transition-colors duration-500"
          >
            <div className="w-full md:w-1/2">
              <div className="inline-flex items-center gap-2 mb-6">
                <Settings className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 font-bold text-sm tracking-wide uppercase">Control</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Customizable Version</h3>
              <p className="text-gray-400 text-lg mb-8 font-light leading-relaxed">
                Choose exactly how detailed your document should be. Need a quick notice or an exhaustive comprehensive agreement?
              </p>
              <ul className="space-y-4">
                {["Concise (Essential)", "Standard (Professional)", "Exhaustive (Detailed)"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="bg-dark-800 rounded-3xl border border-white/10 p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Layers className="w-40 h-40 text-white" />
                </div>
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 hover:bg-white/5 transition-colors cursor-pointer group">
                    <span className="text-gray-400 text-sm font-medium group-hover:text-white">Concise</span>
                    <div className="w-5 h-5 rounded-full border border-gray-600"></div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-blue-500/10 border border-blue-500/40 cursor-pointer shadow-[0_0_15px_rgba(37,99,235,0.15)]">
                    <span className="text-blue-400 text-sm font-bold">Standard (Selected)</span>
                    <div className="w-5 h-5 rounded-full border-[5px] border-blue-500"></div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 hover:bg-white/5 transition-colors cursor-pointer group">
                    <span className="text-gray-400 text-sm font-medium group-hover:text-white">Exhaustive</span>
                    <div className="w-5 h-5 rounded-full border border-gray-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="flex flex-col md:flex-row-reverse items-center gap-12 border border-white/5 bg-dark-900/40 rounded-[2.5rem] p-8 md:p-12 hover:bg-dark-900/60 transition-colors duration-500"
          >
            <div className="w-full md:w-1/2">
              <div className="inline-flex items-center gap-2 mb-6">
                <Tally3 className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 font-bold text-sm tracking-wide uppercase">Adaptability</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Tone Control</h3>
              <p className="text-gray-400 text-lg mb-8 font-light leading-relaxed">
                Adapt the legal language to your specific situation. From aggressive demands to neutral agreements.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  Balanced and clear
                </li>
                <li className="flex items-center gap-3 text-gray-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  Strong and compelling
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="bg-dark-800 rounded-3xl border border-white/10 p-8 shadow-2xl w-full max-w-[280px] sm:max-w-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-transparent"></div>
                <div className="relative z-10 px-5 py-3 rounded-xl bg-dark-900 border border-white/10 text-sm font-medium text-gray-400 hover:text-white cursor-pointer hover:border-white/20 transition-all text-center">Professional</div>
                <div className="relative z-10 px-5 py-3 rounded-xl bg-purple-600 text-white text-sm font-bold shadow-[0_0_20px_rgba(147,51,234,0.4)] transform scale-100 sm:scale-110 text-center">Persuasive</div>
                <div className="relative z-10 px-5 py-3 rounded-xl bg-dark-900 border border-white/10 text-sm font-medium text-gray-400 hover:text-white cursor-pointer hover:border-white/20 transition-all text-center">Formal</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      <LegalAssistantSection/>

      {/* PRICING POP-UP */}
      <motion.section 
        id="pricing"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-24 bg-[#030712] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.08)_0%,_transparent_70%)]"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            className="mb-14"
          >
            <motion.div className="inline-block mb-6"><Star className="w-12 h-12 text-blue-500 drop-shadow-[0_0_15px_rgba(37,99,235,0.5)]" /></motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Simple, Transparent Pricing.
            </h2>
            <p className="text-lg sm:text-xl font-light text-gray-400 max-w-2xl mx-auto">
              Most lawyers waste hours on initial drafts. <br className="hidden sm:block" /> JurisTech users finish in minutes.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            whileHover={{ y: -8 }}
            className="max-w-md mx-auto relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-[2rem] blur opacity-25 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative bg-dark-900 rounded-3xl p-10 border border-white/10 shadow-2xl">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-2xl rounded-tr-3xl tracking-widest">PAY PER USE</div>
              
              <h3 className="text-gray-400 uppercase tracking-widest text-sm font-bold mb-4">Standard License</h3>
              <div className="flex items-baseline justify-center gap-1.5 mb-8">
                <span className="text-6xl font-bold text-white tracking-tighter">₹99</span>
                <span className="text-gray-500 font-medium">/ document</span>
              </div>

              <ul className="space-y-5 text-left mb-10 pl-2">
                {[
                  "Unlimited edits before download",
                  "Word, PDF & Text export",
                  "Secure & Private"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-medium text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <a 
                href="https://juristech-v1.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full py-4 bg-white text-dark-950 font-bold rounded-xl hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              >
                Start Generating
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CALL TO ACTION POP-UP */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#030712] py-24"
      >
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            className="relative bg-dark-900/60 rounded-[3rem] p-12 sm:p-16 overflow-hidden text-center border border-white/5 shadow-2xl"
          >
            <div className="absolute inset-0 grid-pattern opacity-[0.05]"></div>
            
            <div className="relative z-10">
              
              <div className="relative w-20 h-20 mx-auto mb-10 flex items-center justify-center">
                
                <motion.div
                  animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inset-0 bg-blue-500 rounded-3xl"
                ></motion.div>
                
                <motion.div 
                  animate={{ 
                    boxShadow: [
                      "0 0 15px rgba(37,99,235,0.4)", 
                      "0 0 50px rgba(37,99,235,0.9)", 
                      "0 0 15px rgba(37,99,235,0.4)"
                    ] 
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-blue-600 rounded-3xl flex items-center justify-center z-10"
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, -15, 15, -15, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2.5 }}
                  >
                    <Zap className="w-10 h-10 text-white fill-white/20 drop-shadow-md" />
                  </motion.div>
                </motion.div>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to do drafting the right way?</h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-12 font-light">Join hundreds of Indian advocates who are saving time and increasing efficiency with JurisTech.</p>

              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://juristech-v1.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-sm font-bold text-white bg-blue-600 rounded-full py-4 px-10 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] hover:bg-blue-500 transition-all duration-300"
              >
                Try JurisTech Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>

     <FAQSection/>
      
      {/* 🔥 MAGIC HERE: Wrapped Animation and Footer together to prevent empty space 🔥 */}
      <div className="relative w-full">
        
        <ScrollRevealSection/>

        {/* Footer is now absolute at the bottom of the animation section */}
        <div className="absolute bottom-0 w-full z-20 pointer-events-none">
          <motion.footer 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            /* यहाँ ग्रेडिएंट लगाया है ताकि फुटर और एनीमेशन एकदम स्मूथली आपस में ब्लेंड हो जाएँ */
            className="pt-24 pb-8 pointer-events-auto bg-gradient-to-t from-[#030712] via-[#030712] to-transparent"
          >
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="flex flex-col mb-12 items-center justify-center">
                <div className="mb-10">
                  <img 
                    src="https://i.ibb.co/zWYNn82b/logo-png.png" 
                    alt="JTC Logo" 
                    className="h-12 sm:h-16 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-500">
                  <button onClick={() => setIsAboutOpen(true)} className="hover:text-white hover:scale-105 transition-all cursor-pointer capitalize">About</button>
                  <button onClick={() => setIsContactOpen(true)} className="hover:text-white hover:scale-105 transition-all cursor-pointer capitalize">Contact</button>
                  <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-white hover:scale-105 transition-all cursor-pointer capitalize">Privacy</button>
                  <button onClick={() => setIsTermsOpen(true)} className="hover:text-white hover:scale-105 transition-all cursor-pointer capitalize">Terms</button>
                </div>
              </div>
              
              <div className="text-center pt-8">
                <p className="text-xs text-gray-600 font-medium tracking-wide">Copyright © JurisTech All Rights Reserved. Made in India 🇮🇳</p>
              </div>
            </div>
          </motion.footer>
        </div>
      </div>

      <InfoModal 
        isOpen={isAboutOpen} 
        onClose={() => setIsAboutOpen(false)}
        lang={lang}
        setLang={setLang}
        title={lang === 'en' ? 'About Us' : 'हमारे बारे में'}
      >
        {lang === 'en' ? (
          <>
            <p className="mb-4 leading-relaxed"><span className="font-bold text-white">Our Vision</span> To democratize legal access in India by blending deep legal expertise with cutting-edge artificial intelligence.</p>
            <p className="mb-4 leading-relaxed"><span className="font-bold text-white">Who We Are</span> JurisTech is an innovative legal-tech startup proudly built in India. We recognized a fundamental challenge in the Indian legal system: drafting high-quality, legally sound documents is often a time-consuming, repetitive, and expensive process. Whether you are a seasoned advocate managing multiple cases or an everyday citizen seeking basic legal recourse, the drafting process shouldn't be a bottleneck.</p>
            <p className="mb-4 leading-relaxed">That’s why we built JurisTech.</p>
            <p className="mb-4 leading-relaxed"><span className="font-bold text-white">What We Do</span> We provide a lightning-fast, AI-driven Legal Drafting Studio tailored specifically for the Indian legal framework. Powered by advanced Generative AI, JurisTech empowers users to generate professional, court-ready documents in a matter of seconds, not hours.</p>
            <p className="mb-4 leading-relaxed">From completely free Legal Notices to affordable, pay-per-use agreements and deeds, we have structured our platform to be accessible to everyone. We believe that technology should empower legal professionals to focus on strategy and advocacy, while handling the heavy lifting of procedural drafting.</p>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">Our Core Values</h3>
            <p className="mb-4 leading-relaxed"><span className="font-bold text-white">Accessibility:</span> Making essential legal tools affordable and available to all.</p>
            <p className="mb-4 leading-relaxed"><span className="font-bold text-white">Accuracy:</span> Delivering precise, highly customizable drafts that respect the nuances of Indian law.</p>
            <p className="mb-4 leading-relaxed"><span className="font-bold text-white">Innovation:</span> Continuously evolving our AI to stay ahead of the curve in legal technology.</p>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">Our Commitment</h3>
            <p className="mb-4 leading-relaxed">While JurisTech is powered by AI, it is built for humans. We are committed to maintaining the highest standards of data privacy and user security. We are not a replacement for professional legal counsel, but rather a powerful toolkit designed to assist, accelerate, and simplify your legal journey.</p>
            <p className="mb-4 leading-relaxed">Join us as we write the future of legal technology in India.</p>
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col-reverse sm:flex-row justify-between gap-3 sm:gap-4">
              <button 
                onClick={() => { setIsAboutOpen(false); setIsTermsOpen(true); }}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-dark-800 hover:bg-dark-700 border border-white/10 text-white text-sm font-bold rounded-xl transition-all shadow-lg w-full sm:w-auto group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                {lang === 'en' ? 'Prev: Terms' : 'पिछला: नियम और शर्तें'}
              </button>
              <button 
                onClick={() => { setIsAboutOpen(false); setIsContactOpen(true); }}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 w-full sm:w-auto group"
              >
                {lang === 'en' ? 'Next: Contact' : 'अगला: संपर्क करें'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="mb-4 leading-relaxed"><span className="font-bold text-white">हमारा विज़न:</span> गहरी कानूनी जानकारी को लेटेस्ट आर्टिफिशियल इंटेलिजेंस के साथ मिलाकर भारत में कानूनी पहुँच को आसान बनाना।</p>
            <p className="mb-4 leading-relaxed"><span className="font-bold text-white">हम कौन हैं?</span> JurisTech एक इनोवेटिव लीगल-टेक स्टार्टअप है जिसे गर्व से भारत में बनाया गया है। हमने भारतीय कानूनी सिस्टम में एक बुनियादी चुनौती को पहचाना: अच्छी क्वालिटी वाले, कानूनी तौर पर सही डॉक्यूमेंट्स बनाना अक्सर समय लेने वाला, बार-बार होने वाला और महंगा प्रोसेस होता है। चाहे आप एक अनुभवी वकील हों जो कई केस मैनेज कर रहे हों या एक आम नागरिक जो बेसिक कानूनी मदद ढूंढ रहा हो, ड्राफ्टिंग प्रोसेस में कोई रुकावट नहीं आनी चाहिए।</p>
            <p className="mb-4 leading-relaxed">इसलिए हमने JurisTech बनाया।</p>
            <p className="mb-4 leading-relaxed"><span className="font-bold text-white">हम क्या करते हैं?</span> हम एक बहुत तेज़, AI से चलने वाला लीगल ड्राफ्टिंग स्टूडियो देते हैं जो खास तौर पर भारतीय कानूनी फ्रेमवर्क के लिए बनाया गया है। एडवांस्ड जेनरेटिव AI से चलने वाला, JurisTech यूज़र्स को घंटों में नहीं, बल्कि कुछ ही सेकंड में प्रोफेशनल, कोर्ट के लिए तैयार डॉक्यूमेंट्स बनाने में मदद करता है।</p>
            <p className="mb-4 leading-relaxed">पूरी तरह से फ्री लीगल नोटिस से लेकर सस्ते, पे-पर-यूज़ एग्रीमेंट और डीड तक, हमने अपने प्लेटफॉर्म को इस तरह से बनाया है कि वह सभी के लिए आसान हो। हमारा मानना है कि टेक्नोलॉजी को लीगल प्रोफेशनल्स को स्ट्रैटेजी और एडवोकेसी पर फोकस करने में मदद करनी चाहिए, साथ ही प्रोसिजरल ड्राफ्टिंग का भारी काम भी संभालना चाहिए।</p>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">हमारी मुख्य वैल्यूज़</h3>
            <p className="mb-4 leading-relaxed"><span className="font-bold text-white">एक्सेसिबिलिटी:</span> ज़रूरी लीगल टूल्स को सभी के लिए सस्ता और उपलब्ध कराना।</p>
            <p className="mb-4 leading-relaxed"><span className="font-bold text-white">एक्यूरेसी:</span> सटीक, बहुत ज़्यादा कस्टमाइज़ेबल ड्राफ्ट देना जो भारतीय कानून की बारीकियों का सम्मान करते हों।</p>
            <p className="mb-4 leading-relaxed"><span className="font-bold text-white">इनोवेशन:</span> लीगल टेक्नोलॉजी में सबसे आगे रहने के लिए अपने AI को लगातार बेहतर बनाना।</p>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">हमारा कमिटमेंट</h3>
            <p className="mb-4 leading-relaxed">हालांकि JurisTech AI से चलता है, लेकिन इसे इंसानों के लिए बनाया गया है। हम डेटा प्राइवेसी और यूज़र सिक्योरिटी के सबसे ऊंचे स्टैंडर्ड बनाए रखने के लिए कमिटेड हैं। हम प्रोफेशनल लीगल काउंसिल की जगह नहीं ले रहे हैं, बल्कि आपकी लीगल यात्रा में मदद करने, उसे तेज़ करने और आसान बनाने के लिए डिज़ाइन किया गया एक पावरफुल टूलकिट हैं।</p>
            <p className="mb-4 leading-relaxed">भारत में लीगल टेक्नोलॉजी का भविष्य लिखने के लिए हमसे जुड़ें।</p>
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col-reverse sm:flex-row justify-between gap-3 sm:gap-4">
              <button 
                onClick={() => { setIsAboutOpen(false); setIsTermsOpen(true); }}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-dark-800 hover:bg-dark-700 border border-white/10 text-white text-sm font-bold rounded-xl transition-all shadow-lg w-full sm:w-auto group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                {lang === 'en' ? 'Prev: Terms' : 'पिछला: नियम और शर्तें'}
              </button>
              <button 
                onClick={() => { setIsAboutOpen(false); setIsContactOpen(true); }}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 w-full sm:w-auto group"
              >
                {lang === 'en' ? 'Next: Contact' : 'अगला: संपर्क करें'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </>
        )}
      </InfoModal>

      <InfoModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)}
        lang={lang}
        setLang={setLang}
        title={lang === 'en' ? 'Contact Support' : 'संपर्क करें'}
      >
        {lang === 'en' ? (
          <>
            <p className="mb-4 leading-relaxed">We're here to help! For any questions, support requests, or feedback, please reach out to us.</p>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">Email</h3>
            <p className="mb-4 leading-relaxed"><a href="mailto:contact.jtc.co@gmail.com" className="text-blue-400 hover:underline">contact.jtc.co@gmail.com</a> We typically respond within 24-48 hours.</p>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">Support</h3>
            <p className="mb-4 leading-relaxed">For technical issues, billing questions, or general inquiries, email us at the address above.</p>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">Feedback</h3>
            <p className="mb-4 leading-relaxed">We value your feedback and suggestions! Share your thoughts to help us improve JurisTech by clicking the button below:</p>
            <div className="mb-6">
              <a href="https://forms.gle/DcZ7BvkdL6bqdydA7" target="_blank" className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-lg uppercase tracking-wider text-sm">FEEDBACK</a>
            </div>
            <p className="mb-4 text-xs text-gray-500">JurisTech - AI-Powered Legal Document Generation</p>
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col-reverse sm:flex-row justify-between gap-3 sm:gap-4">
              <button 
                onClick={() => { setIsContactOpen(false); setIsAboutOpen(true); }}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-dark-800 hover:bg-dark-700 border border-white/10 text-white text-sm font-bold rounded-xl transition-all shadow-lg w-full sm:w-auto group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                {lang === 'en' ? 'Prev: About Us' : 'पिछला: हमारे बारे में'}
              </button>
              <button 
                onClick={() => { setIsContactOpen(false); setIsPrivacyOpen(true); }}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 w-full sm:w-auto group"
              >
                {lang === 'en' ? 'Next: Privacy' : 'अगला: प्राइवेसी'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="mb-4 leading-relaxed">हम मदद के लिए यहाँ हैं! किसी भी प्रश्न, सहायता अनुरोध या फ़ीडबैक के लिए, कृपया हमसे संपर्क करें।</p>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">ईमेल</h3>
            <p className="mb-4 leading-relaxed"><a href="mailto:contact.jtc.co@gmail.com" className="text-blue-400 hover:underline">contact.jtc.co@gmail.com</a> हम आम तौर पर 24-48 घंटों के भीतर जवाब देते हैं।</p>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">सहायता (Support)</h3>
            <p className="mb-4 leading-relaxed">तकनीकी समस्याओं, बिलिंग प्रश्नों या सामान्य पूछताछ के लिए, ऊपर दिए गए पते पर हमें ईमेल करें।</p>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">फ़ीडबैक</h3>
            <p className="mb-4 leading-relaxed">हम आपके फ़ीडबैक और सुझावों को महत्व देते हैं! नीचे दिए गए बटन पर क्लिक करके JurisTech को बेहतर बनाने में हमारी मदद करने के लिए अपने विचार साझा करें:</p>
            <div className="mb-6">
              <a href="https://forms.gle/DcZ7BvkdL6bqdydA7" target="_blank" className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-lg uppercase tracking-wider text-sm">फ़ीडबैक (FEEDBACK)</a>
            </div>
            <p className="mb-4 text-xs text-gray-500">JurisTech - AI-संचालित कानूनी दस्तावेज़ निर्माण</p>
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col-reverse sm:flex-row justify-between gap-3 sm:gap-4">
              <button 
                onClick={() => { setIsContactOpen(false); setIsAboutOpen(true); }}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-dark-800 hover:bg-dark-700 border border-white/10 text-white text-sm font-bold rounded-xl transition-all shadow-lg w-full sm:w-auto group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                {lang === 'en' ? 'Prev: About Us' : 'पिछला: हमारे बारे में'}
              </button>
              <button 
                onClick={() => { setIsContactOpen(false); setIsPrivacyOpen(true); }}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 w-full sm:w-auto group"
              >
                {lang === 'en' ? 'Next: Privacy' : 'अगला: प्राइवेसी'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </>
        )}
      </InfoModal>

      <InfoModal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)}
        lang={lang}
        setLang={setLang}
        title={lang === 'en' ? 'Privacy Policy' : 'प्राइवेसी पॉलिसी'}
      >
        {lang === 'en' ? (
          <>
            <p className="mb-4 leading-relaxed">Last Updated: April 19, 2026</p>
            <p className="mb-4 leading-relaxed">Welcome to JurisTech. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your data when you use our AI-powered legal document generation platform.</p>
            
            <h3 className="font-bold text-white text-lg mt-6 mb-3">1. Information We Collect</h3>
            <p className="mb-4 leading-relaxed font-bold text-white">Personal Information:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Name, email address, and encrypted password when you create an account</li>
              <li>Name and email address when submitting feedback or suggestions</li>
            </ul>
            
            <p className="mb-4 leading-relaxed font-bold text-white">Document Data:</p>
            <p className="mb-4 leading-relaxed">Information you enter to generate documents (processed by Google Gemini AI, not permanently stored)</p>
            
            <p className="mb-4 leading-relaxed font-bold text-white">Local Storage & Auto-Fill:</p>
            <p className="mb-4 leading-relaxed">To enhance your experience, we use your browser's Local Storage to save your 'Advocate Profile' preferences (e.g., Name, Bar Council Number, Court Name) for auto-filling forms. This specific profile data remains securely on your device and is not permanently saved to our cloud databases.</p>
            
            <p className="mb-4 leading-relaxed font-bold text-white">Reference Files & Uploads:</p>
            <p className="mb-4 leading-relaxed">To enhance the accuracy of generated legal drafts, users may voluntarily upload reference documents (PDFs, Word files, Images). These files are strictly used as context for our AI engine.</p>
            
            <p className="mb-4 leading-relaxed font-bold text-white">Usage Data:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>IP address, device type, browser type, and Service interaction</li>
              <li>Document types generated and download history</li>
            </ul>
            
            <p className="mb-4 leading-relaxed font-bold text-white">Payment Information:</p>
            <p className="mb-4 leading-relaxed">Transaction details processed by Razorpay (we do not store card/bank details)</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">2. How We Use Your Information</h3>
            <p className="mb-4 leading-relaxed">We use your data to:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Provide and improve our Service</li>
              <li>Process payments and send receipts</li>
              <li>Respond to inquiries and feedback</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">3. Data Sharing</h3>
            <p className="mb-4 leading-relaxed">We do not sell your personal information.</p>
            <p className="mb-4 leading-relaxed">We share data only with:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Razorpay (payment processing)</li>
              <li>Google Gemini AI (document generation)</li>
              <li>Law enforcement (if required by law)</li>
            </ul>

            <p className="mb-4 leading-relaxed font-bold text-white">Third-Party AI Processors:</p>
            <p className="mb-4 leading-relaxed">We utilize advanced third-party AI models (e.g., Google Gemini API) to process your uploaded reference files and form data. By uploading documents, you consent to this data being securely transmitted to our AI partners solely for the purpose of generating your requested draft.</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">4. Cookies</h3>
            <p className="mb-4 leading-relaxed">We use cookies to keep you logged in, remember preferences, and analyze usage. You can manage cookies through your browser settings.</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">5. Data Security</h3>
            <p className="mb-4 leading-relaxed">We use SSL encryption, password protection, and secure payment processing. However, no internet transmission is 100% secure.</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">6. Data Retention</h3>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Account info: While account is active</li>
              <li>Transactions: 7 years (legal requirement)</li>
              <li>Document inputs: Processed temporarily, not stored permanently</li>
            </ul>

            <p className="mb-4 leading-relaxed font-bold text-white">No Permanent Storage of Uploaded Files:</p>
            <p className="mb-4 leading-relaxed">Uploaded reference files (PDFs, Images, etc.) are processed in real-time or memory and are not permanently stored in our databases. Only the final generated text and input form data are saved in your history for your future access.</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">7. Your Rights</h3>
            <p className="mb-4 leading-relaxed">You can:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Access your data</li>
              <li>Correct inaccurate information</li>
              <li>Delete your account</li>
              <li>Opt out of marketing</li>
              <li>Withdraw consent</li>
            </ul>
            <p className="mb-4 leading-relaxed">Contact us at <a href="mailto:contact.jtc.co@gmail.com" className="text-blue-400 hover:underline">contact.jtc.co@gmail.com</a> to exercise these rights.</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">8. Third-Party Services</h3>
            <p className="mb-4 leading-relaxed">We integrate with Google Gemini AI and Razorpay, which have their own privacy policies.</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">9. Children's Privacy</h3>
            <p className="mb-4 leading-relaxed">Our Service is not for individuals under 18.</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">10. Changes to This Policy</h3>
            <p className="mb-4 leading-relaxed">We may update this policy. Continued use after changes means you accept the updates.</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">11. Contact Us</h3>
            <p className="mb-4 leading-relaxed">Email: <a href="mailto:contact.jtc.co@gmail.com" className="text-blue-400 hover:underline">contact.jtc.co@gmail.com</a></p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">12. Governing Law</h3>
            <p className="mb-4 leading-relaxed">This policy is governed by Indian law.</p>
            <p className="mb-4 leading-relaxed">By using JurisTech, you agree to this Privacy Policy.</p>
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col-reverse sm:flex-row justify-between gap-3 sm:gap-4">
              <button 
                onClick={() => { setIsPrivacyOpen(false); setIsContactOpen(true); }}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-dark-800 hover:bg-dark-700 border border-white/10 text-white text-sm font-bold rounded-xl transition-all shadow-lg w-full sm:w-auto group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                {lang === 'en' ? 'Prev: Contact' : 'पिछला: संपर्क करें'}
              </button>
              <button 
                onClick={() => { setIsPrivacyOpen(false); setIsTermsOpen(true); }}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 w-full sm:w-auto group"
              >
                {lang === 'en' ? 'Next: Terms' : 'अगला: नियम और शर्तें'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="mb-4 leading-relaxed"> पिछला अपडेट: 19 अप्रैल, 2026</p>
            <p className="mb-4 leading-relaxed">JurisTech में आपका स्वागत है। आपकी प्राइवेसी हमारे लिए महत्वपूर्ण है। यह प्राइवेसी पॉलिसी बताती है कि जब आप हमारे AI-संचालित कानूनी दस्तावेज़ निर्माण प्लेटफ़ॉर्म का उपयोग करते हैं तो हम आपका डेटा कैसे एकत्र, उपयोग और सुरक्षित करते हैं।</p>
            
            <h3 className="font-bold text-white text-lg mt-6 mb-3">1. जानकारी जो हम एकत्र करते हैं</h3>
            <p className="mb-4 leading-relaxed font-bold text-white">व्यक्तिगत जानकारी:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>जब आप खाता बनाते हैं तो नाम, ईमेल पता और एन्क्रिप्टेड पासवर्ड</li>
              <li>फ़फ़ीडबैक और सुझाव सबमिट करते समय नाम और ईमेल पता</li>
            </ul>
            
            <p className="mb-4 leading-relaxed font-bold text-white">दस्तावेज़ डेटा:</p>
            <p className="mb-4 leading-relaxed">दस्तावेज़ जेनरेट करने के लिए आपके द्वारा दर्ज की गई जानकारी (Google Gemini AI द्वारा संसाधित, स्थायी रूप से संग्रहीत नहीं)</p>
            
            <p className="mb-4 leading-relaxed font-bold text-white">लोकल स्टोरेज और ऑटो-फिल:</p>
            <p className="mb-4 leading-relaxed">आपके अनुभव को बेहतर बनाने के लिए, हम फॉर्म को ऑटो-फिल करने के लिए आपके 'एडवोकेट प्रोफाइल' (जैसे नाम, बार काउंसिल नंबर, कोर्ट का नाम) को आपके ब्राउज़र के लोकल स्टोरेज में सेव करते हैं। यह डेटा सुरक्षित रूप से आपके डिवाइस पर ही रहता है और हमारे क्लाउड डेटाबेस में परमानेंट रूप से सेव नहीं होता है।</p>
            
            <p className="mb-4 leading-relaxed font-bold text-white">रेफरेंस फ़ाइलें और अपलोड:</p>
            <p className="mb-4 leading-relaxed">बनाये गए कानूनी ड्राफ़्ट की सटीकता बढ़ाने के लिए, यूज़र अपनी मर्ज़ी से रेफ़रेंस डॉक्यूमेंट (PDF, वर्ड फ़ाइलें, इमेज) अपलोड कर सकते हैं। इन फ़ाइलों का इस्तेमाल सिर्फ़ हमारे AI इंजन के लिए कॉन्टेक्स्ट के तौर पर किया जाता है।</p>
            
            <p className="mb-4 leading-relaxed font-bold text-white">उपयोग डेटा:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>IP पता, डिवाइस का प्रकार, ब्राउज़र का प्रकार और सेवा के साथ इंटरैक्शन</li>
              <li>जेनरेट किए गए दस्तावेज़ों के प्रकार और डाउनलोड इतिहास</li>
            </ul>
            
            <p className="mb-4 leading-relaxed font-bold text-white">डेटा का उपयोग निम्न के लिए करते हैं:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>हमारी सेवा प्रदान करने और सुधारने के लिए</li>
              <li>भुगतान संसाधित करने और रसीदें भेजने के लिए</li>
              <li>पूछताछ और फ़ीडबैक का जवाब देने के लिए</li>
              <li>कानूनी दायित्वों का पालन करने के लिए</li>
            </ul>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">3. डेटा साझा करना</h3>
            <p className="mb-4 leading-relaxed">हम आपकी व्यक्तिगत जानकारी बेचते नहीं हैं।</p>
            <p className="mb-4 leading-relaxed">हम डेटा केवल इनके साथ साझा करते हैं:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Razorpay (पेमेंट प्रोसेसिंग)</li>
              <li>Google Gemini AI (डॉक्यूमेंट जेनरेशन)</li>
              <li>कानून प्रवर्तन (यदि कानून द्वारा आवश्यक हो)</li>
            </ul>

            <p className="mb-4 leading-relaxed font-bold text-white">थर्ड-पार्टी AI प्रोसेसर:</p>
            <p className="mb-4 leading-relaxed">हम आपकी अपलोड की गई रेफ़रेंस फ़ाइलों और फ़ॉर्म डेटा को प्रोसेस करने के लिए एडवांस्ड AI मॉडल (जैसे, Google Gemini API) का इस्तेमाल करते हैं। डॉक्यूमेंट अपलोड करके, आप इस डेटा को सिर्फ़ आपके रिक्वेस्ट किए गए ड्राफ़्ट को बनाने के मकसद से हमारे AI पार्टनर को सुरक्षित रूप से भेजने की मंज़ूरी देते हैं।</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">4. कुकीज़ (Cookies)</h3>
            <p className="mb-4 leading-relaxed">हम आपको लॉग इन रखने, प्राथमिकताओं को याद रखने और उपयोग का विश्लेषण करने के लिए कुकीज़ का उपयोग करते हैं। आप अपनी ब्राउज़र सेटिंग्स के माध्यम से कुकीज़ प्रबंधित कर सकते हैं।</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">5. डेटा सुरक्षा</h3>
            <p className="mb-4 leading-relaxed">हम SSL एन्क्रिप्शन, पासवर्ड सुरक्षा और सुरक्षित पेमेंट प्रोसेसिंग का उपयोग करते हैं। हालांकि, कोई भी internet ट्रांसमिशन 100% सुरक्षित नहीं है।</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">6. डेटा रिटेंशन</h3>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>खाता जानकारी: जब तक खाता सक्रिय है</li>
              <li>लेनदेन: 7 वर्ष (कानूनी आवश्यकता)</li>
              <li>डॉक्यूमेंट इनपुट: अस्थायी रूप से संसाधित, स्थायी रूप से संग्रहीत नहीं</li>
            </ul>

            <p className="mb-4 leading-relaxed font-bold text-white">अपलोड की गई फ़ाइलों का कोई परमानेंट स्टोरेज नहीं:</p>
            <p className="mb-4 leading-relaxed">अपलोड की गई रेफ़रेंस फ़ाइलें (PDF, इमेज, वगैरह) रियल-टाइम या मेमोरी में प्रोसेस की जाती हैं और हमारे डेटाबेस में परमानेंट रूप से स्टोर नहीं की जाती हैं। सिर्फ़ फ़ाइनल बनाया गया टेक्स्ट और इनपुट फ़ॉर्म डेटा ही आपके भविष्य के एक्सेस के लिए आपकी हिस्ट्री में सेव किया जाता है।</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">7. आपके अधिकार</h3>
            <p className="mb-4 leading-relaxed">आप ये कर सकते हैं:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>अपना डेटा एक्सेस करें</li>
              <li>गलत जानकारी को सही करें</li>
              <li>अपना खाता हटाएँ</li>
              <li>मार्केटिंग से बाहर निकलें</li>
              <li>सहमति वापस लें</li>
            </ul>
            <p className="mb-4 leading-relaxed">इन अधिकारों का उपयोग करने के लिए <a href="mailto:contact.jtc.co@gmail.com" className="text-blue-400 hover:underline">contact.jtc.co@gmail.com</a> पर हमसे संपर्क करें।</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">8. तृतीय-पक्ष सेवाएँ</h3>
            <p className="mb-4 leading-relaxed">हम Google Gemini AI और Razorpay के साथ एकीकृत हैं, जिनकी अपनी गोपनीयता नीतियां हैं।</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">9. बच्चों की गोपनीयता</h3>
            <p className="mb-4 leading-relaxed">हमारी सेवा 18 वर्ष से कम उम्र के लोगों के लिए नहीं है।</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">10. इस नीति में बदलाव</h3>
            <p className="mb-4 leading-relaxed">हम इस नीति को अपडेट कर सकते हैं। बदलावों के बाद निरंतर उपयोग का अर्थ है कि आप अपडेट स्वीकार करते हैं।</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">11. हमसे संपर्क करें</h3>
            <p className="mb-4 leading-relaxed">ईमेल: <a href="mailto:contact.jtc.co@gmail.com" className="text-blue-400 hover:underline">contact.jtc.co@gmail.com</a></p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">12. शासी कानून (Governing Law)</h3>
            <p className="mb-4 leading-relaxed">यह नीति भारतीय कानून द्वारा शासित है।</p>
            <p className="mb-4 leading-relaxed">JurisTech का उपयोग करके, आप इस प्राइवेसी पॉलिसी से सहमत हैं।</p>
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col-reverse sm:flex-row justify-between gap-3 sm:gap-4">
              <button 
                onClick={() => { setIsPrivacyOpen(false); setIsContactOpen(true); }}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-dark-800 hover:bg-dark-700 border border-white/10 text-white text-sm font-bold rounded-xl transition-all shadow-lg w-full sm:w-auto group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                {lang === 'en' ? 'Prev: Contact' : 'पिछला: संपर्क करें'}
              </button>
              <button 
                onClick={() => { setIsPrivacyOpen(false); setIsTermsOpen(true); }}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 w-full sm:w-auto group"
              >
                {lang === 'en' ? 'Next: Terms' : 'अगला: नियम और शर्तें'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </>
        )}
      </InfoModal>

      <InfoModal 
        isOpen={isTermsOpen} 
        onClose={() => setIsTermsOpen(false)}
        lang={lang}
        setLang={setLang}
        title={lang === 'en' ? 'Terms and Conditions' : 'नियम और शर्तें'}
      >
        {lang === 'en' ? (
          <>
            <p className="mb-4 leading-relaxed">Last Updated: April 19, 2026</p>
            <p className="mb-4 leading-relaxed">Welcome to JurisTech! These Terms govern your use of our AI-powered legal document generation platform. By using our Service, you agree to these Terms.</p>
            
            <h3 className="font-bold text-white text-lg mt-6 mb-3">1. Definitions</h3>
            <p className="mb-4 leading-relaxed"><span className="font-bold text-white">"JurisTech," "we," "our," "us":</span> Provider of AI legal document generation services</p>
            <p className="mb-4 leading-relaxed"><span className="font-bold text-white">"User," "you," "your":</span> Anyone using our Service</p>
            <p className="mb-4 leading-relaxed"><span className="font-bold text-white">"Service":</span> JurisTech platform and features</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">2. Eligibility</h3>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>You must be at least 18 years old</li>
              <li>You must provide a valid email and password</li>
              <li>You are responsible for your account security</li>
              <li>One account per person</li>
            </ul>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">3. Service Description</h3>
            <p className="mb-4 leading-relaxed">JurisTech provides:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>AI-powered document generation (Google Gemini AI)</li>
              <li>12+ document types</li>
              <li>Customizable version and tone</li>
              <li>Download in Text, Word, PDF formats</li>
              <li>Pricing: Legal Notice is 100% Free. All other premium documents are ₹99 for up to 4 generation attempts.</li>
            </ul>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">4. Acceptable Use</h3>
            <p className="mb-4 leading-relaxed">You agree to:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Use the Service lawfully</li>
              <li>Provide accurate information</li>
              <li>Not misuse or interfere with functionality</li>
              <li>Not create fraudulent documents</li>
              <li>Not use bots or automated tools</li>
              <li>Not reverse-engineer our Service</li>
              <li><span className="font-bold text-white">User Responsibility for Uploaded Content:</span> You represent and warrant that you have the necessary rights, permissions, and client consent to upload any reference documents to our platform. You agree not to upload highly sensitive, unredacted personal identifiers (like exact Aadhaar, PAN, or Bank Account numbers) unless absolutely necessary, and you bear sole responsibility for any data breach arising from your failure to anonymize such data.</li>
            </ul>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">5. Payment Terms</h3>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li><span className="font-bold text-white">Price:</span> Legal Notice is 100% Free. All other premium documents are ₹99 for up to 4 generation attempts.</li>
              <li><span className="font-bold text-white">Payment:</span> Via Razorpay (Card, UPI, Net Banking)</li>
              <li><span className="font-bold text-white">Timing:</span> Payment is required strictly before the document generation process begins. The payment gateway will be triggered immediately upon selecting a premium document type.</li>
              <li><span className="font-bold text-white">Taxes:</span> Inclusive</li>
              <li><span className="font-bold text-white">Receipt:</span> Upon successful payment, a digital transaction receipt will be instantly displayed on your screen with an option to download it directly to your device. We do not send automated email receipts.</li>
            </ul>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">6. Refund and Cancellation Policy</h3>
            <h4 className="font-bold text-white text-lg mt-6 mb-3">6.1 When Refunds Are Provided</h4>
            <p className="mb-4 leading-relaxed">Refund if:</p>
            <p className="mb-4 leading-relaxed"><span className="font-bold text-white">Duplicate Payment:</span> If you are charged multiple times for a single transaction. (Note: Verification is strictly performed against our internal Payment Gateway Dashboard. If our records indicate only one successful transaction, no refund shall be granted, and you are advised to coordinate with your bank).</p>
            
            <p className="mb-4 leading-relaxed font-bold text-white">No refund if:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Document is successfully generated and displayed on your screen (Generation constitutes full delivery of service).</li>
              <li>If a document fails to generate due to a temporary technical error on our platform, your generation credit will not be deducted. You can simply attempt to generate the document again. We do not issue cash refunds for temporary server errors or downtime.</li>
              <li>You entered incorrect information or inputs.</li>
              <li>You are dissatisfied with the content (you can use your remaining attempts to regenerate with corrected inputs).</li>
              <li>You changed your mind after the document has been generated.</li>
            </ul>
            
            <h4 className="font-bold text-white text-lg mt-6 mb-3">6.2 Refund Process</h4>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Email <a href="mailto:contact.jtc.co@gmail.com" className="text-blue-400 hover:underline">contact.jtc.co@gmail.com</a> within 7 days with your transaction ID.</li>
              <li>We will review the request within 2 business days.</li>
              <li>If approved, the refund will be processed to the original payment method within 7-10 days.</li>
            </ul>
            
            <h4 className="font-bold text-white text-lg mt-6 mb-3">6.3 Cancellation</h4>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li><span className="font-bold text-white">Before payment:</span> You can cancel or abandon the process anytime without any charge.</li>
              <li><span className="font-bold text-white">After document generation:</span> Once the AI generates the document and it appears on your screen, the service is considered fully consumed. Therefore, no cancellations or refunds are permitted under any circumstances at this stage.</li>
            </ul>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">7. Important Disclaimers</h3>
            <h4 className="font-bold text-white text-lg mt-6 mb-3">7.1 Not Legal Advice</h4>
            <p className="mb-4 leading-relaxed">JurisTech provides document tools, NOT legal advice. We are not a law firm.</p>
            <h4 className="font-bold text-white text-lg mt-6 mb-3">7.2 Professional Review Required</h4>
            <p className="mb-4 leading-relaxed">All documents MUST be reviewed by a qualified lawyer before use.</p>
            <h4 className="font-bold text-white text-lg mt-6 mb-3">7.3 No Guarantees</h4>
            <p className="mb-4 leading-relaxed">We don't guarantee documents are error-free, suitable for your situation, or accepted by courts. You verify accuracy and suitability.</p>

            <h4 className="font-bold text-white text-lg mt-6 mb-3">7.4 AI Interpretation & Handwriting</h4>
            <p className="mb-4 leading-relaxed">While our AI aims to accurately transcribe and interpret uploaded documents, including handwritten notes via images, we do not guarantee 100% accuracy. Poor image quality or illegible handwriting may lead to omissions or errors in the generated draft. The user must thoroughly review, edit, and verify the final document before legal use.</p>

            <h4 className="font-bold text-white text-lg mt-6 mb-3">7.5 Auto-Fill Accuracy</h4>
            <p className="mb-4 leading-relaxed">If you utilize the 'Advocate Profile' auto-fill feature, it is your sole responsibility to review and verify the pre-filled information in the drafting form before generating the final legal document. JurisTech is not liable for any errors arising from outdated or incorrect auto-filled data.</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">8. Limitation of Liability</h3>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Service provided "AS IS"</li>
              <li>We are not liable for indirect or consequential damages</li>
              <li>Not responsible for legal outcomes</li>
              <li>Maximum liability: ₹99 (amount paid)</li>
            </ul>
            <p className="mb-4 leading-relaxed font-bold">You use the Service at your own risk.</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">9. Intellectual Property</h3>
            <h4 className="font-bold text-white text-lg mt-6 mb-3">9.1 Your Documents</h4>
            <p className="mb-4 leading-relaxed">You own generated documents and can use them freely.</p>
            <h4 className="font-bold text-white text-lg mt-6 mb-3">9.2 Our Platform</h4>
            <p className="mb-4 leading-relaxed">JurisTech platform, code, and trademarks belong to us. Do not copy or reverse-engineer.</p>
            <h4 className="font-bold text-white text-lg mt-6 mb-3">9.3 AI Technology</h4>
            <p className="mb-4 leading-relaxed">We use Google Gemini AI (owned by Google).</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">10. Privacy</h3>
            <p className="mb-4 leading-relaxed">See our Privacy Policy for how we handle your data.</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">11. Third-Party Services</h3>
            <p className="mb-4 leading-relaxed">We integrate with Razorpay and Google Gemini AI. We're not responsible for their practices.</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">12. Account Termination</h3>
            <p className="mb-4 leading-relaxed">We may suspend/terminate accounts for Terms violations. You may close your account anytime.</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">13. Changes to Terms</h3>
            <p className="mb-4 leading-relaxed">We may update these Terms. Continued use means acceptance.</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">14. Dispute Resolution</h3>
            <p className="mb-4 leading-relaxed">Contact us first: <a href="mailto:contact.jtc.co@gmail.com" className="text-blue-400 hover:underline">contact.jtc.co@gmail.com</a></p>
            <p className="mb-4 leading-relaxed">Unresolved disputes: Arbitration under Indian law</p>
            <p className="mb-4 leading-relaxed">Jurisdiction: Indian courts</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">15. Severability</h3>
            <p className="mb-4 leading-relaxed">If any provision is invalid, remaining provisions continue.</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">16. Entire Agreement</h3>
            <p className="mb-4 leading-relaxed">These Terms and our Privacy Policy constitute the complete agreement.</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">17. Contact</h3>
            <p className="mb-4 leading-relaxed">Email: <a href="mailto:contact.jtc.co@gmail.com" className="text-blue-400 hover:underline">contact.jtc.co@gmail.com</a></p>
            <p className="mb-4 leading-relaxed">By using JurisTech, you agree to these Terms and Conditions.</p>
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col-reverse sm:flex-row justify-between gap-3 sm:gap-4">
              <button 
                onClick={() => { setIsTermsOpen(false); setIsPrivacyOpen(true); }}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-dark-800 hover:bg-dark-700 border border-white/10 text-white text-sm font-bold rounded-xl transition-all shadow-lg w-full sm:w-auto group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                {lang === 'en' ? 'Prev: Privacy' : 'पिछला: प्राइवेसी'}
              </button>
              <button 
                onClick={() => { setIsTermsOpen(false); setIsAboutOpen(true); }}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 w-full sm:w-auto group"
              >
                {lang === 'en' ? 'Next: About Us' : 'अगला: हमारे बारे में'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="mb-4 leading-relaxed"> पिछला अपडेट: 19 अप्रैल, 2026</p>
            <p className="mb-4 leading-relaxed">JurisTech में आपका स्वागत है! ये शर्तें हमारे AI-पावर्ड लीगल डॉक्यूमेंट जेनरेशन प्लेटफ़ॉर्म के आपके इस्तेमाल को गाइड करती हैं। हमारी सर्विस का इस्तेमाल करके, आप इन शर्तों से सहमत होते हैं。</p>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">1. परिभाषाएँ</h3>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li><span className="font-bold text-white">"JurisTech," "हम," "हमारे," "हमें":</span> AI लीगल डॉक्यूमेंट जेनरेशन सर्विसेज़ देने वाले</li>
              <li><span className="font-bold text-white">"यूज़र," "आप," "आपका":</span> हमारी सर्विस का इस्तेमाल करने वाला कोई भी व्यक्ति</li>
              <li><span className="font-bold text-white">"सर्विस":</span> JurisTech प्लेटफ़ॉर्म and इसके फ़ीचर्स</li>
            </ul>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">2. पात्रता (Eligibility)</h3>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>आपकी उम्र कम से कम 18 साल होनी चाहिए</li>
              <li>आपको एक मान्य ईमेल और पासवर्ड देना होगा</li>
              <li>आप अपने अकाउंट की सिक्योरिटी के लिए ज़िम्मेदार हैं</li>
              <li>एक व्यक्ति के लिए एक ही अकाउंट</li>
            </ul>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">3. सर्विस का विवरण</h3>
            <p className="mb-4 leading-relaxed">JurisTech देता है:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>AI-पावर्ड डॉक्यूमेंट जेनरेशन (Google Gemini AI)</li>
              <li>12+ तरह के डॉक्यूमेंट्स</li>
              <li>कस्टमाइज़ेबल वर्ज़न और टोन</li>
              <li>Text, Word, PDF फॉर्मेट में डाउनलोड</li>
              <li>कीमत: लीगल नोटिस 100% फ्री है। बाकी सभी प्रीमियम डॉक्यूमेंट्स के लिए 4 बार जेनरेट करने की कोशिश के लिए ₹99 शुल्क है।</li>
            </ul>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">4. इस्तेमाल करने के सही तरीके</h3>
            <p className="mb-4 leading-relaxed">आप इस बात से सहमत हैं:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>सर्विस का कानूनी रूप से इस्तेमाल करना</li>
              <li>सटीक जानकारी देना</li>
              <li>सर्विस का गलत इस्तेमाल न करना या उसके काम में रुकावट न डालना</li>
              <li>धोखाधड़ी वाले डॉक्यूमेंट्स न बनाना</li>
              <li>बोट्स या ऑटोमेटेड टूल्स का इस्तेमाल न करना</li>
              <li>हमारी सर्विस की रिवर्स-इंजीनियरिंग न करना</li>
              <li><span className="font-bold text-white">अपलोड किए गए कंटेंट के लिए यूज़र की ज़िम्मेदारी:</span> आप बताते हैं और गारंटी देते हैं कि हमारे प्लेटफ़ॉर्म पर कोई भी रेफरेंस डॉक्यूमेंट अपलोड करने के लिए आपके पास ज़रूरी अधिकार, परमिशन और क्लाइंट की सहमति है। आप सहमत हैं कि जब तक बहुत ज़रूरी न हो, आप बहुत सेंसिटिव, बिना बदलाव वाले पर्सनल आइडेंटिफ़ायर (जैसे सटीक आधार, पैन, या बैंक अकाउंट नंबर) अपलोड नहीं करेंगे, और ऐसे डेटा को एनॉनिमाइज़ न करने से होने वाले किसी भी डेटा ब्रीच के लिए पूरी तरह से आप ज़िम्मेदार होंगे।</li>
            </ul>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">5. पेमेंट की शर्तें</h3>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li><span className="font-bold text-white">कीमत:</span> लीगल नोटिस 100% फ्री है। बाकी सभी प्रीमियम डॉक्यूमेंट्स के लिए 4 बार जेनरेट करने की कोशिश के लिए ₹99 शुल्क है।</li>
              <li><span className="font-bold text-white">पेमेंट:</span> Razorpay (कार्ड, UPI, नेट बैंकिंग) के ज़रिए</li>
              <li><span className="font-bold text-white">समय:</span> डॉक्यूमेंट जेनरेशन प्रोसेस शुरू होने से पहले पेमेंट करना ज़रूरी है। प्रीमियम डॉक्यूमेंट टाइप को चुनते ही पेमेंट गेटवे शुरू हो जाएगा।</li>
              <li><span className="font-bold text-white">टैक्स:</span> शामिल है</li>
              <li><span className="font-bold text-white">रसीद:</span> सफल पेमेंट होने के बाद, आपकी स्क्रीन पर तुरंत एक डिजिटल ट्रांज़ैक्शन रसीद दिखाई जाएगी जिसे आप सीधे अपने डिवाइस पर डाउनलोड कर सकते हैं। हम ऑटोमेटेड ईमेल रसीदें नहीं भेजते हैं।</li>
            </ul>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">6. रिफंड और कैंसलेशन पॉलिसी</h3>
            <h4 className="font-bold text-white text-lg mt-6 mb-3">6.1 रिफंड कब दिया जाता है</h4>
            <p className="mb-4 leading-relaxed">रिफंड मिलेगा अगर:</p>
            <p className="mb-4 leading-relaxed"><span className="font-bold text-white">डुप्लीकेट पेमेंट:</span> अगर आपसे एक ही ट्रांज़ैक्शन के लिए कई बार पैसे लिए जाते हैं। (नोट: वेरिफिकेशन सिर्फ़ हमारे इंटरनल पेमेंट गेटवे डैशबोर्ड के ज़रिए किया जाता है। अगर हमारे रिकॉर्ड में सिर्फ़ एक सफल ट्रांज़ैक्शन दिखता है, तो कोई रिफंड नहीं दिया जाएगा और आपको अपने बैंक से बात करने की सलाह दी जाती है)।</p>
            <p className="mb-4 leading-relaxed font-bold text-white">इन मामलों में कोई रिफंड नहीं मिलेगा:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>डॉक्यूमेंट सफलतापूर्वक जेनरेट होने और आपकी स्क्रीन पर दिखने के बाद (जेनरेशन का मतलब है सर्विस की पूरी डिलीवरी)।</li>
              <li>अगर हमारे प्लेटफ़ॉर्म पर किसी टेम्पररी टेक्निकल एरर के कारण डॉक्यूमेंट जेनरेट नहीं हो पाता है, तो आपका जेनरेशन क्रेडिट नहीं काटा जाएगा। आप बस फिर से डॉक्यूमेंट जेनरेट करने की कोशिश कर सकते हैं। हम टेम्पररी सर्वर एरर या डाउनटाइम के लिए कैश रिफंड जारी नहीं करते हैं।</li>
              <li>आपने गलत जानकारी या इनपुट डाले हैं।</li>
              <li>आप कंटेंट से संतुष्ट नहीं हैं (आप सही इनपुट के साथ फिर से जेनरेट करने के लिए अपनी बाकी कोशिशों का इस्तेमाल कर सकते हैं)।</li>
              <li>डॉक्यूमेंट जेनरेट होने के बाद आपने अपना मन बदल लिया है।</li>
            </ul>
            <h4 className="font-bold text-white text-lg mt-6 mb-3">6.2 रिफंड प्रोसेस</h4>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>अपनी ट्रांज़ैक्शन आईडी के साथ 7 दिनों के भीतर <a href="mailto:contact.jtc.co@gmail.com" className="text-blue-400 hover:underline">contact.jtc.co@gmail.com</a> पर ईमेल करें।</li>
              <li>हम 2 वर्किंग डेज़ के भीतर रिक्वेस्ट की जांच करेंगे।</li>
              <li>अगर एप्रूव हो जाता है, तो रिफंड 7-10 दिनों के भीतर ओरिजिनल पेमेंट मेथड में वापस आ जाएगा।</li>
            </ul>
            <h4 className="font-bold text-white text-lg mt-6 mb-3">6.3 कैंसलेशन</h4>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li><span className="font-bold text-white">पेमेंट से पहले:</span> आप किसी भी समय बिना किसी शुल्क के प्रोसेस को कैंसिल कर सकते हैं या बंद कर सकते हैं।</li>
              <li><span className="font-bold text-white">डॉक्यूमेंट जेनरेशन के बाद:</span> एक बार जब AI डॉक्यूमेंट जेनरेट कर देता है और वह आपकी स्क्रीन पर दिखाई देता है, तो service को पूरी तरह से इस्तेमाल किया हुआ माना जाता है। इसलिए, इस लेवल पर किसी भी स्थिति में कैंसलेशन या रिफंड की अनुमति नहीं है।</li>
            </ul>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">7. ज़रूरी डिस्क्लेमर</h3>
            <h4 className="font-bold text-white text-lg mt-6 mb-3">7.1 कानूनी सलाह नहीं</h4>
            <p className="mb-4 leading-relaxed">JurisTech डॉक्यूमेंट टूल्स देता है, कानूनी सलाह नहीं। हम कोई लॉ फर्म नहीं हैं।</p>
            <h4 className="font-bold text-white text-lg mt-6 mb-3">7.2 Professional रिव्यू ज़रूरी</h4>
            <p className="mb-4 leading-relaxed">इस्तेमाल से पहले सभी डॉक्यूमेंट्स का रिव्यू किसी क्वालिफाइड वकील द्वारा किया जाना चाहिए।</p>
            <h4 className="font-bold text-white text-lg mt-6 mb-3">7.3 कोई गारंटी नहीं</h4>
            <p className="mb-4 leading-relaxed">हम इस बात की गारंटी नहीं देते कि डॉक्यूमेंट्स एरर-फ्री हैं, आपकी स्थिति के लिए सही हैं या कोर्ट द्वारा स्वीकार किए जाएंगे। आप उनकी सटीकता और उपयोगिता को ख़ुद वेरिफाई करें।</p>

            <h4 className="font-bold text-white text-lg mt-6 mb-3">7.4 AI इंटरप्रिटेशन और हैंडराइटिंग</h4>
            <p className="mb-4 leading-relaxed">हालांकि हमारा AI अपलोड किए गए डॉक्यूमेंट, जिसमें इमेज के ज़रिए हाथ से लिखे नोट्स भी शामिल हैं, को सही ढंग से ट्रांसक्राइब और इंटरप्रेट करने का लक्ष्य रखता है, हम 100% एक्यूरेसी की गारंटी नहीं देते हैं। खराब इमेज क्वालिटी या साफ़ न होने वाली हैंडराइटिंग से जेनरेट किए गए ड्राफ़्ट में चूक या गलतियाँ हो सकती हैं। यूज़र को कानूनी इस्तेमाल से पहले फ़ाइनल डॉक्यूमेंट को अच्छी तरह से रिव्यू, एडिट और वेरिफ़ाई करना होगा।</p>

            <h4 className="font-bold text-white text-lg mt-6 mb-3">7.5 ऑटो-फिल की सटीकता</h4>
            <p className="mb-4 leading-relaxed">यदि आप 'एडवोकेट प्रोफाइल' ऑटो-fill फीचर का उपयोग करते हैं, तो अंतिम कानूनी दस्तावेज़ जेनरेट करने से पहले फॉर्म में भरी गई जानकारी को जाँचना और वेरिफाई करना पूरी तरह से आपकी ज़िम्मेदारी है। पुराने या गलत ऑटो-फिल किए गए डेटा से होने वाली किसी भी गलती के लिए JurisTech ज़िम्मेदार नहीं होगा।</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">8. लायबिलिटी की सीमा (Limitation of Liability)</h3>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>सर्विस "AS IS" लेवल पर दी जाती है</li>
              <li>हम किसी भी तरह के नुकसान के लिए ज़िम्मेदार नहीं हैं</li>
              <li>कानूनी परिणामों के लिए ज़िम्मेदार नहीं हैं</li>
              <li>मैक्सिमम लायबिलिटी: ₹99 (भुगतान की गई राशि)</li>
            </ul>
            <p className="mb-4 leading-relaxed font-bold text-white">आप अपने जोखिम पर सर्विस का इस्तेमाल करते हैं।</p>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">9. इंटेलेक्चुअल प्रॉपर्टी</h3>
            <h4 className="font-bold text-white text-lg mt-6 mb-3">9.1 आपके डॉक्यूमेंट्स</h4>
            <p className="mb-4 leading-relaxed">आपके पास जेनरेट किए गए डॉक्यूमेंट्स का मालिकाना हक है और आप उनका स्वतंत्र रूप से इस्तेमाल कर सकते हैं।</p>
            <h4 className="font-bold text-white text-lg mt-6 mb-3">9.2 हमारा प्लेटफ़ॉर्म</h4>
            <p className="mb-4 leading-relaxed">JurisTech प्लेटफ़ॉर्म, कोड और ट्रेडमार्क हमारे हैं। उन्हें कॉपी या रिवर्स-इंजीनियर न करें।</p>
            <h4 className="font-bold text-white text-lg mt-6 mb-3">9.3 AI टेक्नोलॉजी</h4>
            <p className="mb-4 leading-relaxed">हम गूगल जेमिनी AI का इस्तेमाल करते हैं (गूगल का मालिकाना हक)।</p>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">10. प्राइवेसी</h3>
            <p className="mb-4 leading-relaxed">हम आपका डेटा कैसे हैंडल करते हैं, इसके लिए हमारी प्राइवेसी पॉलिसी देखें।</p>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">11. थर्ड-पार्टी सर्विसेज़</h3>
            <p className="mb-4 leading-relaxed">हम रेज़रपे और गूगल जेमिनी AI के साथ इंटीग्रेट करते हैं। हम उनके तौर-तरीकों के लिए ज़िम्मेदार नहीं हैं।</p>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">12. अकाउंट खत्म करना</h3>
            <p className="mb-4 leading-relaxed">हम शर्तों के उल्लंघन के लिए अकाउंट सस्पेंड या खत्म कर सकते हैं। आप किसी भी समय अपना अकाउंट बंद कर सकते हैं।</p>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">13. शर्तों में बदलाव</h3>
            <p className="mb-4 leading-relaxed">हम इन शर्तों को अपडेट कर सकते हैं। लगातार इस्तेमाल का मतलब है कि आप बदलावों को स्वीकार करते हैं।</p>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">14. विवाद सुलझाना</h3>
            <p className="mb-4 leading-relaxed">पहले हमसे कॉन्टैक्ट करें: <a href="mailto:contact.jtc.co@gmail.com" className="text-blue-400 hover:underline">contact.jtc.co@gmail.com</a></p>
            <p className="mb-4 leading-relaxed">अनसुलझे विवाद: भारतीय कानून के तहत आर्बिट्रेशन</p>
            <p className="mb-4 leading-relaxed">क्षेत्राधिकार: भारतीय अदालतें</p>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">15. पृथक्करणीयता (Severability)</h3>
            <p className="mb-4 leading-relaxed">यदि कोई प्रावधान अमान्य है, तो बाकी प्रावधान लागू रहेंगे।</p>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">16. पूरा एग्रीमेंट</h3>
            <p className="mb-4 leading-relaxed">ये शर्तें और हमारी प्राइवेसी पॉलिसी पूरा एग्रीमेंट बनाती हैं।</p>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">17. संपर्क</h3>
            <p className="mb-4 leading-relaxed">ईमेल: <a href="mailto:contact.jtc.co@gmail.com" className="text-blue-400 hover:underline">contact.jtc.co@gmail.com</a></p>
            <p className="mb-4 leading-relaxed">JurisTech का इस्तेमाल करके, आप इन नियमों और शर्तों से सहमत हैं।</p>
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col-reverse sm:flex-row justify-between gap-3 sm:gap-4">
              <button 
                onClick={() => { setIsTermsOpen(false); setIsPrivacyOpen(true); }}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-dark-800 hover:bg-dark-700 border border-white/10 text-white text-sm font-bold rounded-xl transition-all shadow-lg w-full sm:w-auto group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                {lang === 'en' ? 'Prev: Privacy' : 'पिछला: प्राइवेसी'}
              </button>
              <button 
                onClick={() => { setIsTermsOpen(false); setIsAboutOpen(true); }}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 w-full sm:w-auto group"
              >
                {lang === 'en' ? 'Next: About Us' : 'अगला: हमारे बारे में'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </>
        )}
      </InfoModal>

      <AnimatePresence>
        {isFeedbackOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] overflow-y-auto bg-black/80 backdrop-blur-md"
            onClick={() => setIsFeedbackOpen(false)}
          >
            <div className="flex min-h-full items-center justify-center p-4 py-8 sm:py-12 sm:p-6">
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl m-auto bg-gray-900 text-gray-200 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-y-auto max-h-[85vh]"
              >
                <div className="sticky top-0 z-50 pt-6 px-4 sm:px-6 pb-2 flex items-center justify-between gap-2 pointer-events-none bg-transparent border-none shadow-none">
                  
                  <div className="pointer-events-auto flex items-center shrink-0">
                    <img src="https://i.ibb.co/zWYNn82b/logo-png.png" alt="JurisTech" className="h-8 sm:h-10 w-auto object-contain drop-shadow-2xl" referrerPolicy="no-referrer" />
                  </div>

                  <div className="flex-1 flex justify-center pointer-events-auto min-w-0">
                    <span className="bg-gray-900/60 backdrop-blur-xl border border-white/10 shadow-lg px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-sm font-bold text-white tracking-wide truncate max-w-full">
                      Feedback
                    </span>
                  </div>
                  
                  <div className="flex items-center pointer-events-auto shrink-0">
                    <button onClick={() => setIsFeedbackOpen(false)} className="p-2 sm:p-3 rounded-full bg-gray-900/60 backdrop-blur-xl border border-white/10 text-gray-400 hover:text-white transition-all shadow-lg hover:bg-white/10">
                      <X className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-2">
                  <div className="flex flex-col items-center">
                    <h2 className="text-2xl sm:text-3xl text-white font-extrabold text-center mt-10 mb-6 font-sans tracking-tight">
                      Help Us Improve Your Experience
                    </h2>

                    <img 
                      src="https://i.ibb.co/wFXScDP0/COMPANY-S-QR-Code-FOR-FEEDBACK.png" 
                      alt="Feedback QR" 
                      className="mx-auto w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 aspect-square object-contain rounded-3xl bg-white/[0.02] p-4 sm:p-6 shadow-2xl border border-white/10 hover:border-blue-500/30 transition-colors duration-500"
                      referrerPolicy="no-referrer"
                    />

                    <div className="text-gray-500 font-bold my-8 text-center text-sm tracking-widest">
                      OR
                    </div>

                    <a 
                      href="https://forms.gle/DcZ7BvkdL6bqdydA7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full py-4 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-500 transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 shadow-[0_0_20px_rgba(37,99,235,0.4)] uppercase tracking-widest text-center text-lg"
                    >
                      SHARE FEEDBACK
                    </a>
                    
                    <p className="mt-8 text-gray-500 text-xs font-medium tracking-tight">
                      JurisTech - AI-Powered Legal Document Generation
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

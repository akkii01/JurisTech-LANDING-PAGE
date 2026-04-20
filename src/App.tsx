/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
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
  X
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const InfoModal = ({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: ReactNode }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-[90%] max-w-2xl max-h-[80vh] overflow-y-auto p-6 bg-gray-900 text-gray-200 rounded-xl shadow-2xl"
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="selection:bg-blue-500/30">
            {children}
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default function App() {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Modal states for footer links
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dark-950 text-gray-200 selection:bg-blue-500/30 selection:text-blue-200">
      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 top-0 pt-6 px-6 pb-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            href="#" 
            className="flex-shrink-0 group hover:opacity-80 transition-opacity flex items-center gap-2"
          >
            <img 
              src="https://i.ibb.co/zWYNn82b/logo-png.png" 
              alt="JTC Logo" 
              className="w-auto h-26 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-2xl font-bold text-white tracking-tight">JurisTech</span>
          </motion.a>

          {/* Central Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="hidden lg:flex items-center bg-dark-800/80 border-white/10 border rounded-full px-10 py-4 shadow-2xl backdrop-blur-xl gap-10 text-sm font-medium text-gray-400"
          >
            <motion.a 
              whileHover={{ scale: 1.1, color: "#fff" }}
              href="#features" 
              className="hover:text-white transition-colors"
            >
              Features
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, color: "#fff" }}
              href="#how-it-works" 
              className="hover:text-white transition-colors"
            >
              How it works
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, color: "#fff" }}
              href="#pricing" 
              className="hover:text-white transition-colors"
            >
              Pricing
            </motion.a>
            <motion.button 
              whileHover={{ scale: 1.1, color: "#fff" }}
              onClick={() => setIsFeedbackOpen(true)}
              className="hover:text-white transition-colors focus:outline-none"
            >
              Your Feedback
            </motion.button>
          </motion.div>

          {/* CTA */}
          <motion.button 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="hidden lg:flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-dark-900 border border-white/10 hover:border-blue-500/50 rounded-full transition-all shadow-[0_0_30px_-5px_rgba(37,99,235,0.6)] hover:shadow-[0_0_40px_-5px_rgba(37,99,235,0.8)] group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors"></div>
            <span className="relative z-10">Try Now</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" />
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-300 p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile/Tablet Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 overflow-hidden"
            >
              <div className="bg-dark-800/95 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl flex flex-col gap-4">
                <a 
                  href="#features" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white py-2 border-b border-white/5 transition-colors"
                >
                  Features
                </a>
                <a 
                  href="#how-it-works" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white py-2 border-b border-white/5 transition-colors"
                >
                  How it works
                </a>
                <a 
                  href="#pricing" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white py-2 border-b border-white/5 transition-colors"
                >
                  Pricing
                </a>
                <button 
                  onClick={() => {
                    setIsFeedbackOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left text-gray-300 hover:text-white py-2 border-b border-white/5 transition-colors"
                >
                  Your Feedback
                </button>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 w-full px-6 py-4 text-sm font-semibold text-white bg-blue-600 rounded-xl shadow-lg shadow-blue-600/20"
                >
                  Try Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-48 pb-20 overflow-hidden">
        {/* Background decorative grid */}
        <div className="absolute inset-0 grid-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-30"></div>
        
        {/* Hero Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl hero-glow pointer-events-none"></div>

        <div className="z-10 text-center max-w-5xl mx-auto px-6 relative">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -12, 0],
            }}
            transition={{
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8 backdrop-blur-sm"
          >
            <Star className="w-3 h-3" />
            Where Accuracy Meets Innovation
          </motion.div>

          {/* Headline */}
          <motion.h1 
            {...fadeIn}
            className="text-5xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]"
          >
            Smarter Legal Drafting,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Real Results</span>
          </motion.h1>

          <motion.p 
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          >
            AI-powered legal document generation built specifically for Indian advocates. 
            Draft court-ready documents in minutes, not hours.
          </motion.p>

          {/* CTA Area */}
          <motion.div 
            {...fadeIn}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <button className="inline-flex items-center justify-center hover:bg-blue-500 transition-all text-sm font-semibold text-white bg-blue-600 rounded-full py-4 px-8 shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)]">
              Try JurisTech Now
            </button>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <IndianRupee className="w-3 h-3" />99 per document • No hidden fees
            </p>
          </motion.div>

          {/* Floating Visual Elements */}
          <motion.div 
            variants={stagger}
            initial="initial"
            animate="animate"
            className="flex flex-wrap justify-center gap-4 mb-20 opacity-80"
          >
            {[
              { icon: <FileText className="w-4 h-4" />, label: "Legal Notices", color: "blue" },
              { icon: <Scale className="w-4 h-4" />, label: "Affidavits", color: "purple" },
              { icon: <ScrollText className="w-4 h-4" />, label: "Agreements", color: "green" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                animate={{
                  opacity: 1,
                  y: [0, -10, 0],
                }}
                transition={{
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3
                  }
                }}
                className="glass-card px-4 py-3 rounded-xl flex items-center gap-3 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className={`w-8 h-8 rounded-full bg-${item.color}-500/20 flex items-center justify-center text-${item.color}-400`}>
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-gray-300">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.1
            }}
            className="relative max-w-5xl mx-auto group mt-16"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-10 group-hover:opacity-25 transition duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-dark-900 shadow-2xl">
              <div className="h-12 bg-dark-800 border-b border-white/10 flex items-center px-6 justify-between">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                </div>
                <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">JurisTech Dashboard</div>
                <div className="w-12"></div>
              </div>
              <div className="bg-dark-900 min-h-[200px] flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200" 
                  alt="JurisTech AI Drafting Interface" 
                  className="w-full h-auto block opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-dark-950 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Why Indian Advocates Choose JurisTech</h2>
            <p className="text-gray-400">Built for efficiency, accuracy, and compliance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                icon: <Zap className="w-6 h-6" />, 
                title: "Save Time", 
                desc: "Generate in 2 minutes what typically takes 3 hours of manual drafting. Focus on strategy, not typing.",
                color: "blue"
              },
              { 
                icon: <Scale className="w-6 h-6" />, 
                title: "Legally Sound", 
                desc: "Follows standard Indian legal formats, provisions, and stylistic requirements.",
                color: "green"
              },
              { 
                icon: <IndianRupee className="w-6 h-6" />, 
                title: "Affordable", 
                desc: "Pay only ₹99 per document. No hidden fees. Pay only for what you use.",
                color: "purple"
              },
              { 
                icon: <ShieldCheck className="w-6 h-6" />, 
                title: "Court-Ready", 
                desc: "Professional formatting with proper spacing and indentation, ready to download, review and file.",
                color: "amber"
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-8 rounded-2xl group hover:bg-white/[0.02] transition-colors"
              >
                <div className={`mb-6 w-12 h-12 rounded-lg bg-${card.color}-500/10 border border-${card.color}-500/20 flex items-center justify-center text-${card.color}-400 group-hover:scale-110 transition-transform`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-dark-900 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.03]"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-blue-500 font-semibold tracking-wider text-xs uppercase mb-2 block">Workflow</span>
            <h2 className="text-3xl font-semibold text-white tracking-tight">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
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
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: [1, 1.03, 1], 
                  y: [0, -8, 0] 
                }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ 
                  opacity: { duration: 0.5, delay: i * 0.1 },
                  scale: { 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.8
                  },
                  y: { 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.8
                  },
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="bg-dark-950 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-colors group"
              >
                <div className="aspect-video bg-dark-800 rounded-xl mb-6 overflow-hidden relative shadow-inner">
                  <img 
                    src={step.img} 
                    className={`w-full h-full object-cover ${i === 0 ? 'opacity-100 relative z-10' : 'opacity-60'} group-hover:scale-105 transition-transform duration-700`} 
                    alt={step.title}
                  />
                  {i !== 0 && <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent"></div>}
                  <div className={`absolute bottom-4 left-4 w-10 h-10 rounded-full bg-${step.color}-500/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-${step.color}-400 shadow-lg`}>
                    {step.icon}
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <span className={`flex items-center justify-center w-6 h-6 rounded-full bg-${step.color}-600 text-white text-[10px] font-bold`}>{step.step}</span>
                  <h3 className="text-lg font-medium text-white">{step.title}</h3>
                </div>
                <p className="text-gray-500 text-sm pl-9">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SHOWCASE */}
      <section id="features" className="py-24 bg-dark-950">
        <div className="max-w-6xl mx-auto px-6 space-y-24">
          
          {/* Feature 1: Version Control */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="flex flex-col md:flex-row items-center gap-12 border border-white/5 bg-dark-900/50 rounded-3xl p-8 md:p-12"
          >
            <div className="w-full md:w-1/2">
              <div className="inline-flex items-center gap-2 mb-6">
                <Settings className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 font-medium text-sm">Control</span>
              </div>
              <h3 className="text-3xl font-semibold text-white mb-4">Customizable Version</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Choose exactly how detailed your document should be. Need a quick notice or an exhaustive comprehensive agreement?
              </p>
              <ul className="space-y-4">
                {["Concise (Essential)", "Standard (Professional)", "Exhaustive (Detailed)"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="bg-dark-800 rounded-xl border border-white/10 p-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Layers className="w-32 h-32 text-white" />
                </div>
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between p-3 rounded-lg border border-white/5 hover:bg-white/5 transition-colors cursor-pointer group">
                    <span className="text-gray-400 text-sm group-hover:text-white">Concise</span>
                    <div className="w-4 h-4 rounded-full border border-gray-600"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-blue-500/10 border border-blue-500/40 cursor-pointer">
                    <span className="text-blue-400 text-sm font-medium">Standard (Selected)</span>
                    <div className="w-4 h-4 rounded-full border-[4px] border-blue-500"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border border-white/5 hover:bg-white/5 transition-colors cursor-pointer group">
                    <span className="text-gray-400 text-sm group-hover:text-white">Exhaustive</span>
                    <div className="w-4 h-4 rounded-full border border-gray-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 2: Tone Control */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
            className="flex flex-col md:flex-row-reverse items-center gap-12 border border-white/5 bg-dark-900/50 rounded-3xl p-8 md:p-12"
          >
            <div className="w-full md:w-1/2">
              <div className="inline-flex items-center gap-2 mb-6">
                <Tally3 className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 font-medium text-sm">Adaptability</span>
              </div>
              <h3 className="text-3xl font-semibold text-white mb-4">Tone Control</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Adapt the legal language to your specific situation. From aggressive demands to neutral agreements.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  Balanced and clear
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  Strong and compelling
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="bg-dark-800 rounded-xl border border-white/10 p-6 sm:p-8 shadow-2xl w-full max-w-[280px] sm:max-w-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
                <div className="px-4 py-2 rounded-lg bg-dark-900 border border-white/10 text-xs text-gray-400 hover:text-white cursor-pointer hover:border-white/20 transition-all text-center">Professional</div>
                <div className="px-4 py-2 rounded-lg bg-purple-600 text-white text-xs font-semibold shadow-lg shadow-purple-900/50 transform scale-100 sm:scale-110 text-center">Persuasive</div>
                <div className="px-4 py-2 rounded-lg bg-dark-900 border border-white/10 text-xs text-gray-400 hover:text-white cursor-pointer hover:border-white/20 transition-all text-center">Formal</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.1)_0%,_transparent_70%)]"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block mb-4"
            >
              <Star className="w-10 h-10 text-blue-500" />
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-8">
              Simple, Transparent Pricing.
            </h2>
            <p className="text-xl font-light text-gray-400 max-w-2xl mx-auto">
              Most lawyers waste hours on initial drafts. <br className="hidden sm:block" /> JurisTech users finish in minutes.
            </p>
          </div>

          {/* Pricing Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            whileHover={{ y: -5 }}
            className="max-w-md mx-auto relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-b from-blue-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-dark-900 rounded-xl p-8 border border-white/10">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">PAY PER USE</div>
              
              <h3 className="text-gray-400 uppercase tracking-widest text-xs font-semibold mb-4">Standard License</h3>
              <div className="flex items-baseline justify-center gap-1 mb-6">
                <span className="text-5xl font-bold text-white">₹99</span>
                <span className="text-gray-500">/ document</span>
              </div>

              <ul className="space-y-4 text-left mb-8 pl-4">
                {[
                  "Unlimited edits before download",
                  "Word, PDF & Text export",
                  "Secure & Private"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="block w-full py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                Start Generating
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-dark-950 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative bg-dark-900/50 rounded-3xl p-12 overflow-hidden text-center">
            <div className="absolute inset-0 grid-pattern opacity-[0.05]"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-blue-900/50">
                <Zap className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Ready to do drafting the right way?</h2>
              <p className="text-gray-400 max-w-xl mx-auto mb-10">Join hundreds of Indian advocates who are saving time and increasing efficiency with JurisTech.</p>

              <button className="inline-flex items-center justify-center hover:bg-blue-500 transition-all hover:shadow-blue-500/25 text-sm font-semibold text-white bg-blue-600 rounded-full py-4 px-8 shadow-lg">
                Try JurisTech
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark-950 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col mb-12 items-center justify-center">
            {/* Footer Logo */}
            <div className="mb-8">
              <img 
                src="https://i.ibb.co/zWYNn82b/logo-png.png" 
                alt="JTC Logo" 
                className="w-auto h-26 object-contain opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex gap-8 text-sm text-gray-500">
              <button onClick={() => setIsAboutOpen(true)} className="hover:text-white transition-colors cursor-pointer capitalize">About</button>
              <button onClick={() => setIsContactOpen(true)} className="hover:text-white transition-colors cursor-pointer capitalize">Contact</button>
              <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-white transition-colors cursor-pointer capitalize">Privacy</button>
              <button onClick={() => setIsTermsOpen(true)} className="hover:text-white transition-colors cursor-pointer capitalize">Terms</button>
            </div>
          </div>
          
          <div className="text-center pt-8">
            <p className="text-xs text-gray-600">Copyright © JurisTech All Rights Reserved. Made in India 🇮🇳</p>
          </div>
        </div>
      </footer>

      {/* FOOTER MODALS */}
      <InfoModal 
        isOpen={isAboutOpen} 
        onClose={() => setIsAboutOpen(false)} 
      >
        <h2 className="font-bold text-white text-xl mt-6 mb-3">About</h2>
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
      </InfoModal>

      <InfoModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      >
        <h2 className="font-bold text-white text-xl mt-6 mb-3">Contact</h2>
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
      </InfoModal>

      <InfoModal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
      >
        <h2 className="font-bold text-white text-xl mt-6 mb-3">Privacy Policy</h2>
        <p className="mb-4 leading-relaxed">Last Updated: April 19, 2026</p>
        <p className="mb-4 leading-relaxed">Welcome to JurisTech. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your data when you use our AI-powered legal document generation platform.</p>
        
        <h3 className="font-bold text-white text-lg mt-6 mb-3">1. Information We Collect</h3>
        <p className="mb-4 leading-relaxed font-bold text-white">Personal Information:</p>
        <p className="mb-4 leading-relaxed">Name, email address, and encrypted password when you create an account</p>
        <p className="mb-4 leading-relaxed">Feedback and suggestions (name and email are optional)</p>
        
        <p className="mb-4 leading-relaxed font-bold text-white">Document Data:</p>
        <p className="mb-4 leading-relaxed">Information you enter to generate documents (processed by Google Gemini AI, not permanently stored)</p>
        
        <p className="mb-4 leading-relaxed font-bold text-white">Usage Data:</p>
        <p className="mb-4 leading-relaxed">IP address, device type, browser type, and Service interaction</p>
        <p className="mb-4 leading-relaxed">Document types generated and download history</p>
        
        <p className="mb-4 leading-relaxed font-bold text-white">Payment Information:</p>
        <p className="mb-4 leading-relaxed">Transaction details processed by Razorpay (we do not store card/bank details)</p>

        <h3 className="font-bold text-white text-lg mt-6 mb-3">2. How We Use Your Information</h3>
        <p className="mb-4 leading-relaxed">We use your data to:</p>
        <p className="mb-4 leading-relaxed">Provide and improve our Service</p>
        <p className="mb-4 leading-relaxed">Process payments and send receipts</p>
        <p className="mb-4 leading-relaxed">Respond to inquiries and feedback</p>
        <p className="mb-4 leading-relaxed">Comply with legal obligations</p>

        <h3 className="font-bold text-white text-lg mt-6 mb-3">3. Data Sharing</h3>
        <p className="mb-4 leading-relaxed">We do not sell your personal information.</p>
        <p className="mb-4 leading-relaxed">We share data only with:</p>
        <p className="mb-4 leading-relaxed">Razorpay (payment processing)</p>
        <p className="mb-4 leading-relaxed">Google Gemini AI (document generation)</p>
        <p className="mb-4 leading-relaxed">Law enforcement (if required by law)</p>

        <h3 className="font-bold text-white text-lg mt-6 mb-3">4. Cookies</h3>
        <p className="mb-4 leading-relaxed">We use cookies to keep you logged in, remember preferences, and analyze usage. You can manage cookies through your browser settings.</p>

        <h3 className="font-bold text-white text-lg mt-6 mb-3">5. Data Security</h3>
        <p className="mb-4 leading-relaxed">We use SSL encryption, password protection, and secure payment processing. However, no internet transmission is 100% secure.</p>

        <h3 className="font-bold text-white text-lg mt-6 mb-3">6. Data Retention</h3>
        <p className="mb-4 leading-relaxed">Account info: While account is active</p>
        <p className="mb-4 leading-relaxed">Transactions: 7 years (legal requirement)</p>
        <p className="mb-3">Document inputs: Processed temporarily, not stored permanently</p>

        <h3 className="font-bold text-white text-lg mt-6 mb-3">7. Your Rights</h3>
        <p className="mb-4 leading-relaxed">You can:</p>
        <p className="mb-4 leading-relaxed">Access your data</p>
        <p className="mb-4 leading-relaxed">Correct inaccurate information</p>
        <p className="mb-4 leading-relaxed">Delete your account</p>
        <p className="mb-4 leading-relaxed">Opt out of marketing</p>
        <p className="mb-4 leading-relaxed">Withdraw consent</p>
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
      </InfoModal>

      <InfoModal 
        isOpen={isTermsOpen} 
        onClose={() => setIsTermsOpen(false)} 
      >
        <h2 className="font-bold text-white text-xl mt-6 mb-3">Terms and Conditions</h2>
        <p className="mb-4 leading-relaxed">Last Updated: April 19, 2026 </p>
        <p className="mb-4 leading-relaxed">Welcome to JurisTech! These Terms govern your use of our AI-powered legal document generation platform. By using our Service, you agree to these Terms.</p>
        
        <h3 className="font-bold text-white text-lg mt-6 mb-3">1. Definitions</h3>
        <p className="mb-4 leading-relaxed">"JurisTech," "we," "our," "us": Provider of AI legal document generation services</p>
        <p className="mb-4 leading-relaxed">"User," "you," "your": Anyone using our Service</p>
        <p className="mb-4 leading-relaxed">"Service": JurisTech platform and features</p>

        <h3 className="font-bold text-white text-lg mt-6 mb-3">2. Eligibility</h3>
        <p className="mb-4 leading-relaxed">You must be at least 18 years old</p>
        <p className="mb-4 leading-relaxed">You must provide a valid email and password</p>
        <p className="mb-4 leading-relaxed">You are responsible for your account security</p>
        <p className="mb-4 leading-relaxed">One account per person</p>

        <h3 className="font-bold text-white text-lg mt-6 mb-3">3. Service Description</h3>
        <p className="mb-4 leading-relaxed">JurisTech provides:</p>
        <p className="mb-4 leading-relaxed">AI-powered document generation (Google Gemini AI)</p>
        <p className="mb-4 leading-relaxed">12+ document types</p>
        <p className="mb-4 leading-relaxed">Customizable version and tone</p>
        <p className="mb-4 leading-relaxed">Download in Text, Word, PDF formats</p>
        <p className="mb-4 leading-relaxed">Pricing: Legal Notice is 100% Free. All other premium documents are ₹99 for up to 4 generation attempts.</p>

        <h3 className="font-bold text-white text-lg mt-6 mb-3">4. Acceptable Use</h3>
        <p className="mb-4 leading-relaxed">You agree to:</p>
        <p className="mb-4 leading-relaxed">Use the Service lawfully</p>
        <p className="mb-4 leading-relaxed">Provide accurate information</p>
        <p className="mb-4 leading-relaxed">Not misuse or interfere with functionality</p>
        <p className="mb-4 leading-relaxed">Not create fraudulent documents</p>
        <p className="mb-4 leading-relaxed">Not use bots or automated tools</p>
        <p className="mb-4 leading-relaxed">Not reverse-engineer our Service</p>

        <h3 className="font-bold text-white text-lg mt-6 mb-3">5. Payment Terms</h3>
        <p className="mb-4 leading-relaxed">Price: Legal Notice is 100% Free. All other premium documents are ₹99 for up to 4 generation attempts.</p>
        <p className="mb-4 leading-relaxed">Payment: Via Razorpay (Card, UPI, Net Banking)</p>
        <p className="mb-4 leading-relaxed">Timing: Payment is required strictly before the document generation process begins. The payment gateway will be triggered immediately upon selecting a premium document type.</p>
        <p className="mb-4 leading-relaxed">Taxes: Inclusive</p>
        <p className="mb-4 leading-relaxed">Receipt: Upon successful payment, a digital transaction receipt will be instantly displayed on your screen with an option to download it directly to your device. We do not send automated email receipts.</p>

        <h3 className="font-bold text-white text-lg mt-6 mb-3">6. Refund and Cancellation Policy</h3>
        <h4 className="font-bold text-white text-lg mt-6 mb-3">6.1 When Refunds Are Provided</h4>
        <p className="mb-4 leading-relaxed">Refund if:</p>
        <p className="mb-4 leading-relaxed">Duplicate Payment: If you are charged multiple times for a single transaction. (Note: Verification is strictly performed against our internal Payment Gateway Dashboard. If our records indicate only one successful transaction, no refund shall be granted, and you are advised to coordinate with your bank).</p>
        <p className="mb-4 leading-relaxed font-bold">No refund if:</p>
        <p className="mb-4 leading-relaxed">Document is successfully generated and displayed on your screen (Generation constitutes full delivery of service).</p>
        <p className="mb-4 leading-relaxed">If a document fails to generate due to a temporary technical error on our platform, your generation credit will not be deducted. You can simply attempt to generate the document again. We do not issue cash refunds for temporary server errors or downtime.</p>
        <p className="mb-4 leading-relaxed">You entered incorrect information or inputs.</p>
        <p className="mb-4 leading-relaxed">You are dissatisfied with the content (you can use your remaining attempts to regenerate with corrected inputs).</p>
        <p className="mb-4 leading-relaxed">You changed your mind after the document has been generated.</p>
        
        <h4 className="font-bold text-white text-lg mt-6 mb-3">6.2 Refund Process</h4>
        <p className="mb-4 leading-relaxed">Email <a href="mailto:contact.jtc.co@gmail.com" className="text-blue-400 hover:underline">contact.jtc.co@gmail.com</a> within 7 days with your transaction ID.</p>
        <p className="mb-4 leading-relaxed">We will review the request within 2 business days.</p>
        <p className="mb-4 leading-relaxed">If approved, the refund will be processed to the original payment method within 7-10 days.</p>
        
        <h4 className="font-bold text-white text-lg mt-6 mb-3">6.3 Cancellation</h4>
        <p className="mb-4 leading-relaxed">Before payment: You can cancel or abandon the process anytime without any charge.</p>
        <p className="mb-4 leading-relaxed">After document generation: Once the AI generates the document and it appears on your screen, the service is considered fully consumed. Therefore, no cancellations or refunds are permitted under any circumstances at this stage.</p>

        <h3 className="font-bold text-white text-lg mt-6 mb-3">7. Important Disclaimers</h3>
        <h4 className="font-bold text-white text-lg mt-6 mb-3">7.1 Not Legal Advice</h4>
        <p className="mb-4 leading-relaxed">JurisTech provides document tools, NOT legal advice. We are not a law firm.</p>
        <h4 className="font-bold text-white text-lg mt-6 mb-3">7.2 Professional Review Required</h4>
        <p className="mb-4 leading-relaxed">All documents MUST be reviewed by a qualified lawyer before use.</p>
        <h4 className="font-bold text-white text-lg mt-6 mb-3">7.3 No Guarantees</h4>
        <p className="mb-4 leading-relaxed">We don't guarantee documents are error-free, suitable for your situation, or accepted by courts. You verify accuracy and suitability.</p>

        <h3 className="font-bold text-white text-lg mt-6 mb-3">8. Limitation of Liability</h3>
        <p className="mb-4 leading-relaxed">Service provided "AS IS"</p>
        <p className="mb-4 leading-relaxed">We are not liable for indirect or consequential damages</p>
        <p className="mb-4 leading-relaxed">Not responsible for legal outcomes</p>
        <p className="mb-4 leading-relaxed">Maximum liability: ₹99 (amount paid) You use the Service at your own risk.</p>

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
      </InfoModal>

      {/* FEEDBACK MODAL */}
      <AnimatePresence>
        {isFeedbackOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setIsFeedbackOpen(false)}
          >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-xl bg-gray-900 border border-white/10 rounded-3xl shadow-2xl p-6 max-h-[85vh] overflow-y-auto"
              >
                {/* Header with Logo and Close Button */}
                <div className="flex justify-between items-start w-full">
                  <img 
                    src="https://i.ibb.co/zWYNn82b/logo-png.png" 
                    alt="JurisTech Logo" 
                    className="h-26 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <button 
                    onClick={() => setIsFeedbackOpen(false)}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all mt-2"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Body Content */}
                <div className="flex flex-col items-center">
                  <h2 className="text-2xl text-white font-extrabold text-center mt-10 mb-6 font-sans">
                    Help Us Improve Your Experience
                  </h2>

                  <img 
                    src="https://i.ibb.co/wFXScDP0/COMPANY-S-QR-Code-FOR-FEEDBACK.png" 
                    alt="Feedback QR" 
                    className="mx-auto w-96 h-96 aspect-square object-contain rounded-2xl bg-white p-4 shadow-2xl border-4 border-blue-500/30"
                    referrerPolicy="no-referrer"
                  />

                <div className="text-gray-500 font-bold my-8 text-center text-sm tracking-widest">
                  OR
                </div>

                <a 
                  href="https://forms.gle/DcZ7BvkdL6bqdydA7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-700 transition-all transform hover:scale-[1.02] shadow-xl uppercase tracking-widest text-center text-lg shadow-blue-600/20"
                >
                  SHARE FEEDBACK
                </a>
                
                <p className="mt-8 text-gray-500 text-xs font-medium tracking-tight">
                  JurisTech - AI-Powered Legal Document Generation
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
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

export default function App() {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0acbc128-f2dc-469c-aed5-8cb8db34385b_320w.png" 
              alt="JTC Logo" 
              className="w-auto h-12 object-contain invert brightness-200"
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
            Powered by Google Gemini AI
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
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ 
              type: "spring",
              stiffness: 80,
              damping: 15,
              delay: 0.2
            }}
            className="relative max-w-4xl mx-auto group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-dark-900 shadow-2xl">
              <div className="h-10 bg-dark-800 border-b border-white/5 flex items-center px-4 space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
              </div>
              <img 
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ebf4daec-cb55-4545-bb9e-edcf15559ba5_3840w.png?w=800&q=80" 
                alt="Dashboard" 
                className="opacity-90 w-full object-cover bg-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark-950 to-transparent"></div>
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
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0acbc128-f2dc-469c-aed5-8cb8db34385b_320w.png" 
                alt="JTC Logo" 
                className="w-auto h-16 object-contain invert opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex gap-8 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
          
          <div className="text-center pt-8">
            <p className="text-xs text-gray-600">Copyright © JurisTech All Rights Reserved. Made in India 🇮🇳</p>
          </div>
        </div>
      </footer>

      {/* FEEDBACK MODAL */}
      <AnimatePresence>
        {isFeedbackOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-dark-950/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-dark-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Header with Logo */}
              <div className="p-8 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0acbc128-f2dc-469c-aed5-8cb8db34385b_320w.png" 
                    alt="JTC Logo" 
                    className="w-auto h-10 object-contain invert brightness-200"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-xl font-bold text-white tracking-tight">JurisTech</span>
                </div>
                <button 
                  onClick={() => setIsFeedbackOpen(false)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Content */}
              <form className="p-8 space-y-6" onSubmit={(e) => { e.preventDefault(); setIsFeedbackOpen(false); }}>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Your Feedback</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell us what you think..."
                    className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/20 transition-all active:scale-[0.98]"
                >
                  Submit Feedback
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

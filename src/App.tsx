/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  FileText, Scale, ScrollText, Zap, Download, PenSquare, 
  Star, X, Briefcase, Shield, FileWarning, Users, Menu, IndianRupee,
  ArrowRight, ArrowLeft, CheckCircle2, Settings, Tally3, Layers, ShieldCheck
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const workflowSteps = [
  { step: 1, title: "Choose Type", desc: "Select from 12+ essential legal documents.", icon: <FileText className="w-5 h-5" />, img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800", color: "blue" },
  { step: 2, title: "Fill Details", desc: "Answer simple prompts. Select preferred version.", icon: <PenSquare className="w-5 h-5" />, img: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800", color: "purple" },
  { step: 3, title: "Download", desc: "Receive your court-ready document instantly.", icon: <Download className="w-5 h-5" />, img: "https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80&w=800", color: "green" }
];

const legalDocuments = [
  { icon: <FileText />, label: "Legal Notices", color: "blue" },
  { icon: <Scale />, label: "Affidavits", color: "purple" },
  { icon: <ScrollText />, label: "Agreements", color: "green" },
  { icon: <Briefcase />, label: "Sale Deed", color: "orange" },
  { icon: <FileText />, label: "Notes of Argument", color: "indigo" },
  { icon: <Scale />, label: "Power of Attorney", color: "rose" },
  { icon: <Shield />, label: "Police Complaint", color: "red" },
  { icon: <FileWarning />, label: "Eviction Notice", color: "yellow" },
  { icon: <Briefcase />, label: "Employment Agreement", color: "teal" },
  { icon: <Users />, label: "Partnership Deed", color: "cyan" }
];

const InfoModal = ({ isOpen, onClose, children, lang, setLang, title }: any) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] overflow-y-auto bg-black/80 backdrop-blur-sm" onClick={() => { setLang('en'); onClose(); }}>
        <div className="flex min-h-full p-4 py-8 sm:py-12 sm:p-6">
          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-2xl m-auto bg-gray-900 text-gray-200 rounded-xl shadow-2xl overflow-y-auto max-h-[85vh]">
            <div className="sticky top-0 z-50 pt-6 px-4 sm:px-6 pb-2 flex items-center justify-between gap-2 bg-transparent pointer-events-none">
              <div className="pointer-events-auto flex items-center shrink-0">
                <img src="https://i.ibb.co/zWYNn82b/logo-png.png" alt="JurisTech" className="h-8 sm:h-10 w-auto object-contain drop-shadow-2xl" />
              </div>
              <div className="flex-1 flex justify-center pointer-events-auto min-w-0">
                <span className="bg-gray-900/60 backdrop-blur-xl border border-white/10 shadow-lg px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-sm font-bold text-white tracking-wide truncate max-w-full">{title}</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 pointer-events-auto shrink-0">
                <div className="flex space-x-1 bg-gray-900/60 backdrop-blur-xl border border-white/10 p-1 rounded-xl shadow-lg">
                  <button onClick={() => setLang('en')} className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-bold transition-all ${lang === 'en' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}>EN</button>
                  <button onClick={() => setLang('hi')} className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-bold transition-all ${lang === 'hi' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}>HI</button>
                </div>
                <button onClick={() => { setLang('en'); onClose(); }} className="p-2 sm:p-3 rounded-full bg-gray-900/60 backdrop-blur-xl border border-white/10 text-gray-400 hover:text-white transition-all shadow-lg"><X className="w-4 h-4 sm:w-5 sm:h-5" /></button>
              </div>
            </div>
            <div className="p-6 sm:p-8 pt-2 selection:bg-blue-500/30">{children}</div>
          </motion.div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [lang, setLang] = useState<'en' | 'hi'>('en');
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 top-0 py-4 px-6 bg-gray-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src="https://i.ibb.co/zWYNn82b/logo-png.png" alt="Logo" className="h-8 md:h-10 w-auto" /> 
            <span className="text-xl md:text-2xl font-bold text-white">JurisTech</span>
          </a>
          <div className="hidden lg:flex gap-8 text-sm text-gray-400 font-medium">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <button onClick={() => setIsFeedbackOpen(true)} className="hover:text-white transition-colors">Your Feedback</button>
          </div>
          <a href="https://juristech-v1.vercel.app/" target="_blank" className="hidden lg:flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
            Try Now <ArrowRight className="w-4 h-4" />
          </a>
          <button className="lg:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* HERO SECTION - PERFECT DUAL-TRACK SEAMLESS LOOP */}
      <section className="relative pt-28 pb-8 px-4 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl hero-glow pointer-events-none"></div>
        
        <div className="z-10 text-center max-w-5xl mx-auto w-full flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs mb-6 backdrop-blur-sm mt-4"
          >
            <Star className="w-3 h-3" /> Where Accuracy Meets Innovation
          </motion.div>
          
          <motion.h1 {...fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Smarter Legal Drafting,<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Real Results</span>
          </motion.h1>
          
          <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl px-2">
            AI-powered legal document generation built specifically for Indian advocates.
          </motion.p>
          
          <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="flex flex-col items-center gap-3 mb-10 w-full">
            <a href="https://juristech-v1.vercel.app/" target="_blank" className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
              Try JurisTech Now
            </a>
            <p className="text-xs text-gray-500 flex items-center gap-1"><IndianRupee className="w-3 h-3" /> 99 per document • No hidden fees</p>
          </motion.div>

          {/* 🔥 10 CARDS ANIMATION (RESTORED DUAL-TRACK FOR ZERO GAPS) 🔥 */}
          <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="w-full opacity-90 mt-auto pb-4">
            <div 
              className="flex w-full overflow-hidden py-4 cursor-pointer custom-marquee-wrapper"
              style={{ 
                maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)" 
              }}
            >
              {/* TRACK 1 */}
              <div className="flex shrink-0 gap-3 sm:gap-4 pr-3 sm:pr-4 custom-marquee-track-reverse">
                {[...Array(2).fill(legalDocuments).flat()].map((item: any, i: number) => (
                  <div key={`t1-${i}`} className="glass-card px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl flex items-center gap-2 sm:gap-3 bg-white/5 border border-white/10 shrink-0 hover:bg-white/10 transition-colors">
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-${item.color}-500/20 flex items-center justify-center text-${item.color}-400`}>
                      {item.icon}
                    </div>
                    <span className="text-[10px] sm:text-sm font-medium text-gray-300 whitespace-nowrap">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* TRACK 2 (PERFECT CLONE) */}
              <div className="flex shrink-0 gap-3 sm:gap-4 pr-3 sm:pr-4 custom-marquee-track-reverse" aria-hidden="true">
                {[...Array(2).fill(legalDocuments).flat()].map((item: any, i: number) => (
                  <div key={`t2-${i}`} className="glass-card px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl flex items-center gap-2 sm:gap-3 bg-white/5 border border-white/10 shrink-0 hover:bg-white/10 transition-colors">
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
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="px-4 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/10 bg-gray-900 shadow-2xl relative"
        >
           <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-10"></div>
           <div className="relative">
            <div className="h-10 bg-gray-800 border-b border-white/10 flex items-center px-4 justify-between">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
              </div>
              <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase hidden sm:block">JurisTech Dashboard</div>
              <div className="w-10"></div>
            </div>
            <img src="https://i.ibb.co/QvhSNC7j/868shots-so.png" alt="Dashboard" className="w-full h-auto block" referrerPolicy="no-referrer" />
           </div>
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-gray-950 relative border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Why Indian Advocates Choose JurisTech</h2>
            <p className="text-gray-400">Built for efficiency, accuracy, and compliance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <Zap className="w-6 h-6" />, title: "Save Time", desc: "Generate in 2 minutes what typically takes 3 hours of manual drafting. Focus on strategy, not typing.", color: "blue" },
              { icon: <Scale className="w-6 h-6" />, title: "Legally Sound", desc: "Follows standard Indian legal formats, provisions, and stylistic requirements.", color: "green" },
              { icon: <IndianRupee className="w-6 h-6" />, title: "Affordable", desc: "Pay only ₹99 per document. No hidden fees. Pay only for what you use.", color: "purple" },
              { icon: <ShieldCheck className="w-6 h-6" />, title: "Court-Ready", desc: "Professional formatting with proper spacing and indentation, ready to download, review and file.", color: "amber" }
            ].map((card, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className="glass-card p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
                <div className={`w-12 h-12 rounded-lg bg-${card.color}-500/10 border border-${card.color}-500/20 flex items-center justify-center text-${card.color}-400 mb-6`}>{card.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-gray-900 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-blue-500 font-semibold tracking-wider text-xs uppercase mb-2 block">Workflow</span>
            <h2 className="text-3xl font-semibold text-white tracking-tight">How It Works</h2>
          </div>
          <div className="flex w-full overflow-hidden py-6 cursor-pointer custom-marquee-wrapper" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)" }}>
            <div className="flex shrink-0 gap-6 pr-6 custom-marquee-track">
              {[...workflowSteps, ...workflowSteps].map((step, i) => (
                <div key={`t1-${i}`} className="w-[280px] sm:w-[340px] shrink-0 bg-gray-950 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300">
                  <div className="aspect-video bg-gray-800 rounded-xl mb-6 overflow-hidden relative shadow-inner">
                    <img src={step.img} className="w-full h-full object-cover opacity-75 hover:scale-105 transition-transform duration-700" alt={step.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
                    <div className={`absolute bottom-4 left-4 w-10 h-10 rounded-full bg-${step.color}-500/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-${step.color}-400`}>{step.icon}</div>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`flex items-center justify-center w-6 h-6 rounded-full bg-${step.color}-600 text-white text-[10px] font-bold`}>{step.step}</span>
                    <h3 className="text-lg font-medium text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm pl-9">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex shrink-0 gap-6 pr-6 custom-marquee-track" aria-hidden="true">
              {[...workflowSteps, ...workflowSteps].map((step, i) => (
                <div key={`t2-${i}`} className="w-[280px] sm:w-[340px] shrink-0 bg-gray-950 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300">
                  <div className="aspect-video bg-gray-800 rounded-xl mb-6 overflow-hidden relative shadow-inner">
                    <img src={step.img} className="w-full h-full object-cover opacity-75 hover:scale-105 transition-transform duration-700" alt={step.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
                    <div className={`absolute bottom-4 left-4 w-10 h-10 rounded-full bg-${step.color}-500/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-${step.color}-400`}>{step.icon}</div>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`flex items-center justify-center w-6 h-6 rounded-full bg-${step.color}-600 text-white text-[10px] font-bold`}>{step.step}</span>
                    <h3 className="text-lg font-medium text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm pl-9">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SHOWCASE */}
      <section id="features" className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 space-y-24">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row items-center gap-12 border border-white/5 bg-gray-900/50 rounded-3xl p-8 md:p-12">
            <div className="w-full md:w-1/2">
              <div className="inline-flex items-center gap-2 mb-6"><Settings className="w-4 h-4 text-blue-400" /><span className="text-blue-400 font-medium text-sm">Control</span></div>
              <h3 className="text-3xl font-semibold text-white mb-4">Customizable Version</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">Choose exactly how detailed your document should be. Need a quick notice or an exhaustive agreement?</p>
              <ul className="space-y-4">
                {["Concise (Essential)", "Standard (Professional)", "Exhaustive (Detailed)"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-blue-500" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="bg-gray-800 rounded-xl border border-white/10 p-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Layers className="w-32 h-32 text-white" /></div>
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between p-3 rounded-lg border border-white/5 text-gray-400 text-sm"><span >Concise</span><div className="w-4 h-4 rounded-full border border-gray-600"></div></div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-blue-500/10 border border-blue-500/40 text-blue-400 text-sm font-medium"><span>Standard (Selected)</span><div className="w-4 h-4 rounded-full border-[4px] border-blue-500"></div></div>
                  <div className="flex items-center justify-between p-3 rounded-lg border border-white/5 text-gray-400 text-sm"><span>Exhaustive</span><div className="w-4 h-4 rounded-full border border-gray-600"></div></div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row-reverse items-center gap-12 border border-white/5 bg-gray-900/50 rounded-3xl p-8 md:p-12">
            <div className="w-full md:w-1/2">
              <div className="inline-flex items-center gap-2 mb-6"><Tally3 className="w-4 h-4 text-purple-400" /><span className="text-purple-400 font-medium text-sm">Adaptability</span></div>
              <h3 className="text-3xl font-semibold text-white mb-4">Tone Control</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">Adapt the legal language to your specific situation. From aggressive demands to neutral agreements.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-blue-500" />Balanced and clear</li>
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-blue-500" />Strong and compelling</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="bg-gray-800 rounded-xl border border-white/10 p-6 sm:p-8 shadow-2xl w-full max-w-sm flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="px-4 py-2 rounded-lg bg-gray-900 border border-white/10 text-xs text-gray-400">Professional</div>
                <div className="px-4 py-2 rounded-lg bg-purple-600 text-white text-xs font-semibold shadow-lg shadow-purple-900/50 scale-110">Persuasive</div>
                <div className="px-4 py-2 rounded-lg bg-gray-900 border border-white/10 text-xs text-gray-400">Formal</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.1)_0%,_transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="mb-12">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="inline-block mb-4"><Star className="w-10 h-10 text-blue-500" /></motion.div>
            <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-8">Simple, Transparent Pricing.</h2>
            <p className="text-xl font-light text-gray-400 max-w-2xl mx-auto">Most lawyers waste hours on initial drafts. JurisTech users finish in minutes.</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-md mx-auto relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-b from-blue-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-gray-900 rounded-xl p-8 border border-white/10">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">PAY PER USE</div>
              <h3 className="text-gray-400 uppercase tracking-widest text-xs font-semibold mb-4">Standard License</h3>
              <div className="flex items-baseline justify-center gap-1 mb-6"><span className="text-5xl font-bold text-white">₹99</span><span className="text-gray-500">/ document</span></div>
              <ul className="space-y-4 text-left mb-8 pl-4">
                {["Unlimited edits before download", "Word, PDF & Text export", "Secure & Private"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle2 className="w-5 h-5 text-blue-500" />{item}</li>
                ))}
              </ul>
              <a href="https://juristech-v1.vercel.app/" target="_blank" className="block text-center w-full py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">Start Generating</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-gray-950 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative bg-gray-900/50 rounded-3xl p-12 overflow-hidden text-center border border-white/5">
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-blue-900/50"><Zap className="w-8 h-8 text-white" /></div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Ready to do drafting the right way?</h2>
              <p className="text-gray-400 max-w-xl mx-auto mb-10">Join hundreds of Indian advocates who are saving time and increasing efficiency with JurisTech.</p>
              <a href="https://juristech-v1.vercel.app/" target="_blank" className="inline-flex items-center justify-center bg-blue-600 text-white rounded-full py-4 px-8 font-semibold shadow-lg hover:bg-blue-700 transition-all">Try JurisTech</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 pt-16 pb-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col mb-12 items-center justify-center">
            <div className="mb-8"><img src="https://i.ibb.co/zWYNn82b/logo-png.png" alt="JTC Logo" className="h-12 w-auto opacity-80" /></div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <button onClick={() => setIsAboutOpen(true)} className="hover:text-white transition-colors">About</button>
              <button onClick={() => setIsContactOpen(true)} className="hover:text-white transition-colors">Contact</button>
              <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-white transition-colors">Privacy</button>
              <button onClick={() => setIsTermsOpen(true)} className="hover:text-white transition-colors">Terms</button>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-white/5">
            <p className="text-xs text-gray-600">Copyright © JurisTech All Rights Reserved. Made in India 🇮🇳</p>
          </div>
        </div>
      </footer>

      {/* MODALS */}
      <InfoModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} lang={lang} setLang={setLang} title={lang === 'en' ? 'About Us' : 'हमारे बारे में'}>
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
              <button onClick={() => { setIsAboutOpen(false); setIsTermsOpen(true); }} className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-white/10 text-white text-sm font-bold rounded-xl transition-all shadow-lg w-full sm:w-auto"><ArrowLeft className="w-4 h-4"/>Prev: Terms</button>
              <button onClick={() => { setIsAboutOpen(false); setIsContactOpen(true); }} className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg w-full sm:w-auto">Next: Contact<ArrowRight className="w-4 h-4"/></button>
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
              <button onClick={() => { setIsAboutOpen(false); setIsTermsOpen(true); }} className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-white/10 text-white text-sm font-bold rounded-xl transition-all shadow-lg w-full sm:w-auto"><ArrowLeft className="w-4 h-4"/>पिछला: नियम और शर्तें</button>
              <button onClick={() => { setIsAboutOpen(false); setIsContactOpen(true); }} className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg w-full sm:w-auto">अगला: संपर्क करें<ArrowRight className="w-4 h-4"/></button>
            </div>
          </>
        )}
      </InfoModal>

      <InfoModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} lang={lang} setLang={setLang} title={lang === 'en' ? 'Contact Support' : 'संपर्क करें'}>
        {lang === 'en' ? (
          <>
            <p className="mb-4 leading-relaxed">We're here to help! For any questions, support requests, or feedback, please reach out to us.</p>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">Email</h3>
            <p className="mb-4 leading-relaxed"><a href="mailto:contact.jtc.co@gmail.com" className="text-blue-400 hover:underline">contact.jtc.co@gmail.com</a> We typically respond within 24-48 hours.</p>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">Support</h3>
            <p className="mb-4 leading-relaxed">For technical issues, billing questions, or general inquiries, email us at the address above.</p>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">Feedback</h3>
            <p className="mb-4 leading-relaxed">We value your feedback and suggestions! Share your thoughts to help us improve JurisTech by clicking the button below:</p>
            <div className="mb-6"><a href="https://forms.gle/DcZ7BvkdL6bqdydA7" target="_blank" className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all text-sm">FEEDBACK</a></div>
            <p className="mb-4 text-xs text-gray-500">JurisTech - AI-Powered Legal Document Generation</p>
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col-reverse sm:flex-row justify-between gap-3 sm:gap-4">
              <button onClick={() => { setIsContactOpen(false); setIsAboutOpen(true); }} className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-white/10 text-white text-sm font-bold rounded-xl transition-all shadow-lg w-full sm:w-auto"><ArrowLeft className="w-4 h-4"/>Prev: About</button>
              <button onClick={() => { setIsContactOpen(false); setIsPrivacyOpen(true); }} className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg w-full sm:w-auto">Next: Privacy<ArrowRight className="w-4 h-4"/></button>
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
            <div className="mb-6"><a href="https://forms.gle/DcZ7BvkdL6bqdydA7" target="_blank" className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all text-sm">फ़ीडबैक (FEEDBACK)</a></div>
            <p className="mb-4 text-xs text-gray-500">JurisTech - AI-संचालित कानूनी दस्तावेज़ निर्माण</p>
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col-reverse sm:flex-row justify-between gap-3 sm:gap-4">
              <button onClick={() => { setIsContactOpen(false); setIsAboutOpen(true); }} className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-white/10 text-white text-sm font-bold rounded-xl transition-all shadow-lg w-full sm:w-auto"><ArrowLeft className="w-4 h-4"/>पिछला: हमारे बारे में</button>
              <button onClick={() => { setIsContactOpen(false); setIsPrivacyOpen(true); }} className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg w-full sm:w-auto">अगला: प्राइवेसी<ArrowRight className="w-4 h-4"/></button>
            </div>
          </>
        )}
      </InfoModal>

      <InfoModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} lang={lang} setLang={setLang} title={lang === 'en' ? 'Privacy Policy' : 'प्राइवेसी पॉलिसी'}>
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
            <p className="mb-4 leading-relaxed">To enhance your experience, we use your browser's Local Storage to save your 'Advocate Profile' preferences for auto-filling forms. This specific profile data remains securely on your device and is not permanently saved to our cloud databases.</p>
            <p className="mb-4 leading-relaxed font-bold text-white">Reference Files & Uploads:</p>
            <p className="mb-4 leading-relaxed">To enhance the accuracy of generated legal drafts, users may voluntarily upload reference documents (PDFs, Word files, Images). These files are strictly used as context for our AI engine.</p>
            <p className="mb-4 leading-relaxed font-bold text-white">Payment Information:</p>
            <p className="mb-4 leading-relaxed">Transaction details processed by Razorpay (we do not store card/bank details)</p>
            
            <h3 className="font-bold text-white text-lg mt-6 mb-3">2. How We Use Your Information</h3>
            <p className="mb-4 leading-relaxed">We use your data to provide and improve our Service, process payments, respond to inquiries, and comply with legal obligations.</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">3. Data Sharing</h3>
            <p className="mb-4 leading-relaxed">We do not sell your personal information. We share data only with Razorpay (payment processing), Google Gemini AI (document generation), and law enforcement (if required by law).</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">4. Security & Retention</h3>
            <p className="mb-4 leading-relaxed">We use SSL encryption and secure payment processing. Uploaded reference files are processed in real-time or memory and are not permanently stored in our databases. Only the final generated text and input form data are saved in your history for your future access.</p>

            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col-reverse sm:flex-row justify-between gap-3 sm:gap-4">
              <button onClick={() => { setIsPrivacyOpen(false); setIsContactOpen(true); }} className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-white/10 text-white text-sm font-bold rounded-xl transition-all shadow-lg w-full sm:w-auto"><ArrowLeft className="w-4 h-4"/>Prev: Contact</button>
              <button onClick={() => { setIsPrivacyOpen(false); setIsTermsOpen(true); }} className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg w-full sm:w-auto">Next: Terms<ArrowRight className="w-4 h-4"/></button>
            </div>
          </>
        ) : (
          <>
            <p className="mb-4 leading-relaxed">पिछला अपडेट: 19 अप्रैल, 2026</p>
            <p className="mb-4 leading-relaxed">JurisTech में आपका स्वागत है। आपकी प्राइवेसी हमारे लिए महत्वपूर्ण है। यह प्राइवेसी पॉलिसी बताती है कि जब आप हमारे AI-संचालित कानूनी दस्तावेज़ निर्माण प्लेटफ़ॉर्म का उपयोग करते हैं तो हम आपका डेटा कैसे एकत्र, उपयोग और सुरक्षित करते हैं।</p>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">1. जानकारी जो हम एकत्र करते हैं</h3>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>जब आप खाता बनाते हैं तो नाम, ईमेल पता और एन्क्रिप्टेड पासवर्ड</li>
              <li>दस्तावेज़ जेनरेट करने के लिए आपके द्वारा दर्ज की गई जानकारी (स्थायी रूप से संग्रहीत नहीं)</li>
              <li>फॉर्म को ऑटो-फिल करने के लिए 'एडवोकेट प्रोफाइल' आपके लोकल स्टोरेज में सेव किया जाता है।</li>
            </ul>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">2. सुरक्षा और डेटा शेयरिंग</h3>
            <p className="mb-4 leading-relaxed">हम आपकी व्यक्तिगत जानकारी बेचते नहीं हैं। हम डेटा केवल Razorpay (पेमेंट) और Google Gemini AI के साथ साझा करते हैं। अपलोड की गई रेफ़रेंस फ़ाइलें हमारे डेटाबेस में परमानेंट रूप से स्टोर नहीं की जाती हैं।</p>
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col-reverse sm:flex-row justify-between gap-3 sm:gap-4">
              <button onClick={() => { setIsPrivacyOpen(false); setIsContactOpen(true); }} className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-white/10 text-white text-sm font-bold rounded-xl transition-all shadow-lg w-full sm:w-auto"><ArrowLeft className="w-4 h-4"/>पिछला: संपर्क करें</button>
              <button onClick={() => { setIsPrivacyOpen(false); setIsTermsOpen(true); }} className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg w-full sm:w-auto">अगला: नियम और शर्तें<ArrowRight className="w-4 h-4"/></button>
            </div>
          </>
        )}
      </InfoModal>

      <InfoModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} lang={lang} setLang={setLang} title={lang === 'en' ? 'Terms and Conditions' : 'नियम और शर्तें'}>
        {lang === 'en' ? (
          <>
            <p className="mb-4 leading-relaxed">Last Updated: April 19, 2026</p>
            <p className="mb-4 leading-relaxed">Welcome to JurisTech! These Terms govern your use of our AI-powered legal document generation platform.</p>
            <h3 className="font-bold text-white text-lg mt-6 mb-3">1. Service Description</h3>
            <p className="mb-4 leading-relaxed">JurisTech provides AI-powered document generation for Indian advocates. Legal Notice is 100% Free. All other premium documents are ₹99 for up to 4 generation attempts.</p>
            
            <h3 className="font-bold text-white text-lg mt-6 mb-3">2. Acceptable Use</h3>
            <p className="mb-4 leading-relaxed">You agree to use the Service lawfully and not create fraudulent documents. You represent and warrant that you have the necessary rights, permissions, and client consent to upload any reference documents to our platform.</p>
            
            <h3 className="font-bold text-white text-lg mt-6 mb-3">3. Refund and Cancellation Policy</h3>
            <p className="mb-4 leading-relaxed"><span className="font-bold text-white">Refunds:</span> Only provided for duplicate payments. No refunds are provided once a document is successfully generated and displayed on your screen, or if you entered incorrect information.</p>
            <p className="mb-4 leading-relaxed"><span className="font-bold text-white">Cancellation:</span> Once the AI generates the document, the service is considered fully consumed. No cancellations are permitted at this stage.</p>

            <h3 className="font-bold text-white text-lg mt-6 mb-3">4. Important Disclaimers</h3>
            <p className="mb-4 leading-relaxed">JurisTech provides document tools, NOT legal advice. All documents MUST be reviewed by a qualified lawyer before use. We do not guarantee 100% accuracy in AI transcription of uploaded images/handwriting.</p>

            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col-reverse sm:flex-row justify-between gap-3 sm:gap-4">
              <button onClick={() => { setIsTermsOpen(false); setIsPrivacyOpen(true); }} className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-white/10 text-white text-sm font-bold rounded-xl transition-all shadow-lg w-full sm:w-auto"><ArrowLeft className="w-4 h-4"/>Prev: Privacy</button>
              <button onClick={() => { setIsTermsOpen(false); setIsAboutOpen(true); }} className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg w-full sm:w-auto">Next: About Us<ArrowRight className="w-4 h-4"/></button>
            </div>
          </>
        ) : (
          <>
             <p className="mb-4 leading-relaxed">पिछला अपडेट: 19 अप्रैल, 2026</p>
             <p className="mb-4 leading-relaxed">JurisTech में आपका स्वागत है! ये शर्तें हमारे AI-पावर्ड लीगल डॉक्यूमेंट जेनरेशन प्लेटफ़ॉर्म के आपके इस्तेमाल को गाइड करती हैं।</p>
             <h3 className="font-bold text-white text-lg mt-6 mb-3">1. सर्विस का विवरण</h3>
             <p className="mb-4 leading-relaxed">लीगल नोटिस 100% फ्री है। बाकी सभी प्रीमियम डॉक्यूमेंट्स के लिए 4 बार जेनरेट करने की कोशिश के लिए ₹99 शुल्क है।</p>
             <h3 className="font-bold text-white text-lg mt-6 mb-3">2. रिफंड और कैंसलेशन</h3>
             <p className="mb-4 leading-relaxed">डॉक्यूमेंट सफलतापूर्वक जेनरेट होने और आपकी स्क्रीन पर दिखने के बाद कोई रिफंड नहीं दिया जाएगा।</p>
             <h3 className="font-bold text-white text-lg mt-6 mb-3">3. कानूनी डिस्क्लेमर</h3>
             <p className="mb-4 leading-relaxed">JurisTech डॉक्यूमेंट टूल्स देता है, कानूनी सलाह नहीं। इस्तेमाल से पहले सभी डॉक्यूमेंट्स का रिव्यू किसी क्वालिफाइड वकील द्वारा किया जाना चाहिए।</p>
             <div className="mt-10 pt-6 border-t border-white/10 flex flex-col-reverse sm:flex-row justify-between gap-3 sm:gap-4">
              <button onClick={() => { setIsTermsOpen(false); setIsPrivacyOpen(true); }} className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-white/10 text-white text-sm font-bold rounded-xl transition-all shadow-lg w-full sm:w-auto"><ArrowLeft className="w-4 h-4"/>पिछला: प्राइवेसी</button>
              <button onClick={() => { setIsTermsOpen(false); setIsAboutOpen(true); }} className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg w-full sm:w-auto">अगला: हमारे बारे में<ArrowRight className="w-4 h-4"/></button>
            </div>
          </>
        )}
      </InfoModal>

      {/* FEEDBACK MODAL */}
      <AnimatePresence>
        {isFeedbackOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] overflow-y-auto bg-black/80 backdrop-blur-sm" onClick={() => setIsFeedbackOpen(false)}>
            <div className="flex min-h-full items-center justify-center p-4 py-8">
              <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-2xl bg-gray-900 rounded-xl shadow-2xl overflow-y-auto">
                <div className="sticky top-0 z-50 pt-6 px-6 pb-2 flex items-center justify-between">
                  <img src="https://i.ibb.co/zWYNn82b/logo-png.png" alt="JurisTech" className="h-8 w-auto" />
                  <span className="bg-gray-900/60 backdrop-blur-xl px-3 py-1 rounded-full text-sm font-bold text-white">Feedback</span>
                  <button onClick={() => setIsFeedbackOpen(false)} className="p-2 rounded-full bg-gray-900/60 text-gray-400 hover:text-white"><X className="w-5 h-5" /></button>
                </div>
                <div className="p-8 flex flex-col items-center">
                  <h2 className="text-2xl text-white font-extrabold text-center mb-6">Help Us Improve</h2>
                  <img src="https://i.ibb.co/wFXScDP0/COMPANY-S-QR-Code-FOR-FEEDBACK.png" alt="Feedback QR" className="w-64 h-64 object-contain rounded-2xl bg-white/5 p-4 mb-6 border border-white/10" />
                  <div className="text-gray-500 font-bold mb-6">OR</div>
                  <a href="https://forms.gle/DcZ7BvkdL6bqdydA7" target="_blank" className="w-full py-4 bg-blue-600 text-white font-black rounded-xl text-center shadow-lg">SHARE FEEDBACK</a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

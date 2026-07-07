import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const faqs = [
  {
    question: "Is JurisTech specifically designed for Indian courts?",
    answer: "Yes, absolutely. Our AI model is deeply trained on Indian legal precedents, the new BNS, IPC, and standard Indian court formatting to ensure every document you generate is 100% court-ready."
  },
  {
    question: "Is my clients' sensitive case data secure?",
    answer: "Data security is our top priority. We use enterprise-grade encryption, and your case details or prompts are never stored permanently or used to train public AI models. Your confidentiality remains strictly intact."
  },
  {
    question: "Do I need any technical skills to use this platform?",
    answer: "Not at all! JurisTech is designed to be as simple as chatting with a colleague. Just provide the basic case facts and names in plain English, and our AI will instantly format it into professional legal language."
  },
  {
    question: "Can I edit the generated drafts before taking a print?",
    answer: "Yes. Once the AI generates the draft, you can easily copy the text or download it in standard formats (Word/PDF/Text). You have full control to review and make your final tweaks before filing."
  },
  {
    question: "Are there any hidden subscription charges?",
    answer: "No hidden fees, no forced monthly subscriptions. We believe in absolute transparency. You only pay a flat fee of ₹99 per document. You top-up your wallet and use it whenever you need a draft."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.section
      id="faq"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full py-20 lg:py-32 bg-[#030712] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-2xl mb-4 border border-blue-500/20 shadow-[0_0_15px_rgba(37,99,235,0.15)]">
            <MessageCircleQuestion className="w-6 h-6 text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Questions</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-light max-w-2xl mx-auto">
            Find quick answers to common questions about our AI-powered legal drafting assistant and learn how it helps streamline your daily practice.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-sm ${
                activeIndex === index 
                  ? 'bg-blue-900/10 border-blue-500/30 shadow-[0_0_20px_rgba(37,99,235,0.1)]' 
                  : 'bg-[#0a0f1c]/50 border-white/5 hover:border-white/10 hover:bg-[#0a0f1c]'
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
              >
                <span className={`text-base sm:text-lg font-medium transition-colors duration-300 ${activeIndex === index ? 'text-blue-300' : 'text-gray-200'}`}>
                  {faq.question}
                </span>
                <div className={`ml-4 shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300 ${activeIndex === index ? 'bg-blue-500/20 rotate-180' : 'bg-white/5'}`}>
                  <ChevronDown className={`w-5 h-5 ${activeIndex === index ? 'text-blue-400' : 'text-gray-400'}`} />
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-400 text-sm sm:text-base font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default FAQSection;

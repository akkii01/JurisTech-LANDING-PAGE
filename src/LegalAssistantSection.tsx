import React from 'react';
import { motion } from 'framer-motion';

const LegalAssistantSection = () => {
  // 🔥 एनीमेशन का पूरा लूप 8 सेकंड का होगा 🔥
  const loopDuration = 8;
  
  // 'times' ऐरे यह तय करता है कि कौन सा मूवमेंट कितने समय पर होगा (0 से 1 के बीच)
  // [स्टार्ट, लेफ्ट/राइट टच, वापस सेंटर, पॉज खत्म, राइट/लेफ्ट टच, वापस सेंटर, पॉज खत्म]
  const animationTiming = [0, 0.125, 0.25, 0.5, 0.625, 0.75, 1];

  return (
    // overflow-hidden बहुत ज़रूरी है ताकि जब टेक्स्ट स्क्रीन के बाहर जाए तो horizontal scrollbar ना आये
    <section className="relative w-full py-32 bg-[#030712] overflow-hidden flex flex-col items-center justify-center">
      
      <div className="relative w-full flex flex-col items-center justify-center">
        
        {/* ---------------- LEGAL AI (Outline Text) ---------------- */}
        <motion.div
          animate={{ 
            // 0% (Center) -> Left Edge -> 0% (Center) -> Pause -> Right Edge -> 0% (Center) -> Pause
            x: ["0%", "-35vw", "0%", "0%", "35vw", "0%", "0%"] 
          }}
          transition={{ 
            duration: loopDuration, 
            times: animationTiming, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="text-6xl sm:text-8xl md:text-[10rem] font-black uppercase leading-none tracking-tight z-0"
          style={{
            // CSS से ट्रांसपेरेंट और आउटलाइन इफ़ेक्ट
            WebkitTextStroke: "2px rgba(255, 255, 255, 0.15)",
            color: "transparent",
            whiteSpace: "nowrap"
          }}
        >
          Legal AI
        </motion.div>

        {/* ---------------- ASSISTANT (Solid Text) ---------------- */}
        <motion.div
          animate={{ 
            // यह LEGAL AI का एकदम उल्टा चलेगा (Right -> Center -> Left)
            x: ["0%", "35vw", "0%", "0%", "-35vw", "0%", "0%"] 
          }}
          transition={{ 
            duration: loopDuration, 
            times: animationTiming, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          // -mt-6 और md:-mt-16 से ये दोनों शब्द आपस में थोड़े ओवरलैप करेंगे, बिल्कुल स्क्रीनशॉट की तरह
          className="text-6xl sm:text-8xl md:text-[11rem] font-black text-white uppercase leading-none tracking-tight -mt-6 md:-mt-16 z-10 drop-shadow-2xl"
          style={{ whiteSpace: "nowrap" }}
        >
          Assistant
        </motion.div>

      </div>

      {/* ---------------- Bottom Tagline ---------------- */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-16 md:mt-24 text-gray-500 uppercase tracking-[0.3em] sm:tracking-[0.4em] text-xs sm:text-sm md:text-base font-semibold"
      >
        A comprehensive platform
      </motion.p>

    </section>
  );
};

export default LegalAssistantSection;

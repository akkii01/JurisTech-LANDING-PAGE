import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// ----------------- SCATTERED LETTER COMPONENT -----------------
// यह कंपोनेंट हर एक अक्षर को अलग-अलग दिशाओं से खींच कर लाएगा
const ScatteredLetter = ({ children, progress, startX, startY, startRot }: any) => {
  // जब स्क्रॉल 10% से 60% के बीच होगा, तब ये अक्षर अपनी रैंडम जगह से 0 (अपनी असली जगह) पर आ जाएंगे
  const x = useTransform(progress, [0.1, 0.6], [startX, 0]);
  const y = useTransform(progress, [0.1, 0.6], [startY, 0]);
  const rotate = useTransform(progress, [0.1, 0.6], [startRot, 0]);
  const opacity = useTransform(progress, [0.05, 0.3], [0, 1]);

  return (
    <motion.span 
      style={{ x, y, rotate, opacity, display: 'inline-block' }}
      className="text-[12vw] md:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 drop-shadow-[0_0_30px_rgba(37,99,235,0.4)]"
    >
      {children}
    </motion.span>
  );
};

// ----------------- PAPER PARTICLE COMPONENT -----------------
// यह कंपोनेंट हवा में उड़ते हुए पेपर्स बनाएगा जो नाम बनते ही गायब हो जाएंगे
const PaperParticle = ({ progress, startX, startY, startRot, delay }: any) => {
  const x = useTransform(progress, [0.1 + delay, 0.6], [startX, 0]);
  const y = useTransform(progress, [0.1 + delay, 0.6], [startY, 0]);
  const rotate = useTransform(progress, [0.1, 0.6], [startRot, 0]);
  // पेपर्स पास आते-आते छोटे होकर गायब (Fade out) हो जाएंगे
  const opacity = useTransform(progress, [0.1, 0.4, 0.6], [0, 0.6, 0]);
  const scale = useTransform(progress, [0.1, 0.6], [1.5, 0]);

  return (
    <motion.div 
      className="absolute w-4 h-6 sm:w-6 sm:h-8 bg-white/10 rounded-sm border border-white/20 backdrop-blur-sm"
      style={{ x, y, rotate, opacity, scale, originX: 0.5, originY: 0.5 }}
    />
  );
};

const ScrollRevealSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress purely within this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const companyName = "JURISTECH".split("");
  
  // रैंडम पोज़िशन्स (ताकि अक्षर और पेपर्स हर दिशा से आएं)
  const letterPositions = [
    { x: -500, y: -400, r: -45 }, { x: -300, y: 500, r: 60 }, { x: 100, y: -600, r: -20 },
    { x: 600, y: -300, r: 90 }, { x: -600, y: 200, r: -70 }, { x: 400, y: 500, r: 30 },
    { x: -200, y: -500, r: -10 }, { x: 500, y: 300, r: 45 }, { x: 700, y: -100, r: -90 }
  ];

  // 30 रैंडम पेपर पार्टिकल्स जनरेट करना
  const paperParticles = Array.from({ length: 30 }).map((_, i) => ({
    x: (Math.random() - 0.5) * 2000, 
    y: (Math.random() - 0.5) * 1500, 
    r: (Math.random() - 0.5) * 360,
    delay: Math.random() * 0.2
  }));

  // Text Opacity for the creative headings
  const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.8, 1], [1, 1, 0, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    // h-[250vh] gives the user enough scrolling space to see the animation smoothly
    <section ref={containerRef} className="relative w-full h-[250vh] bg-[#030712]">
      
      {/* Sticky container keeps everything in the center of the screen while scrolling */}
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Creative Headings */}
        <motion.div 
          style={{ opacity: textOpacity, y: textY }}
          className="absolute top-[15%] md:top-[20%] text-center px-4 z-20"
        >
          <p className="text-blue-500 font-semibold tracking-wide text-sm md:text-base mb-3 uppercase">
            From chaos to clarity
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Mountains of paperwork.<br/>One perfect draft.
          </h2>
          <p className="text-gray-400 font-light text-sm md:text-lg">
            Keep scrolling — watch the legal clutter transform into precision.
          </p>
        </motion.div>

        {/* Central Animation Area */}
        <div className="relative w-full flex items-center justify-center z-10 mt-20">
          
          {/* Flying Paper Particles */}
          {paperParticles.map((pos, i) => (
            <PaperParticle 
              key={`paper-${i}`} 
              progress={scrollYProgress} 
              startX={pos.x} startY={pos.y} startRot={pos.r} delay={pos.delay} 
            />
          ))}

          {/* Converging JURISTECH Text */}
          <div className="flex">
            {companyName.map((letter, i) => (
              <ScatteredLetter 
                key={i} 
                progress={scrollYProgress} 
                startX={letterPositions[i].x} 
                startY={letterPositions[i].y} 
                startRot={letterPositions[i].r}
              >
                {letter}
              </ScatteredLetter>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ScrollRevealSection;

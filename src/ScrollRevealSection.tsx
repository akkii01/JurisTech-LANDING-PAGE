import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// ----------------- SCATTERED LETTER COMPONENT -----------------
const ScatteredLetter = ({ children, progress, startX, startY, startRot }: any) => {
  const x = useTransform(progress, [0.1, 0.6], [startX, 0]);
  const y = useTransform(progress, [0.1, 0.6], [startY, 0]);
  const rotate = useTransform(progress, [0.1, 0.6], [startRot, 0]);
  const opacity = useTransform(progress, [0.05, 0.2], [0, 1]);

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
const PaperParticle = ({ progress, startX, startY, startRot, delay }: any) => {
  const x = useTransform(progress, [0.1 + delay, 0.6], [startX, 0]);
  const y = useTransform(progress, [0.1 + delay, 0.6], [startY, 0]);
  const rotate = useTransform(progress, [0.1, 0.6], [startRot, 0]);
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
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const companyName = "JurisTech".split("");
  
  const letterPositions = [
    { x: -500, y: -400, r: -45 }, { x: -300, y: 500, r: 60 }, { x: 100, y: -600, r: -20 },
    { x: 600, y: -300, r: 90 }, { x: -600, y: 200, r: -70 }, { x: 400, y: 500, r: 30 },
    { x: -200, y: -500, r: -10 }, { x: 500, y: 300, r: 45 }, { x: 700, y: -100, r: -90 }
  ];

  const paperParticles = Array.from({ length: 30 }).map((_, i) => ({
    x: (Math.random() - 0.5) * 2000, 
    y: (Math.random() - 0.5) * 1500, 
    r: (Math.random() - 0.5) * 360,
    delay: Math.random() * 0.2
  }));

  const textOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.9, 1], [0, 0, -50]);

  return (
    <section ref={containerRef} className="relative w-full h-[250vh] bg-[#030712]">
      
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* 🔥 FIX: 'absolute' हटा दिया है और mb-20 md:mb-32 का मार्जिन दे दिया है 🔥 */}
        <motion.div 
          style={{ opacity: textOpacity, y: textY }}
          className="relative text-center px-4 z-20 mb-20 md:mb-32 mt-[-5rem]"
        >
          <p className="text-blue-500 font-semibold tracking-wide text-sm md:text-base mb-3 uppercase drop-shadow-md">
            From chaos to clarity
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
            Mountains of paperwork.<br/>One perfect draft.
          </h2>
          <p className="text-gray-400 font-light text-sm md:text-lg">
            Keep scrolling — watch the legal clutter transform into precision.
          </p>
        </motion.div>

        {/* Central Animation Area */}
        <div className="relative w-full flex items-center justify-center z-10">
          
          {paperParticles.map((pos, i) => (
            <PaperParticle 
              key={`paper-${i}`} 
              progress={scrollYProgress} 
              startX={pos.x} startY={pos.y} startRot={pos.r} delay={pos.delay} 
            />
          ))}

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

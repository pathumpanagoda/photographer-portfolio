import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import CloudinaryImage from './CloudinaryImage';

const sliderImages = [
  "5_xmo6gy", 
  "1_y3mkde",
  "4_ihmesj",
  "3_gwbjgs",
  "9_hi67hn",
  "8_pjatrv",
];

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-neutral-50">
      {/* Background Parallax Layer relative to container, simplified for clean effect */}
      {/* Full Screen Slider Container */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode='popLayout'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <CloudinaryImage 
              publicId={sliderImages[currentIndex]} 
              alt={`Hero Visual ${currentIndex + 1}`} 
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay for Text Contrast */}
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center p-12 text-center h-full w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl space-y-8"
        >
           <h1 className="text-5xl md:text-7xl lg:text-9xl font-light tracking-tighter text-white leading-[0.9] drop-shadow-sm">
            Visual <br/> 
            <span className="font-serif italic">Poetry.</span>
          </h1>
          <p className="text-white/80 font-light tracking-widest text-lg md:text-xl max-w-lg mx-auto drop-shadow-sm">
            Colombo based Wedding & Portrait Photographer crafting artistic legacies.
          </p>
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white z-20 flex flex-col items-center gap-2 cursor-pointer"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}


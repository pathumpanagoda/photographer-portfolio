import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import CloudinaryImage from './CloudinaryImage';

const sliderImages = [
  { publicId: "5_xmo6gy", title: "GOSSIP POLES" },
  { publicId: "1_y3mkde", title: "Portfolio" },
  { publicId: "4_ihmesj", title: "Flying to loved" },
  { publicId: "3_gwbjgs", title: "Death is the..." },
  { publicId: "9_hi67hn", title: "FAMILY" },
  { publicId: "8_pjatrv", title: "Spring is far away" },
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
              publicId={sliderImages[currentIndex].publicId} 
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
          className="max-w-5xl/ space-y-8"
        >
          <AnimatePresence mode="wait">
             <motion.h1
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-2xl md:text-2xl lg:text-2xl font-light tracking-tighter text-white leading-[1.1] drop-shadow-sm uppercase"
            >
              {/* {sliderImages[currentIndex].title} */}
            </motion.h1>
          </AnimatePresence>
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


import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import CloudinaryImage from './CloudinaryImage';

const sliderImages = [
  "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2070&auto=format&fit=crop", // Couple on beach
  "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=2576&auto=format&fit=crop", // Couple walking
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop", // Wedding details
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop"  // Emotional B&W
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
      <div className="absolute inset-0 flex flex-col md:flex-row">
        <motion.div 
          style={{ y: y1 }}
          className="w-full md:w-1/2 h-1/2 md:h-full bg-neutral-200 relative overflow-hidden"
        >
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
                src={sliderImages[currentIndex]} 
                alt={`Hero Visual ${currentIndex + 1}`} 
                className="w-full h-full object-cover opacity-90"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-white flex items-center justify-center p-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-lg space-y-6"
          >
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-neutral-900 leading-[0.9]">
              Visual <br/> 
              <span className="font-serif italic ml-12">Poetry.</span>
            </h1>
            <p className="text-neutral-500 font-light tracking-wide max-w-sm ml-1">
              Colombo based Wedding & Portrait Photographer crafting artistic legacies.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-neutral-900 z-20 flex flex-col items-center gap-2 cursor-pointer"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}


import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <p className="text-sm md:text-base font-medium tracking-[0.3em] uppercase text-neutral-500 mb-8">
          About Me
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight text-neutral-900 mb-10">
          I’m known for capturing <span className="font-serif italic text-neutral-600">intimate moments</span> as timeless pieces of art.
        </h2>
        <div className="w-24 h-[1px] bg-neutral-900 mx-auto" />
        <p className="mt-10 text-neutral-600 font-light leading-relaxed max-w-2xl mx-auto text-lg">
          Among the best photographers in Sri Lanka, I’m Geeshan, a passionate wedding and portrait photographer. 
          My approach is simple: I listen to your story, and I let it guide my lens. I believe in the beauty of the unscripted, 
          the raw emotion of a glance, and the quiet elegance of a moment frozen in time.
        </p>
      </motion.div>
    </section>
  );
}

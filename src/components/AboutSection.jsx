import React from 'react';
import { motion } from 'framer-motion';
import CloudinaryImage from './CloudinaryImage';
import LaurelWreath from './LaurelWreath';

export default function AboutSection() {
  const awards = [
    { title: "FIAP", award: "Honorable Mention", color: "text-neutral-400" },
    { title: "FIAP", award: "Acceptance", color: "text-neutral-400" },
    { title: "APS", award: "Gold Medal", color: "text-yellow-600" },
    { title: "APS", award: "Honorable Mention", color: "text-neutral-400" },
    { title: "JIUN", award: "Intl. Excellence", color: "text-yellow-600" },
    { title: "NPAS", award: "Gold, Silver & Bronze", color: "text-yellow-600" },
    { title: "NPAS", award: "Honorable Mention", color: "text-neutral-400" },
    { title: "L.E. Samararathne", award: "Best Mono Portrait '24", color: "text-neutral-800" },
    { title: "Youth Award", award: "Gold, Silver & Bronze", color: "text-yellow-600" },
  ];

  return (
    <section id="about" className="container mx-auto px-6 py-24 md:py-32 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <p className="text-sm md:text-base font-medium tracking-[0.3em] uppercase text-neutral-500 mb-4">
            About Me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 lg:gap-24 items-start mb-32">
          <div className="text-neutral-600 font-light leading-relaxed text-base space-y-6">
            <p className="tracking-wide text-justify">
              T.M.W. Tennakoon is an award-winning Sri Lankan art photographer, holding the Licentiate Distinction (LNPAS), a 3-year Diploma in Photography from the National Photography Art Society of Sri Lanka (Operational member of FIAP, Member of PSA, World Photography Center Sri Lanka of GPU) and a National Certificate in Photography (NVQ Level 4) from the National Apprentice and Industrial Training Authority (NAITA) Sri Lanka). He is recognized for expressive visual storytelling and a distinctive artistic vision that blends technical precision with artistic depth.            </p>
            <p className="tracking-wide text-justify">
              Through a thoughtful use of light, composition, and perspective, he transforms ordinary moments into powerful visual narratives that evoke emotion, atmosphere, and meaning. His work reflects a strong eye for detail and a disciplined yet creative approach to image making.
            </p>
            <p className="tracking-wide text-justify">
              Driven by passion and experience, each photograph reveals a careful balance between concept and execution. As his style continues to evolve, T.M.W. Tennakoon’s photography is gaining growing recognition both locally and internationally, establishing him as a compelling voice in contemporary art photography.
            </p>
            
            <div className="pt-8">
              <span className="font-serif italic text-2xl text-neutral-800">T.M.W. Tennakoon</span>
              <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 mt-2">Art Photographer</p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-neutral-100 translate-x-2 translate-y-2 -z-10 transition-transform duration-700 group-hover:translate-x-3 group-hover:translate-y-3" />
              
              <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden shadow-xl w-full max-w-sm">
                <CloudinaryImage 
                  publicId="image_auther" 
                  alt="T.M.W. Tennakoon" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-2xl font-light text-neutral-900 mb-16 tracking-wider inline-block relative">
            International & Sri Lankan Awards
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-neutral-200" />
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 justify-center items-center">
            {awards.map((award, index) => (
              <LaurelWreath 
                key={index}
                title={award.title}
                award={award.award}
                color={award.color}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

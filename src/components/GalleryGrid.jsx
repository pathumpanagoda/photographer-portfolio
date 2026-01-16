import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { galleryData } from '../data/galleryData';
import CloudinaryImage from './CloudinaryImage';

export default function GalleryGrid({ currentCategory }) {
  const filteredItems = currentCategory === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === currentCategory);

  return (
    <section className="container mx-auto px-6 pb-24">
      {/* Editorial Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index % 2 * 0.2 }}
              className={`group flex flex-col ${index % 2 === 1 ? 'md:mt-24' : ''}`}
            >
              <Link to={`/album/${item.id}`} className="block">
                <div className="relative overflow-hidden bg-neutral-100 mb-6 aspect-[4/5] cursor-none custom-cursor-hover">
                  <CloudinaryImage 
                    src={item.coverImage} 
                    publicId={item.coverImagePublicId}
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  />
                </div>
                
                <div className="space-y-1">
                  <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400">{item.category}</p>
                  <h3 className="text-xl font-light tracking-wide text-neutral-900">{item.title}</h3>
                  <p className="text-xs text-neutral-300 tracking-wider group-hover:text-neutral-500 transition-colors duration-300">{item.date}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}


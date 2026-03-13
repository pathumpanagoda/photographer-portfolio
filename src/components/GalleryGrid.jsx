import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { galleryData } from '../data/galleryData';
import CloudinaryImage from './CloudinaryImage';

export default function GalleryGrid({ currentCategory }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = currentCategory === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === currentCategory);

  return (
    <>
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
              <button 
                onClick={() => setSelectedImage(item)} 
                className="block text-left w-full focus:outline-none focus:ring-2 focus:ring-neutral-200"
              >
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
                </div>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>

    {/* Lightbox Modal */}
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-6 right-6 p-2 text-neutral-500 hover:text-white transition-colors z-[110]"
          >
            <X size={32} />
          </button>
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <CloudinaryImage 
              src={selectedImage.coverImage} 
              publicId={selectedImage.coverImagePublicId}
              alt={selectedImage.title} 
              className="max-w-full max-h-[85vh] object-contain drop-shadow-2xl"
            />
            <div className="mt-8 text-center text-white">
               <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-2">{selectedImage.category}</p>
               <h3 className="text-2xl font-light tracking-wide">{selectedImage.title}</h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}


import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { galleryData } from '../data/galleryData';
import CustomCursor from './CustomCursor';
import CloudinaryImage from './CloudinaryImage';

export default function AlbumPage() {
  const { id } = useParams();
  const album = galleryData.find(item => item.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!album) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-light">Album not found</h2>
          <Link to="/" className="text-neutral-500 hover:text-neutral-900 mt-4 block">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-24">
      <CustomCursor />
      
      {/* Navigation Bar like */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-white/90 backdrop-blur-sm">
        <Link to="/" className="group flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 hover:text-neutral-900 transition-colors">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Gallery
        </Link>
        <div className="text-xl font-medium tracking-widest uppercase">Geeshan</div>
        <div className="w-20"></div> {/* Spacer for symmetry */}
      </nav>

      {/* Album Title Header */}
      <header className="pt-32 pb-16 px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-neutral-400 mb-4">{album.category}</p>
          <h1 className="text-4xl md:text-6xl font-light tracking-wide text-neutral-900 mb-6">{album.title}</h1>
          <p className="text-neutral-500 tracking-widest text-sm">{album.date}</p>
        </motion.div>
      </header>

      {/* Collage Grid */}
      <section className="container mx-auto px-4 md:px-12">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {album.albumImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="break-inside-avoid relative group overflow-hidden"
            >
              <CloudinaryImage 
                publicId={img} 
                alt={`${album.title} - ${index}`} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="mt-32 text-center">
        <Link 
          to="/"
          className="inline-block border text-xs tracking-[0.2em] uppercase py-4 px-12 border-neutral-200 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300"
        >
          View More Albums
        </Link>
      </div>
    </div>
  );
}

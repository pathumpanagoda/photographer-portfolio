import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'gallery', label: 'Gallery' },
];

export default function GalleryFilters({ currentCategory, onCategoryChange }) {
  return (
    <div className="flex justify-center mb-12 md:mb-16">
      <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 px-4">
        {categories.map((cat) => (
          <li key={cat.id}>
            <button
              onClick={() => onCategoryChange(cat.id)}
              className={`relative py-2 text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${
                currentCategory === cat.id ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-600'
              }`}
            >
              {cat.label}
              {currentCategory === cat.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-neutral-900"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

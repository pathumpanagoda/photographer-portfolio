import React from 'react';
import { motion } from 'framer-motion';

export default function LaurelWreath({ title, award, color = "text-yellow-600", delay = 0 }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay }}
      className="relative flex flex-col items-center justify-center text-center p-4 w-48 h-48 mx-auto"
    >
      {/* SVG Laurel Wreath */}
      <svg 
        viewBox="0 0 100 100" 
        className={`absolute inset-0 w-full h-full ${color} opacity-80`}
        fill="currentColor"
      >
        <path d="M50 85 C50 85 30 80 20 60 C15 50 15 35 25 20 L28 22 C20 35 22 48 26 55 C30 65 45 70 50 72 C55 70 70 65 74 55 C78 48 80 35 72 22 L75 20 C85 35 85 50 80 60 C70 80 50 85 50 85 Z M25 20 C22 25 20 32 20 40 C20 45 22 50 25 53 L27 50 C25 48 23 45 23 40 C23 35 25 30 28 25 L25 20 Z M75 20 C78 25 80 32 80 40 C80 45 78 50 75 53 L73 50 C75 48 77 45 77 40 C77 35 75 30 72 25 L75 20 Z" />
        {/* Simple leaf details - simplified for elegance */}
        <path d="M20 60 C15 55 10 45 12 30 C13 35 15 40 18 42 C18 42 16 35 16 30" opacity="0.5"/>
        <path d="M80 60 C85 55 90 45 88 30 C87 35 85 40 82 42 C82 42 84 35 84 30" opacity="0.5"/>
      </svg>
      
      {/* Content inside the wreath */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 pt-4">
        <h4 className="text-xs font-bold tracking-widest uppercase text-neutral-800 mb-1">{title}</h4>
        <div className="w-8 h-[1px] bg-neutral-400 mb-1"></div>
        <p className="text-[10px] font-medium text-neutral-600 uppercase tracking-wider leading-tight max-w-[120px]">
          {award}
        </p>
      </div>
    </motion.div>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Mobile Header / Brand */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 md:hidden bg-white/90 backdrop-blur-md">
        <Link to="/" className="text-xl font-medium tracking-widest uppercase">
          Geeshan
        </Link>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-8 items-center text-center">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium tracking-widest uppercase">Home</Link>
              <Link to="/portfolio" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium tracking-widest uppercase">Portfolio</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium tracking-widest uppercase">Contact</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-20 md:pt-0">
        {children}
      </main>

      <footer className="py-12 bg-neutral-900 text-white mt-auto">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-light tracking-widest mb-8" ><a href="https://kodex99.com/" target="_blank">Kodex99</a></h2>
          <div className="flex justify-center gap-6 mb-8 text-neutral-400">
            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Mail size={20} /></a>
          </div>
          <p className="text-xs text-neutral-500 tracking-widest uppercase">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

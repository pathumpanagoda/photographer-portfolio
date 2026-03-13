import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import MainNavbar from './components/MainNavbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import GalleryFilters from './components/GalleryFilters';
import GalleryGrid from './components/GalleryGrid';
import ContactSection from './components/ContactSection';
import CustomCursor from './components/CustomCursor';
import WhatsAppButton from './components/WhatsAppButton';
function HomePage() {
  const [currentCategory, setCurrentCategory] = useState('all');

  return (
    <div className="bg-white min-h-screen">
      <CustomCursor />
      <MainNavbar />
      
      <div id="home">
        <Hero />
      </div>

      <AboutSection />

      <section id="gallery" className="bg-white pt-12 pb-24">
        <div className="container mx-auto px-6 text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-neutral-500">Portfolio</span>
        </div>
{/* <GalleryFilters 
  currentCategory={currentCategory} 
  onCategoryChange={setCurrentCategory} 
/> */}
        <GalleryGrid 
          currentCategory={currentCategory} 
        />
      </section>

      <ContactSection />
      
      <footer className="bg-neutral-900 text-white py-12 text-center">
        <p className="text-xs tracking-widest uppercase text-neutral-500">© 2025 Geeshan Bandara. All rights reserved.</p>
      </footer>
    </div>
  );
}


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <WhatsAppButton />
    </>
  );
}

export default App;

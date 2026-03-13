import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-neutral-50 py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-neutral-500">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-light mt-4 text-neutral-900">Let's create something beautiful.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-8"
          >
            <div className="space-y-6 text-neutral-600 font-light">
              <p className="text-lg">
                Available for commissions worldwide. <br/>
                Please fill out the form or reach out directly.
              </p>
              
              <div className="space-y-4 pt-4">
                <a href="mailto:tmwtennakoon71@gmail.com" className="flex items-center gap-4 hover:text-neutral-900 transition-colors">
                  <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center">
                    <Mail size={16} />
                  </div>
                  <span className="tracking-wider">info@tmwtennakoon.com</span>
                </a>
                <a href="tel:+94773219199" className="flex items-center gap-4 hover:text-neutral-900 transition-colors">
                  <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center">
                    <Phone size={16} />
                  </div>
                  <span className="tracking-wider">+94 77 321 9199</span>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center">
                    <MapPin size={16} />
                  </div>
                  <span className="tracking-wider">Colombo, Sri Lanka</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
            action="https://formsubmit.co/tmwtennakoon71@gmail.com"
            method="POST"
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" style={{ display: 'none' }} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                name="name"
                required
                placeholder="Name" 
                className="w-full bg-white border border-neutral-200 px-4 py-3 focus:outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-300 font-light" 
              />
              <input 
                type="email" 
                name="email"
                required
                placeholder="Email" 
                className="w-full bg-white border border-neutral-200 px-4 py-3 focus:outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-300 font-light" 
              />
            </div>
            <input 
              type="text" 
              name="subject"
              required
              placeholder="Subject / Event Date" 
              className="w-full bg-white border border-neutral-200 px-4 py-3 focus:outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-300 font-light" 
            />
            <textarea 
              name="message"
              required
              rows="5" 
              placeholder="Tell me about your story..." 
              className="w-full bg-white border border-neutral-200 px-4 py-3 focus:outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-300 font-light resize-none"
            ></textarea>
            
            <button 
              type="submit"
              className="bg-neutral-900 text-white px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-neutral-800 transition-colors w-full md:w-auto flex justify-center items-center gap-2"
            >
              Send Message <ArrowRight size={14} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

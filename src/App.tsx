/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">
        <div className="flex flex-col items-center gap-8">
          <div className="grid grid-cols-2 grid-rows-2 gap-2 w-20 h-20 animate-pulse">
            <div className="bg-accent-green rounded-md"></div>
            <div className="bg-secondary-blue rounded-md"></div>
            <div className="bg-primary-blue rounded-md"></div>
            <div className="bg-[#20c997] rounded-md"></div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-display font-bold text-primary-blue tracking-tight uppercase">Misión Plus</h2>
            <div className="w-48 h-1 bg-gray-100 rounded-full mt-4 overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 1.5, ease: "easeInOut" }}
                 className="h-full bg-accent-green"
               />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white selection:bg-accent-green/30 selection:text-primary-blue">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent-green z-[10001] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Benefits />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

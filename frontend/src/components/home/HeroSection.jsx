/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const headerRef = useRef(null);
  const textRef = useRef(null);
  const buttonContainerRef = useRef(null);

  useEffect(() => {
    // GSAP Animation for hero text
    gsap.from(textRef.current, {
      duration: 1.5,
      y: 50,
      opacity: 0,
      ease: "power3.out",
    });

    // GSAP Animation for buttons with stagger
    gsap.from(buttonContainerRef.current.children, {
      duration: 0.8,
      y: 30,
      opacity: 0,
      stagger: 0.2,
      ease: "back.out(1.7)",
      delay: 0.8
    });

    // Parallax effect on scroll
    gsap.to(headerRef.current, {
      backgroundPositionY: "30%",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  return (
    <header 
      ref={headerRef}
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/church-hero.jpg")' 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-indigo-900/60 z-0"></div>
      
      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          ref={textRef}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 leading-tight">
            Discover God's Purpose For Your Life
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light">
            Join us in worship and embark on a journey of faith, community, and purpose.
          </p>
        </motion.div>

        <div ref={buttonContainerRef} className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium text-lg transition duration-300 transform shadow-lg"
          >
            Join Us Sunday
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent hover:bg-white/10 text-white border-2 border-white rounded-md font-medium text-lg transition duration-300 transform shadow-lg"
          >
            Watch Sermons
          </motion.button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 1.5
        }}
      >
        <svg 
          className="w-10 h-10 text-white opacity-70" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </header>
  );
};

export default HeroSection;